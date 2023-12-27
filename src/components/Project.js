import React from "react";
import homepage1 from "../images/홈페이지.jpg";
function Project() {
  return (
    <div className="relative bottom-10 mx-80">
      <h1 className="text-6xl text-center pt-16 pb-10">Project</h1>
      <p className="text-3xl font-bold mb-1 text-center">LG Hellovision의 로그데이티 기반 vod 추천 서비스</p>
      <p className="mb-1 text-center text-gray-500">2023.10.20 ~ 12.29</p>
      <div className="flex gap-10 mb-5">
        <img className="w-[40%]" src={homepage1} />
        <div>
        <div className="flex flex-col text-lg">
        <div className="font-bold">✓ 주요기능</div>
        <div >
          로그인, 회원가입, 위시리스트, 마이페이지, 리뷰, 영화제목 초성 배우명
          검색, 숏필름(숏츠형태 동영상 재생), VOD 카테고리별 인기순 랜덤순
          이름순 정렬{" "}
        </div>
      </div>
      
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ github</div>
        <a className="transition ease-in-out duration-300 hover:text-blue-500" href="https://github.com/LGHV-team1/final-project" >https://github.com/LGHV-team1/final-project</a>
      </div>
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ url</div>
        <a className="transition ease-in-out duration-300 hover:text-blue-500" href="https://www.hellorvdworld.com/">https://www.hellorvdworld.com/</a>
      </div>
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ Frontend</div>
        <div >
          React, tailwind css, Redux toolkit
        </div>
      </div>
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ Backend</div>
        <div >Django REST Framework</div>
      </div>
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ Database</div>
        <div >MongoDB, Mysql</div>
      </div>
      <div className="flex flex-col text-lg">
        <div className="font-bold">✓ Deployment</div>
        <div >ECS, S3, RDS, Route53, Docker, Kafka</div>
      </div>
      </div>
      </div>
        <div className="flex flex-col">
        <p className="text-lg font-bold">✓ 소개</p>
        <p className="text-lg">
          로그 데이터를 사용하여 사용자에게 VOD를 추천해주는 웹사이트 입니다.
          엘지 헬로비전의 실제 로그 데이터를 활용하였습니다.
          <br />
          <br />
          클론 코딩을 제외하면 첫 번째 프로젝트라 프론트 개발에 대해 감을 익힐
          수 있었고 개발에 대한 전체적인 흐름, 배포에 대한 정보를 습득할 수
          있었습니다. 또 백엔드 개발자와 협업하는 과정 또한 처음이라 통신에 대해
          많이 배웠습니다. API 명세서를 통해서 백엔드 서버와 통신을 원활히 할 수
          있었습니다. <span className="text-blue-400">tailwind css</span>를
          사용하였고 다양한 애니메이션을 추가하여 화면을 구성하였습니다.
          상태관리는 <span className=" text-purple-400">redux toolkit</span>으로
          하였고 공식 문서를 참고하였습니다. 리액트 플레이어를 통해 영화
          예고편과 영화 숏필름을 보여주었습니다.
          <br />
          <br />
          <span className="text-orange-400 ">S3</span>에 배포하였고{" "}
          <span className="text-orange-400">cloudfront</span> 및{" "}
          <span className="text-orange-400">route53</span>으로 배포해서 HTTPS
          보안을 적용하였습니다. 영상은{" "}
          <span className="text-orange-400">S3</span>에 담아서 CDN으로 구축하여
          활용하였습니다.
        </p>
        </div>
      </div>
     
    
  );
}

export default Project;
