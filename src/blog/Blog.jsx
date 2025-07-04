import React, { useEffect, useState } from "react";

export default function BlogGrid() {
  const [urldata, setUrldata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const url = await fetch("https://jsonplaceholder.typicode.com/posts");
        const urldata = await url.json();
        setUrldata(urldata);
      } catch (error) {
        console.error("you have error");
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {urldata.map((post, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* <img
              src={`https://source.unsplash.com/400x200/?nature,mountain,${index}`}
              alt="Post"
              className="w-full h-40 object-cover rounded-md mb-4"
            /> */}
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {post.title.slice(0, 40)}...
            </h2>
            <p className="text-gray-500 text-sm mb-2">By User {post.userId}</p>
            <p className="text-gray-700 text-sm">
              {post.body.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
