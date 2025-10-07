"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (sortBy && sortBy.trim() !== "") {
      router.push(`/videos?query=${search.trim()}&sortBy=${sortBy}`);
    } else {
      router.push(`/videos?query=${search.trim()}`);
    }
  };

  const handleSortBy = (e: any) => {
    console.log("select sort by", e.target.value);
    setSortBy(e.target.value);
    if (search && search.trim() !== "") {
      router.push(`/videos?query=${search.trim()}&sortBy=${e.target.value}`);
    } else {
      router.push(`/videos?sortBy=${e.target.value}`);
    }
  };

  return (
    <div className="flex items-center w-full max-w-lg mx-auto mt-6">
      <input
        type="text"
        placeholder="Search videos..."
        value={search}
        onChange={handleChange}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-teal-500 text-white font-medium rounded-r-xl hover:bg-teal-600 transition-colors duration-300"
      >
        Search
      </button>
      <select
        onChange={handleSortBy}
        className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
      >
        <option value="">Sort By</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="mostViewed">Most Viewed</option>
        <option value="mostLiked">Most Liked</option>
      </select>
    </div>
  );
}

export default SearchBar;
