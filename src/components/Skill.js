import React, { forwardRef } from "react";
import FrontImg from "../images/Frontend..png";
import DeployImg from "../images/Deploy.png";
import VersionImg from "../images/version.png";
import CertificateImg from "../images/certificate.png";
const Skill = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative bottom-10 bg-amber-100 pb-16 ">
      <div className="mx-80">
        <h1 className="text-6xl text-center py-16">Skills</h1>
        <div className="flex flex-col items-center bg-white  rounded-xl shadow-xl p-5">
          <p className="text-3xl text-blue-400 mt-2 mb-10 font-extrabold">
            Frontend
          </p>
          <img
            className="flex items-center w-[80%]"
            src={FrontImg}
            alt="프론트 이미지"
          />
        </div>
        <div className="flex justify-between mt-16 gap-14">
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-3xl text-blue-400 mt-2 mb-10 font-extrabold ">
              Deploy
            </p>
            <img className="w-[70%]" src={DeployImg} alt="배포이미지" />
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-3xl text-blue-400 mt-2 mb-10 font-extrabold">
              Version Control
            </p>
            <img src={VersionImg} className="w-[82%]" alt="버전관리이미지" />
          </div>
          <div className="flex flex-col items-center p-5 bg-white rounded-xl shadow-xl">
            <p className="text-3xl text-blue-400 mt-2 mb-10 font-extrabold">
              certificate
            </p>
            <img className="w-[80%]" src={CertificateImg} alt="자격증이미지" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skill;
