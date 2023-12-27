import React from "react";
import FrontImg from "../images/Frontend..png";
import DeployImg from "../images/Deploy.png";
import VersionImg from "../images/version.png";
import CertificateImg from "../images/certificate.png";
function Skill() {
  return (
    <div className=" bg-amber-100 pb-16 ">
      <div className="mx-96">
        <h1 className="text-6xl text-center py-16">Skills</h1>
        <div className= "flex flex-col items-center bg-white  rounded-xl shadow-xl p-5">
          <p className="text-4xl text-blue-400 mt-2 mb-10 font-extrabold">Frontend</p>
          <img className="flex items-center w-[80%]" src={FrontImg} />
        </div>
        <div className="flex justify-between mt-16 gap-14">
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-4xl text-blue-400 mt-2 mb-10 font-extrabold ">Deploy</p>
            <img className="w-[70%]" src={DeployImg} />
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-4xl text-blue-400 mt-2 mb-10 font-extrabold">Version Control</p>
            <img src={VersionImg} className="w-[82%]" />
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-4xl text-blue-400 mt-2 mb-10 font-extrabold">certificate</p>
            <img className="w-[80%]" src={CertificateImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
