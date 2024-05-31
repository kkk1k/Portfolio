import React from "react";

function Header({ aboutRef, skillRef, projectRef }) {
  const onMoveToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onMoveToSkills = () => {
    if (skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onMoveToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-300">
      <div className="py-5 xl:mx-80 sm:mx-28 flex justify-between items-center">
        <p className="text-3xl">KHK's Portfolio</p>
        <div className="flex xl:gap-10 sm:gap-5">
          <div
            className=" cursor-pointer hover:text-blue-500"
            onClick={onMoveToAbout}
          >
            About me
          </div>
          <div
            className=" cursor-pointer hover:text-blue-500"
            onClick={onMoveToSkills}
          >
            Skills
          </div>
          <div
            className=" cursor-pointer hover:text-blue-500"
            onClick={onMoveToProjects}
          >
            Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
