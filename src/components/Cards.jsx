// import React from "react";
import { useState } from "react";
import BookDiscription from "./BookDiscription";

function Cards({ item }) {
  const [show ,setShow] = useState(false);
  const [bookItem ,setItem] = useState();
 
  return (
    <>
      <div className="mt-4 my-3 p-3 "  onClick={()=>{setShow(true);setItem(item); document.getElementById('vitarow').showModal(); }} >
        <div className="card w-80 max-h-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookDiscription show={show} item={bookItem} />
    </>
  );
}

export default Cards;
