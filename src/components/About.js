import React from "react";
import {
  CiCalendar,
  CiUser,
  CiHome,
  CiMap,
  CiPhone,
  CiMail,
} from "react-icons/ci";
import githublogo from "../images/Githublogo.png"

export default function About() {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };
  return (
    <div className="relative bottom-10 mx-80 flex flex-col justify-center h-100 mb-16 ">
      <h1 className="relative right-1 text-6xl text-center py-16 ">About Me</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-y-[50px] gap-x-16">
          <div className="flex items-center gap-5">
            <CiUser size="60" />
            <span>
              <p className="text-2xl font-bold">이름</p>
              <p className="text-xl">김한경</p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <CiCalendar size="60" />
            <span>
              <p className="text-2xl font-bold">생년월일</p>
              <p className="text-xl">98.06.26</p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <CiMap size="60" />
            <span>
              <p className="text-2xl font-bold">주소지</p>
              <p className="text-xl">서울시 영등포구</p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <CiHome size="60" />
            <span>
              <p className="text-2xl font-bold">학력</p>
              <p className="text-xl">숭실대학교 산업정보시스템공학과</p>
            </span>
          </div>
          <div className="flex items-center gap-5">
          <CiPhone className="cursor-pointer" size="60" onClick={() => copyToClipboard('010-4878-5958')} />
            <span>
              <p className="text-2xl font-bold">연락처</p>
              <p className="text-xl">010-4878-5958</p>
            </span>
          </div>
          <div className="flex items-center gap-5">
          <CiMail size="60" className="cursor-pointer"  onClick={() => copyToClipboard('googija9818@gmail.com')} />
            <span>
              <p className="text-2xl font-bold">이메일</p>
              <p className="text-xl">googija9818@gmail.com</p>
            </span>
          </div>
          
          
        </div>
        
      </div>
      <div className="flex justify-center items-center pt-10"><img src={githublogo} className="w-40" />
      <span className="flex flex-col">
       <p className="text-2xl font-bold"> Github 주소</p> 
      <a href="https://github.com/kkk1k" className="text-3xl pt-2 transition ease-in-out duration-300 hover:text-blue-500">https://github.com/kkk1k</a>
      </span>
      
            </div>
      <h1 className="relative text-2xl text-center my-10 mx-80 p-5 bg-orange-200 rounded-md">연락처와 이메일 버튼을 누르면 복사됩니다.</h1>
    </div>
  );
}
