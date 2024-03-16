"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import {
  PiTelevision,
  PiTrophy,
  PiMagnifyingGlass,
  PiSidebar,
} from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  return (
    <div className="z-20 w-full h-100vh bg-[#121212] flex justify-left items-center">
      <nav className="h-[60px] w-[60px] my-auto flex justify-center align-middle">
        <button
          onClick={toggleSidebar}
          className="group ml-2 my-auto font-bold flex justify-center align-middle rounded-[50%] hover:bg-white hover: transition-color ease-linear duration-300 p-1 hover:scale-[110%]">
          <PiSidebar className="w-[35px] h-[35px] text-white group-hover:text-[#121212] m-auto" />
        </button>
      </nav>
      <nav className="h-[60px] w-min my-auto flex justify-center align-middle">
        <Link
          href="/"
          className="group ml-6 my-auto font-bold flex justify-center align-middle rounded-[50%] hover:bg-white hover: transition-color ease-linear duration-300 p-1 hover:scale-[110%]">
          <AiOutlineHome className="w-[35px] h-[35px] text-white group-hover:text-[#121212] m-auto" />
        </Link>
        <Link
          href="/"
          className="group ml-6 my-auto font-bold flex justify-center align-middle rounded-[50%] hover:bg-white hover: transition-color ease-linear duration-300 p-1 hover:scale-[110%]">
          <PiTelevision className="w-[35px] h-[35px] text-white group-hover:text-[#121212] m-auto" />
        </Link>
        <Link
          href="/"
          className="group ml-6 my-auto font-bold flex justify-center align-middle rounded-[50%] hover:bg-white hover: transition-color ease-linear duration-300 p-1 hover:scale-[110%]">
          <PiTrophy className="w-[35px] h-[35px] text-white group-hover:text-[#121212] m-auto" />
        </Link>
      </nav>
      <nav className="h-[60px] w-min my-auto flex justify-center align-middle relative">
        <input
          type="text"
          className="bg-white h-[35px] w-[300px] rounded-[10px] my-auto ml-6 pl-10 focus:outline-none border-none"
          placeholder="Search"
        />

        <PiMagnifyingGlass className="absolute left-8 top-4 text-black w-[25px] h-[25px]" />
      </nav>
    </div>
  );
};

export default Navbar;
