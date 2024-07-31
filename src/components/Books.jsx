import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card3 from "./Card3";

function Books() {
  const [data, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=alltypeOfBookonlyEnglish');
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="pt-24 md:pt-32 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We’re delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Books are timeless treasures that hold the power to educate, inspire, and entertain. They serve as windows into different worlds, offering readers a chance to explore new ideas and perspectives. From classic literature to contemporary bestsellers, books encompass a vast array of genres and themes, catering to diverse interests and tastes. Whether one seeks to escape into a riveting story, expand their knowledge on a particular subject, or simply unwind with a good read, books provide a welcome retreat from the hustle and bustle of everyday life. They hold the ability to spark imagination, evoke empathy, and provoke thought, making them indispensable tools for personal growth and enlightenment. In a world filled with digital distractions, books remain steadfast in their ability to captivate, inform, and challenge readers, ensuring their enduring relevance in our lives.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 ml-8 sm:ml-0 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-5 md:grid-cols-3">
        {data.map((item) => (
          <Card3 key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Books;
