import React, { Component } from "react";
// import kakao from "../css/img/kakao.png";

function LoginSelectPage() {
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h1 className="register">로그인</h1>
      <hr></hr>
      <br></br>
      <p className="homeReg">
        <a href="/members/new">신규 회원가입</a>
      </p>
      <br></br>
      <p>
        <a href={KAKAO_AUTH_URL}>
          {/* <span>
            <img
              className="kakaoLoginBtn"
              src={kakao}
              width="183px"
              height="45px"
            ></img>
          </span> */}
          카카오 로그인
        </a>
      </p>
    </div>
  );
}

export default LoginSelectPage;
