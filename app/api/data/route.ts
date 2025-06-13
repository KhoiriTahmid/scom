import { NextRequest, NextResponse } from "next/server";
import { initDataSource } from "@/lib/data-source";
import { Comment } from "@/entities/comments";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const video_id = searchParams.get("video_id")?.trim();

  const dataSource = await initDataSource();
  const comments = dataSource.getRepository(Comment);

  const users = await comments.find({
    where: { video_id },
  });
  return NextResponse.json(users);
}
