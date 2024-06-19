// XXX: For testing only
import { NextRequest, NextResponse } from 'next/server';
import data from '@/app/api/export/export-data.json';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NextResponse.json(data));
    }, 2000);
  });
}
