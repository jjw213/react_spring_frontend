import React, { useEffect, useState } from 'react'

function KakaoLogout() {
  const JAVA_KEY = "89722c28919aadebfec57afb7500a8c8";

  const setProfile = async () => {
    if (!window.Kakao.isInitialized()) {
      console.log(window.Kakao.isInitialized());
      // Kakao Javascript SDK 초기화
      window.Kakao.init(JAVA_KEY);
      console.log(window.Kakao.isInitialized());
    }
    // console.log(window.Kakao.Auth.getAccessToken());
    // if (window.Kakao.Auth.getAccessToken()) {
    //     window.Kakao.API.request({
    //       url: '/v1/user/unlink',
    //       success: function (response) {
    //         console.log(response);
    //       },
    //       fail: function (error) {
    //         console.log(error);
    //       },
    //     });
    //     alert('로그아웃이 완료되었습니다.');
    //     window.Kakao.Auth.setAccessToken(undefined);
    //   }
    // window.Kakao.Auth.logout();
  }
  const sendMessage=()=>{
  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '찜했음!',
      description: '동물을 찜했습니다.',
      imageUrl:"http://www.localhost:3000",
      link: {
        webUrl: "https://www.naver.com",
        mobileWebUrl: 'https://www.naver.com'
      },
    },
    buttons: [
      {
        title: '함께하기',
        link: {
          webUrl: "https://www.naver.com",
          mobileWebUrl: 'https://www.naver.com'

        }
      }
    ]
  })
}
  useEffect(() => {
      setProfile();
  }, []);
  return (
    <div><h1>KakaoMessage</h1>
    <button onClick={sendMessage}>
      전송
    </button>


    </div>
  )
}

export default KakaoLogout