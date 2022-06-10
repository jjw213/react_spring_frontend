import React, { useEffect, useState } from 'react'

function KakaoLogout(props) {
  const JAVA_KEY = process.env.REACT_APP_FEED_KEY;
  
  const setProfile = async () => {
    if (!window.Kakao.isInitialized()) {
      // Kakao Javascript SDK 초기화
      window.Kakao.init(JAVA_KEY);
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
      title: '함께 해주세요!',
      description: '지금 링크를 눌러서 저와 가족이 되어주세요.',
      imageUrl: props.popfile,
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
            <button className="close" style={{ margin: "0 10px" }} onClick={sendMessage}>
              공유하기
            </button>


    </React.Fragment>
  )
}

export default KakaoLogout