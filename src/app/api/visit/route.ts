import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    // Increment count in Vercel KV storage
    const count = await kv.incr('visit-counter');
    console.log(`Visit count: ${count}`);
    
    return NextResponse.json({ 
      success: true, 
      count 
    }, { status: 200 });
  } catch (error) {
    console.error('Error in visit counter API:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal Server Error'
    }, { status: 500 });
  }
}

export async function POST() {
  return GET();
}