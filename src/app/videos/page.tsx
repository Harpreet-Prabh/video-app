import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";

async function Videos({
  searchParams,
}: {
  searchParams: Promise<{ query: string; sortBy: string }>;
}) {
  const variables = await searchParams;
  console.log(variables);
  let url = `https://api.freeapi.app/api/v1/public/youtube/videos`;

  if (variables.query && variables.sortBy) {
    url += `?query=${variables.query}&sortBy=${variables.sortBy}`;
  } else if (variables.sortBy) {
    url += `?sortBy=${variables.sortBy}`;
  } else if (variables.query) {
    url += `?query=${variables.query}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const videos = data.data.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>

      {/* Search bar with spacing */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video: any, index: number) => (
          <VideoList key={video.items.id ?? index} video={video} />
        ))}
      </div>

      <div className="mb-8">
        <Pagination />
      </div>
    </div>
  );
}

export default Videos;
