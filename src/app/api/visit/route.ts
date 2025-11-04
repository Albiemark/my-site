import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Mock KV for local development
const isLocal = process.env.NODE_ENV === 'development';
let mockCount = 0;

export async function GET() {
  try {
    if (isLocal) {
      // Local development - use mock counter
      mockCount += 1;
      console.log(`Local visit count: ${mockCount}`);
      return NextResponse.json({ 
        success: true, 
        count: mockCount,
        isLocal: true
      });
    }

    // Production - use Vercel KV
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      throw new Error('Vercel KV environment variables not configured');
    }

    const count = await kv.incr('visit-counter');
    console.log(`Production visit count: ${count}`);
    
    return NextResponse.json({ 
      success: true, 
      count 
    });
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

export async function POST() {
  return GET();
}