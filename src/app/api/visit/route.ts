import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  try {
    // Get current count from Edge Config
    let count = (await get('visit_counter')) || 0;
    
    // Increment count
    count = Number(count) + 1;
    
    // In a real app, you'd persist this back to Edge Config
    // For demo purposes, we'll just return the incremented value
    console.log(`Visit count: ${count}`);
    
    return NextResponse.json({ 
      success: true, 
      count,
      note: "In production, implement Edge Config persistence"
    });
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