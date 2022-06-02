import React, { useEffect, useState } from 'react'

function KakaoLogout() {
  const JAVA_KEY = process.env.REACT_APP_JAVA_KEY;
  console.log(process.env.REACT_APP_JAVA_KEY);
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
      imageUrl:"https://image.kmib.co.kr/online_image/2020/1122/611718110015239102_3.jpg",
      link: {
        webUrl: "http://www.localhost:3000",
        mobileWebUrl: 'http://www.localhost:3000'
      },
    },
    buttons: [
      {
        title: '함께하기',
        link: {
          webUrl: "http://www.localhost:3000",
          mobileWebUrl: 'http://www.localhost:3000'

        }
      }
    ]
  })
  // window.Kakao.Link.sendCustom({
  //   templateId: 77662
  // });
}
  useEffect(() => {
      setProfile();
  }, []);
  return (
    <React.Fragment>
            <button className="close" onClick={sendMessage}>
              공유하기
            </button>


    </React.Fragment>
  )
}

export default KakaoLogout