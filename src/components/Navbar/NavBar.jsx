import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineWallet,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* ----------------------navbar start----------------------------------- */}
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={25} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Uber <span className="font-bold">Eats</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white p-2 rounded-full">Delivery</p>
          <p className="p-2">PickUP</p>
        </div>
      </div>

      {/* search bar */}
      <div className="flex items-center bg-gray-200 rounded-full  px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="food here..."
          className="bg-transparent w-full p-2 focus:outline-none"
        />
      </div>

      {/* cart button */}
      <div>
       <button className=" bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" />
          Cart
        </button>
      </div>
      {/* ----------------------navbar End----------------------------------- */}

      {/* --------------------------------menu start-------------------------- */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full  h-screen z-10 top-0 left-0">
          {" "}
        </div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed  top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed  top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className=" absolute top-4 right-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Uber <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className=" flex flex-col p-4 ">
            <li className="flex items-center py-2  text-2xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex items-center py-2  text-2xl">
              <AiOutlineHeart size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex items-center py-2  text-2xl">
              <AiOutlineWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex items-center py-2  text-2xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex items-center py-2  text-2xl">
              <AiFillTag size={25} className="mr-4" /> Promotion
            </li>
            <li className="flex items-center py-2  text-2xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="flex items-center py-2  text-2xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
    // </div>
  );
};

export default NavBar;
