import { NextResponse } from 'next/server';

// Use a simple in-memory counter instead of Google Cloud Datastore
// This is a temporary solution to fix the build error
// In production, you would want to persist this data

// Note: This counter will reset on server restart
let visitCount = 0;

async function handleRequest() {
  console.log('Visit API endpoint hit.');
  try {
    // Increment the counter
    visitCount += 1;
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

// Add a comment explaining what needs to be done for production
/*
 * TODO: For production deployment:
 * 1. Set up proper Google Cloud credentials
 * 2. Re-implement using Datastore or another persistent database
 * 3. Consider using environment variables for configuration
 */