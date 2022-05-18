import React from 'react';
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action'

const Auth = () => {
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const CLIENT_SECRET = "WmzPDuCt5rNi690ttzDFNHkahoqp3wUW";

  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      sessionStorage.setItem('kakao_token', res.data.access_token)
      if (!window.Kakao.isInitialized()) {
        // Kakao Javascript SDK 초기화
        window.Kakao.init(REST_API_KEY);
      }
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      console.log(window.Kakao.Auth.getAccessToken());
      console.log(res.data.access_token);
      // let data = await window.Kakao.API.request({
      //     url: "/v1/user/unlink",
      //     success: function(response) {
      //         console.log(response);
      //       },
      //       fail: function(error) {
      //         console.log(error);
      //       },
      // });
      // let body = {
      //   name: data.properties.nickname,
      //   password: "",
      // }
      // dispatch(registerUser(body))
      // .then(response => {
      //   console.log(response.payload)
      //   if (response.payload != null) {
      //     // props.history.push('/') 이제 안됌
      //     navigate('/');
      //   } else {
      //     //    setFormErrorMessage("아이디 혹은 비번 틀림")
      //     alert('아이디 혹은 비번 틀림');
      //   }
      // })
      // .catch(err => {
      //   console.log(err)
      //   // setFormErrorMessage('서버 연결이 불안정합니다.')
      //   setTimeout(() => {
      //     //   setFormErrorMessage("")
      //   }, 3000);
      // });

      // window.Kakao.Auth.logout();
      // let data = await window.Kakao.API.request({
      //     url: "/v2/user/me",
      // });
      // console.log(data);

      navigate("/members/profile");
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
  return null;
};
export default Auth;