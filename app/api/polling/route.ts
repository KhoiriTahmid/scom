// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { initDataSource } from "@/lib/data-source";
import { Comment } from "@/entities/comments";
import { IsNull } from "typeorm";

export async function GET(req: NextRequest) {
  const dataSource = await initDataSource();
  const comments = dataSource.getRepository(Comment);

  const { searchParams } = new URL(req.url);
  const video_id = searchParams.get("video_id")?.trim();

  if (!video_id)
    return NextResponse.json(
      { error: "tidak ada video id yang diberikan" },
      { status: 400 }
    );

  const result = await comments.findOne({
    where: [
      { video_id, is_judol: IsNull() },
      { video_id, sentimen: IsNull() },
    ],
  });

  return NextResponse.json({ status: result ? "processing" : "done" });
}
