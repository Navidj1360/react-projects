import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isVisble, setisVisble] = useState(false);
  return (
    <nav
      className="fixed w-full   flex flex-wrap items-center
     justify-between px-2 py-3 bg-gray-500  "
    >
      <div
        className="container backdrop-blur-sm
       px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          className="w-full   relative flex justify-between 
        lg:w-auto  px-4 lg:static lg:block lg:justify-start"
        >
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            ShopPro
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
            border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
            onClick={() => setisVisble(!isVisble)}
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className={
            "lg:flex  flex-grow items-center transition-all duration-300 ease-in " +
            (isVisble ? " flex" : "hidden")
          }
          id="example-navbar-warning"
        >
          <ul className=" flex-row list-none mr-auto lg:flex ">
            <li className="nav-item ">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-gray-200 opacity-75" />
                <span className="ml-2">check out</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-gray-200 opacity-75" />
                <span className="ml-2">category</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 hover:opacity-75"
                href="#pablo"
              >
                <span className="ml-2">sign in</span>
              </a>
            </li>
          </ul>
          <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
            <div className="flex">
              <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-600 rounded-full text-sm bg-gray-100 items-center rounded-r-none pl-2 py-1 text-gray-800 border-r-0 placeholder-gray-300">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="px-2 py-1 h-8 border border-solid 
               border-gray-600 rounded-full text-sm leading-snug text-gray-700 bg-gray-100 shadow-none 
               outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-300"
              placeholder="Search gray"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
