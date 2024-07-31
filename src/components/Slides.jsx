// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards'
import Card2 from "./Card2";
import { useEffect,useState } from "react";
function Slides() {
    
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [data, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=Money');
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
       <div className="mt-10 pt-5 px-6 md:px-20  ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Only For You</h1>
          <p className="ml-7">
          Books are timeless treasures that hold the power to educate, inspire, and entertain. They serve as windows into different worlds, offering readers a chance to explore new ideas and perspectives. From classic literature to contemporary bestsellers, books encompass a vast array of genres and themes, catering to diverse interests and tastes
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {list.filter((itmes)=>{
                return itmes.category==='forYou'
            }) .map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    
      <div>
      {data.map((item) => (
            <Card2 item={item} key={item.id} />
      ))}
      </div>
    </>
  )
}

export default Slides
