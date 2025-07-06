import { Firestore } from '@google-cloud/firestore';
import { NextResponse } from 'next/server';

const firestore = new Firestore();
const counterRef = firestore.collection('counters').doc('visits');

export async function POST() {
  try {
    await firestore.runTransaction(async (transaction) => {
      const doc = await transaction.get(counterRef);
      if (!doc.exists) {
        transaction.create(counterRef, { count: 1 });
      } else {
        const newCount = doc.data()?.count + 1;
        transaction.update(counterRef, { count: newCount });
      }
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing visit count:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}