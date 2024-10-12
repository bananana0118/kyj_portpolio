import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const data = await req.json(); // POST 요청의 본문을 JSON으로 파싱
    return NextResponse.json({ receivedData: data });
  }
  