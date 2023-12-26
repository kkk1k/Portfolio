import React from "react";

function Header() {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-300">
    <div className="py-5 xl:mx-60 sm:mx-28  flex  justify-between items-center ">
      <p className="text-3xl">KHK's Portfolio</p>
      <div className="flex xl:gap-10 sm:gap-5">
      <div>About me</div>
      <div>Skills</div>
      <div>Archive</div>
      <div>Project</div>
      </div>
    </div>
    </div>
  );
}

export default Header;
