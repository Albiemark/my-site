import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  runtime: 'edge',
};

let localCount = 0;

export async function GET() {
  try {
    // Development mode - use in-memory counter
    if (process.env.NODE_ENV === 'development') {
      localCount++;
      return NextResponse.json({ 
        success: true, 
        count: localCount,
        environment: 'development'
      });
    }

    // Production mode - use Edge Config
    const count = await get('visit_counter') || 0;
    const newCount = Number(count) + 1;
    
    // Update Edge Config
    await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.EDGE_CONFIG_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: [{
            operation: 'upsert',
            key: 'visit_counter',
            value: newCount.toString()
          }]
        })
      }
    );

    return NextResponse.json({ 
      success: true, 
      count: newCount,
      environment: 'production'
    });
    
  } catch (error) {
    console.error('Visit counter error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Counter service unavailable',
      details: process.env.NODE_ENV === 'development'
        ? error instanceof Error ? error.message : String(error)
        : 'Please try again later'
    }, { status: 503 });
  }
}

export async function POST() {
  return GET();
}