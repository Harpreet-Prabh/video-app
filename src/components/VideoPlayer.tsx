"use client";
import Link from "next/link";
import React from "react";

function VideoPlayer({ video, id }: { video: any; id: string }) {
  console.log(video.video.items);
  let playVideo = video.video.items;
  console.log(id);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        {playVideo.snippet.localized.title}
      </h1>
      <div className="container mx-auto px-4 py-8 max-h-screen overflow-y-auto">
        <div className="aspect-w-16 aspect-h-9">
          <Link href="/" className="text-blue-500 underline mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${id}`}
            title={playVideo.snippet.localized.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {playVideo.snippet.channelTitle}
          </h2>
          <p className="text-gray-600 mt-2">
            {playVideo.snippet.localized.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
