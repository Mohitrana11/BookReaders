// import React from 'react'
// import banners from '../../public/Banner.png'
import logo from "../../public/logoimg.png";
function AboutUsers() {
  return (
    <>
      <div className="pt-10">
        {/* Div 2" */}
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                  Doing something is best
                </h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  Read Books Improve you self
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                          Mohit SIngh
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, odit.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                      Mohit SIngh
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base text-blue-500 ">
                        Hi, every one my name Mohit , I created a website were you can read books free
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                        Neptune
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Send me You massage */}
        <div className="w-80  md:w-1/2 mx-auto mb-10">
        <div className=" md:px-12 border px-6 py-8 rounded-3xl  ">
                    <p className="text-2xl font-bold text-gray-900 md:text-4xl      ">
                      Get in touch
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <form action="" className="mt-8 space-y-4">
                      <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                        <div className="grid w-full  items-center gap-1.5">
                          <label
                            className="text-md font-bold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                            
                          >
                            First Name
                          </label>
                          <input
                            className="outline-none border px-4 py-2 rounded-md"
                            type="text"
                            id="first_name"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                          <label
                            className="text-md font-bold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                           
                          >
                            Last Name
                          </label>
                          <input
                            className="outline-none border px-4 py-2 rounded-md"
                            type="text"
                            id="last_name"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-md font-bold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          className="outline-none border px-4 py-2 rounded-md"
                          type="text"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-md font-bold leading-none text-black  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      
                        >
                          Phone number
                        </label>
                        <input
                          className="outline-none border px-4 py-2 rounded-md"
                          type="tel"
                          id="phone_number"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-md font-bold leading-none text-black  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                         
                        >
                          Message
                        </label>
                        <textarea
                          className="outline-none border px-4 py-2 rounded-md"
                          id="message"
                          placeholder="Leave us a message"
                          cols="4"
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        className="w-full rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
        </div>
       


        <div>
          <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src={logo} alt="" className="w-16 h-14" />
                <span className="text-2xl font-semibold">Reader</span>
              </a>
              <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                Contact Me
                <a
                  href="https://twitter.com/knyttneve"
                  className="text-gray-600 ml-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @MohitSingh
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5 hover:text-blue-500 duration-75 cursor-pointer"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5 hover:text-blue-500 duration-75 cursor-pointer"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 hover:text-orange-500 duration-75 cursor-pointer "
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5 hover:text-blue-500 duration-75 cursor-pointer"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default AboutUsers;
