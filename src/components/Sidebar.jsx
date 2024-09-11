import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="min-h-screen bg-slate-400 p-3 md:p-10 border-r w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="" alt="desk" className="hidden md:block" />
          <img src="" alt="mobile" className=" block md:hidden" />
        </div>
        <ul className="flex flex-col items-center gap-8 md:items-start">
          <Link to="/" className="flex gap-2">
            <Home size={24} />
            <span className="md:block hidden font-bold">home</span>
          </Link>
          <Link to="/fav" className="flex gap-2">
            <Heart size={24} />
            <span className="md:block hidden font-bold">Favourite</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};
const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
      <Link to="/">
        <Home size={24} className="cursor-pointer " />
      </Link>
      <Link to="/fav">
        <Heart size={24} className="cursor-pointer" />
      </Link>
    </div>
  );
};
