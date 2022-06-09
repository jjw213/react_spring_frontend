import React, { Component } from "react";
import kakao from "../css/img/kakao.png";
import newReg from "../css/img/dogAndcat.png";
import "../css/main.css";
import { Link } from "react-router-dom";

function LoginSelectPage() {
  const REST_API_KEY =  process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      {/* <h1 className="register">로그인</h1>
      <hr></hr>
      <br></br> */}
      <div className="regReg">
        <div className="up">
          <p className="homeReg btn-11">
            <Link
              to="/members/new"
              style={{
                color: "black",
              }}
            >
              신규 회원가입
            </Link>
          </p>
          <br></br>
          <p className="kakaoLoginBtn">
            <a
              href={KAKAO_AUTH_URL}
              style={{
                color: "black",
              }}
            >
              <img
                src={kakao}
                width="8%"
                height="auto"
                style={{ margin: "0px 3% 0px 0px" }}
              />
              카카오 로그인 및 회원가입
            </a>
          </p>
        </div>
        <div className="down">
          <img src={newReg} width="100%" height="70%"></img>
        </div>
      </div>
    </div>
  );
}

export default LoginSelectPage;
