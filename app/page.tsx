"use client";
import { useEffect, useState } from "react";
import { getComments, processComments, polling } from "./services";
import { CommentType } from "@/entities/comments";

export default function Home() {
  const [data, setData] = useState<CommentType[]>([]);
  const video_id = "qr9BpA0OlXw";

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    (async () => {
      const status = await processComments(video_id); //manggil api ML
      if (status) {
        const hasil = (await getComments()) as CommentType[]; // kalo berhasil ambil data dari db buat ditampilin
        setData(hasil);
      }

      intervalId = setInterval(async () => {
        if (await polling(video_id)) {
          clearInterval(intervalId);

          const hasil = await getComments();

          setData((prevData) => {
            if (prevData.length !== hasil.length) {
              console.log({
                error: "Panjang data awal dan data update tidak sama",
              });
              return prevData; // Don't update
            }

            const updated = prevData.map((row, index) => ({
              ...row,
              is_judol: hasil[index].is_judol,
              is_spam: hasil[index].is_spam,
              sentimen: hasil[index].sentimen,
            }));

            console.log(3);
            return updated;
          });
        }
      }, 2000);
    })();

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-screen items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.map((e) => (
        <>{JSON.stringify(e)}</>
      ))}
    </div>
  );
}
