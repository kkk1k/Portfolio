import React, { useRef, useEffect } from "react";
import profileImg from "../images/한경.jpg";
import bgImg from "../images/BG.gif";
export default function First() { 
  return (
    <div
      className="relative bottom-10 bg-center bg-no-repeat bg-cover h-[70vh] "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="relative top-44 flex mx-80 my-10 justify-evenly items-center transition-all duration-500 ease-in-out"
      >
        <img src={profileImg} className="w-64 h-64 rounded-full" />
        <div className="item-center">
          <h1 className="mb-20 text-center text-6xl font-bold text-white ">
            김한경
            <br />
            웹개발자 포트폴리오
          </h1>
          <p className="text-center text-2xl text-white">
            안녕하세요
            <br />
            소통하는 웹 개발자 김한경입니다
            <br />
            저의 장점은 커뮤니케이션 능력과 꼼꼼한 성격입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
