import { Firestore } from '@google-cloud/firestore';
import { NextResponse } from 'next/server';

const firestore = new Firestore();
const counterRef = firestore.collection('counters').doc('visits');

async function handleRequest() {
  console.log('Visit API endpoint hit.');
  try {
    console.log('Attempting to run Firestore transaction...');
    await firestore.runTransaction(async (transaction) => {
      console.log('Transaction started.');
      const doc = await transaction.get(counterRef);
      if (!doc.exists) {
        console.log('Document does not exist. Creating with count: 1');
        transaction.create(counterRef, { count: 1 });
      } else {
        const newCount = (doc.data()?.count || 0) + 1;
        console.log(`Document exists. Updating count to: ${newCount}`);
        transaction.update(counterRef, { count: newCount });
      }
    });
    console.log('Transaction completed successfully.');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Detailed error in visit counter API:', error);
    const details = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: 'Internal Server Error', details }, { status: 500 });
  }
}

export async function GET() {
  return handleRequest();
}

export async function POST() {
  return handleRequest();
}