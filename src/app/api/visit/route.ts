import { Datastore } from '@google-cloud/datastore';
import { NextResponse } from 'next/server';

const datastore = new Datastore();
const counterKey = datastore.key(['Counters', 'visits']);

async function handleRequest() {
  console.log('Visit API endpoint hit.');
  try {
    console.log('Attempting to run Datastore transaction...');
    const transaction = datastore.transaction();
    await transaction.run();

    const [counter] = await transaction.get(counterKey);

    if (!counter) {
      console.log('Document does not exist. Creating with count: 1');
      const newCounter = {
        key: counterKey,
        data: {
          count: 1,
        },
      };
      transaction.save(newCounter);
    } else {
      const newCount = (counter.count || 0) + 1;
      console.log(`Document exists. Updating count to: ${newCount}`);
      counter.count = newCount;
      transaction.save(counter);
    }

    await transaction.commit();
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