import React,{ useEffect, useState } from 'react'

function KakaoLogout() {
    const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";

const setProfile = async () => {
    // if (!window.Kakao.isInitialized()) {
    //     // Kakao Javascript SDK 초기화
    //     window.Kakao.init(REST_API_KEY);
    //     console.log(window.Kakao.isInitialized());
    // }
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
    useEffect(() => {
        setProfile();
    }, []);
  return (
    <div>KakaoLogout</div>
  )
}

export default KakaoLogout