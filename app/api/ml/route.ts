// app/api/forward/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const video_id = searchParams.get("video_id");

    const res = await fetch(
      `https://s-monicom.up.railway.app/predict_comments/?video_id=${video_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // 🔹 empty JSON body
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "API call failed" }, { status: 500 });
  }
}
