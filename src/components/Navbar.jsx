// import React from "react";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';


function Navbar() {

  // Theme Toggle: 
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);



  // Sticky Position:
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const lights = (
    <>
        <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
    </>
  )

  const navItems = (
    <>
    <ul className="menu lg:menu-horizontal  rounded-box md:mr-8 font-semibold text-[16px] gap-2">
      <li>
        <Link to={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
          {/* <span className="badge badge-sm">99+</span> */}
        </Link>
      </li>
      <li>
        <Link to={'/books'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Books
          <span className="badge badge-sm badge-warning">NEW</span>
        </Link>
      </li>
      <li>
        <Link to={'/about'}>
          About
          <span className="badge badge-xs badge-info"></span>
        </Link>
      </li>
    </ul>
  </>
  );
  
 


  return (
    <>
      <div className={`fixed  z-10 w-full dark:bg-slate-800 dark:text-white px-5 md:px-14 shadow-sm flex items-center justify-between  ${sticky ?" sticky-navbar  bg-slate-100 dark:bg-slate-800 dark:text-white  ":""} `}>
        <div className={`navbar bg-base-100  ${sticky ?" sticky-navbar  bg-slate-100 dark:bg-slate-800 dark:text-white  ":""}`}>
            <div className="flex flex-row items-center   ">
            <a className="font-bold text-xl">Readers</a>
          </div>

          <div className=" ml-auto ">
            <div className='hidden lg:flex'>
            {navItems}
          </div>
          <div className="hidden  md:block  mr-4">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="hidden md:flex mr-4">
              {lights}
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold "
              >
                <li className=''>
                  <a className="text-[16px] ml-3" >
                  <i className="fa-solid fa-user"></i>
                    Profile
                  </a>
                </li >
                <div className='md:hidden'>
                {navItems}
                </div>
                <li>
                  <a className='ml-3'>
                <i className="fa-solid fa-gear"></i>
                    Settings
                    </a>
                </li>
                <li>
                  <Link className='ml-3' onClick={()=>{document.getElementById('my_modal_3').showModal()}}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                    Login
                    </Link>
                  <Login/>
                </li>
                <li>
                  <a className='ml-3'>
                  <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                    </a>
                </li>
                <li>
                  <a > {lights}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;