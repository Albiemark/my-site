import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const counterPath = path.join(process.cwd(), 'visit-counter.json');

async function getAndIncrementCount() {
  try {
    // Read current count
    let data = { count: 0, lastUpdated: new Date().toISOString() };
    try {
      const fileData = await fs.readFile(counterPath, 'utf8');
      data = JSON.parse(fileData);
    } catch (err) {
      // File doesn't exist yet - will create it
    }

    // Increment count
    data.count += 1;
    data.lastUpdated = new Date().toISOString();

    // Save updated count
    await fs.writeFile(counterPath, JSON.stringify(data, null, 2));

    return data.count;
  } catch (error) {
    console.error('Error updating visit counter:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const count = await getAndIncrementCount();
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