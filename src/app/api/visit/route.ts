import { NextResponse } from 'next/server';
import { Datastore } from '@google-cloud/datastore';

// Initialize Datastore
// On Google Cloud (e.g., App Engine, Cloud Run), authentication is handled automatically.
// For local development, you would need to set up authentication, for example,
// by setting the GOOGLE_APPLICATION_CREDENTIALS environment variable.
const datastore = new Datastore();
const counterKey = datastore.key(['PageVisit', 'site-counter']);

/**
 * Atomically retrieves and increments the visitor count in Datastore.
 * Uses a transaction to prevent race conditions.
 * @returns {Promise<number>} The new visit count.
 */
async function getAndIncrementCount() {
  const transaction = datastore.transaction();
  let transactionStarted = false;
  
  try {
    await transaction.run();
    transactionStarted = true;
    const [counter] = await transaction.get(counterKey);

    const newCount = (counter?.count || 0) + 1;
    
    const data = {
        count: newCount,
        updated: new Date() // Also track the last update time
    };

    transaction.save({
      key: counterKey,
      data: data,
    });

    await transaction.commit();
    return newCount;
  } catch (err) {
    // Only rollback if the transaction was successfully started
    if (transactionStarted) {
      await transaction.rollback();
    }
    // Re-throw the error to be caught by the handler
    throw err;
  }
}

async function handleRequest() {
  console.log('Visit API endpoint hit.');
  try {
    const visitCount = await getAndIncrementCount();
    console.log(`Visit count incremented to: ${visitCount}`);
    
    return NextResponse.json({ 
      success: true, 
      count: visitCount 
    }, { status: 200 });
  } catch (error) {
    console.error('Error in visit counter API:', error);
    const details = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ 
      success: false, 
      error: 'Internal Server Error', 
      details 
    }, { status: 500 });
  }
}

export async function GET() {
  return handleRequest();
}

export async function POST() {
  return handleRequest();
}