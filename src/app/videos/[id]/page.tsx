import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

async function VideoPlay({ params }: { params: { id: string } }) {
  const { id } = await params;
  console.log(id);

  const res = await fetch(
    `https://api.freeapi.app/api/v1/public/youtube/videos/${id}`
  );
  const data = await res.json();
  console.log(data);

  const video = data.data;

  return (
    <div>
      <VideoPlayer video={video} id={id} />
    </div>
  );
}

export default VideoPlay;
