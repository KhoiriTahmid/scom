import { CommentType } from "@/entities/comments";

export async function processComments(video_id: string) {
  return await fetch(`/api/ml?video_id=${video_id}`)
    .then((data) => data.json())
    .then((data) => data);
}

export async function getComments(): Promise<CommentType[]> {
  return await fetch(`/api/data?`)
    .then((data) => data.json())
    .then((data) => data);
}

export async function polling(video_id: string) {
  return await fetch(`/api/polling?video_id=${video_id}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      return data.status == "processing" ? false : true;
    });
}
