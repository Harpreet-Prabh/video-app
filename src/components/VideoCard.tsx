import React from "react";

function VideoCard({ video }: { video: any }) {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          {video.snippet.title}
        </h2>
        <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
}

export default VideoCard;
