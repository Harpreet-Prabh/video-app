import VideoList from "@/components/VideoList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Home() {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/youtube/videos"
  );
  const data = await res.json();
  console.log(data);
  const videos = data.data.data;

  console.log(videos);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video: any, index: number) => (
          <VideoList key={video.items.id ?? index} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;
