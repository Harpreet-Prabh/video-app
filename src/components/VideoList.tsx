import Image from "next/image";
import Link from "next/link";
import React from "react";

function VideoList({ video }: { video: any }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 mb-6">
      <Link href={`/videos/${video.items.id}`}>
        {/* Thumbnail */}
        <div className="relative w-full h-48">
          <Image
            src={video.items.snippet.thumbnails.medium.url}
            alt={video.items.snippet.title}
            className=" w-full h-full"
            height={120}
            width={200}
            priority
          />
        </div>

        {/* Details */}
        <div className="p-4">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
            {video.items.snippet.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(video.items.snippet.publishedAt).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default VideoList;
