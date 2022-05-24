import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { kakaoLoginUser, loginUser, registerUser } from "../_actions/user_action";
import KakaoSignUpPage from "../view/SignInUp/KakaoSignUpPage";
import MainPage from "../view/MainPage";

const Auth = () => {
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const CLIENT_SECRET = "WmzPDuCt5rNi690ttzDFNHkahoqp3wUW";

  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      sessionStorage.setItem("kakao_token", res.data.access_token);
      if (!window.Kakao.isInitialized()) {
        // Kakao Javascript SDK 초기화
        window.Kakao.init(REST_API_KEY);
      }
      // try{
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        let resp = await window.Kakao.API.request({
          url: "/v2/user/me",
          success: function(response) {
            console.log(response.id);
          },
          fail: function(error) {
            console.log(error);
          },
        });
        
        dispatch(kakaoLoginUser(resp))
        .then((response) => {
          console.log(response);
          if (response.payload == "") {
            // 새로 회원가입해야하는 회원
            setIsSignUp(false);  
            console.log(isSignUp);
          } else {
            // 이미 회원가입한 회원
            setIsSignUp(true);
          }
        })
        setData(resp);
        console.log(isSignUp);

      // window.Kakao.Auth.logout();
      // data = await window.Kakao.API.request({
      //     url: "/v1/user/unlink"
      // });
      // console.log(data);

    } catch (err) {
      console.log(err);
    }
  };
  // post 400 에러 막기 위해 코드가 들어왔을 때 요청 보내기
  useEffect(() => {
    if (code) {
      getToken();
    }
  }, [code]);
  return <Suspense fallback={<div>로딩중....</div>}>{data && (isSignUp ?<Navigate to="/"/>: <KakaoSignUpPage kakaoid={data.id}/>)}
  </Suspense>
};
export default Auth;
