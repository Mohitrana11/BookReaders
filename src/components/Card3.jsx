import React, { useState } from "react";
import BookAbout from "./BookAbout";

function Card3({ item }) {

  const [book,setBook] = useState(false);
  const [bookItem,setItem] = useState();
  // Helper function to truncate the description to 20 words
  const truncateDescription = (description) => {
    if (!description) return "No description available";
    const words = description.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
  };

  return (
    <>
      <div className="mt-4 my-3 p-3"   onClick={()=>{setBook(true);setItem(item); document.getElementById('vitarow23').showModal(); }}>
        <div className="card w-80 max-h-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.volumeInfo.title}
              {item.volumeInfo.categories && (
                <div className="badge badge-secondary">{item.volumeInfo.categories[0]}</div>
              )}
            </h2>
            <p>{truncateDescription(item.volumeInfo.description)}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                {item.saleInfo?.listPrice ? `$${item.saleInfo.listPrice.amount}` : "Price Not Available"}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookAbout show={book} item={bookItem} />
    </>
  );
}

export default Card3;
