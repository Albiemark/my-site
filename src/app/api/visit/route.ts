import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  runtime: 'edge',
};

const COUNTER_FILE = path.join(process.cwd(), 'visit-counter.json');

async function getLocalCount() {
  try {
    const data = await fs.readFile(COUNTER_FILE, 'utf8');
    return JSON.parse(data).count;
  } catch {
    return 0;
  }
}

async function updateLocalCount(newCount: number) {
  await fs.writeFile(
    COUNTER_FILE,
    JSON.stringify({
      count: newCount,
      lastUpdated: new Date().toISOString()
    })
  );
}

export async function GET() {
  // Use local JSON if Edge Config not configured
  if (!process.env.EDGE_CONFIG_ID || !process.env.EDGE_CONFIG_TOKEN) {
    try {
      const currentCount = await getLocalCount();
      const newCount = currentCount + 1;
      await updateLocalCount(newCount);
      return NextResponse.json({
        success: true,
        count: newCount,
        environment: 'local-fallback'
      });
    } catch (error) {
      console.error('Local counter error:', error);
      return NextResponse.json({
        success: false,
        error: 'Failed to update local counter'
      });
    }
  }

  // Otherwise use Edge Config
  try {
    const count = await get('visit_counter') || 0;
    const newCount = Number(count) + 1;
    
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
    console.error('Edge Config error:', error);
    return NextResponse.json({
      success: false,
      error: 'Edge Config operation failed'
    });
  }
}

export async function POST() {
  return GET();
}