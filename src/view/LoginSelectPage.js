import React from 'react'

function LoginSelectPage() {
    const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
    const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
  return (
    <div>
        <h1>회원가입 선택 페이지</h1>
        <hr></hr>
        <br></br>
        <p><a href='/members/new'>홈페이지 신규 회원가입</a></p>
        <br></br>
        <p><a href={KAKAO_AUTH_URL}>카카오톡 간편 회원가입</a></p>



    </div>
  )
}

export default LoginSelectPage