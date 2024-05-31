import React, { forwardRef } from "react";
import Project1Img from "../images/project2.png";
const Project1 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative bottom-10 mx-80">
      <p className="text-3xl font-bold mt-20 mb-1 text-center">
        전국 산업공학도 동아리 Field 웹사이트
      </p>
      <p className="mb-1 text-center text-gray-500">2023.02.15 ~ 03.20</p>
      <div className="flex justify-between gap-10 mb-5">
        <div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ 주요기능</div>
            <div>
              콘택트 페이지, 애니메이션, 페이지네이션, 로컬스토리지 통한 캐싱,
              모바일 웹 구현
            </div>
          </div>

          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ github</div>
            <a
              className="transition ease-in-out duration-300 hover:text-blue-500"
              href="https://github.com/Hooked-On/Field_website"
            >
              https://github.com/Hooked-On/Field_website
            </a>
          </div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ url</div>
            <a
              className="transition ease-in-out duration-300 hover:text-blue-500"
              href="https://www.iefield.com"
            >
              https://www.iefield.com
            </a>
          </div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ Frontend</div>
            <div>Vite, React, Styled Component, Redux toolkit</div>
          </div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ Backend</div>
            <div>PocketBase io</div>
          </div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ Database</div>
            <div>PocketBase io</div>
          </div>
          <div className="flex flex-col text-lg">
            <div className="font-bold">✓ Deployment</div>
            <div>S3, Route53, cloudfront</div>
          </div>
        </div>
        <img className="w-[40%]" src={Project1Img} alt="프로젝트2" />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">✓ 소개</p>
        <p className="text-lg">
          전국 산업공학도 동아리인 Field에 대한 정보를 제공하고 다양한 활동을
          홍보하는 웹사이트 입니다.
          <br />
          <br />
          대학교 동기 중 프론트 엔드 개발자로 진로를 희망하는 사람들끼리
          스터디를 진행하면서 만든 웹사이트 입니다. 프론트 엔드 개발자 3명과
          기획자 1명이 모여서 프로젝트를 진행하였고 평일 아침에 코드 리뷰를
          진행하고 팀원 진행 상황을 파악하는 데일리 스크럼 시간을 가졌습니다.
          본격적인 개발을 진행하기에 앞서 개발자들끼리 모여 마크업을 작성하여 웹
          표준에 준수할수 있도록 하였습니다
          <span className="text-purple-800"> Styled Component</span>를
          사용하였고 다양한 애니메이션을 추가하여 화면을 구성하였습니다. 또
          모바일 화면과 노트북 데스크탑 화면을 미디어 쿼리를 통해 별도로
          구현하였습니다. 상태관리는{" "}
          <span className=" text-purple-400">redux toolkit</span>으로 하였고
          공식 문서를 참고하였습니다. 백엔드 개발자가 없어서 PocketBase라는
          오픈소스 백엔드 프레임워크를 통해 개발하였습니다. 데이스베이스를
          만들어서 뉴스데이터, contact 데이터 등을 Restful API를 통해
          통신하였습니다. 오픈소스 프레임워크라는 특성상 서버가 과부하될 경우
          추가 요금을 지불해야할 수 있기 때문에 통신을 최대한 줄일 수 있도록
          로컬 스토리지에 데이터를 저장해서 캐싱하였고 기한은 하루로 정하여
          통신한 이후 하루가 지나면 로컬 스토리지에서 데이터가 초기화 되도록
          설정하였습니다.
          <br />
          <br />
          <span className="text-orange-400 "> S3</span>에 배포하였고 도메인도
          구매하여 <span className="text-orange-400">cloudfront</span> 및{" "}
          <span className="text-orange-400">route53</span>으로 배포해서 HTTPS
          보안을 적용하였습니다.
        </p>
      </div>
    </div>
  );
});

export default Project1;
