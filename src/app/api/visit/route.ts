import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// Simple in-memory counter for local development
let localCount = 0;

export const config = {
  runtime: 'edge',
};

async function updateEdgeConfig(key: string, value: string) {
  // Edge Config requires a different approach for updates
  const response = await fetch(
    `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.EDGE_CONFIG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          operation: 'upsert',
          key,
          value
        }]
      })
    }
  );

  if (!response.ok) {
    throw new Error('Failed to update Edge Config');
  }
}

export async function GET() {
  try {
    // Local development - use in-memory counter
    if (process.env.NODE_ENV === 'development') {
      localCount++;
      console.log(`Local visit count: ${localCount}`);
      return NextResponse.json({ 
        success: true, 
        count: localCount,
        environment: 'development'
      });
    }

    // Production - use Edge Config
    if (!process.env.EDGE_CONFIG_ID || !process.env.EDGE_CONFIG_TOKEN) {
      throw new Error('Edge Config not properly configured');
    }

    // Get current count
    let count = (await get('visit_counter')) || 0;
    count = Number(count) + 1;
    
    // Update count using direct API call
    await updateEdgeConfig('visit_counter', count.toString());

    console.log(`Production visit count: ${count}`);
    return NextResponse.json({ 
      success: true, 
      count,
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