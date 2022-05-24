import React, { Component } from "react";
import kakao from "../css/img/kakao.png";
import newReg from "../css/img/dogAndcat.png";
import "../css/main.css";

function LoginSelectPage() {
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      {/* <h1 className="register">로그인</h1>
      <hr></hr>
      <br></br> */}
      <div className="up">
        <p className="homeReg btn-11">
          <a
            href="/members/new"
            style={{
              color: "black",
            }}
          >
            신규 회원가입
          </a>
        </p>
        <br></br>
        <p className="kakaoLoginBtn">
          <a href={KAKAO_AUTH_URL}>
            <img src={kakao} width="220px" height="45px"></img>
          </a>
        </p>
      </div>
      <div className="down">
        <img src={newReg} width="300px" height="150px"></img>
      </div>
    </div>
  );
}

export default LoginSelectPage;
