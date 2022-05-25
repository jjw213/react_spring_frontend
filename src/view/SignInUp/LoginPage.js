import React, { useEffect, useState } from "react";
// import { userData } from "./SignPage";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "../../css/main.css";
import { dibsList } from "../../_actions/board_action";
// import kakao from "../css/img/kakao.png";
function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  // const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");
  // useEffect(async()  => {
  //      await fetch(`/members/memberLogin`)
  //         .then((res) => {
  //             return res.json();
  //         })
  //         .then((data) => {
  //             setMessage(data);
  //         });
  // }, []);
  const onNameHandeler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSigninHandler = (event) => {
    navigate("/members/new");
  };
  // const onKakaoHandler = (event) => {
  //   window.open(KAKAO_AUTH_URL);
  // };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      name: Name,
      password: Password,
    };
    console.log(body);
    dispatch(loginUser(body))
      .then((response) => {
        console.log(response.payload);
        if (response.payload != null) {
          console.log(body.name);
          // props.history.push('/') 이제 안됌
          dispatch(dibsList(body.name))
            .then((response)=>{
              console.log(response.payload);
            })
          navigate("/");
        } else {
          setFormErrorMessage("아이디 혹은 비번 틀림");
          alert("아이디 혹은 비번 틀림");
        }
      })
      .catch((err) => {
        console.log(err);
        setFormErrorMessage("서버 연결이 불안정합니다.");
        setTimeout(() => {
          setFormErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <header>
        <nav className="header-nav"></nav>
      </header>
      <main className="container">
        {/* <div className="doCa"> */}
        <div className="login-page">
          <h2>Login</h2>
          <div className="form">
            <form
              action=""
              method=""
              className="login-form"
              onSubmit={onSubmitHandler}
            >
              <div className="form-group">
                <label htmlFor="name" className="loginName">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={onNameHandeler}
                  placeholder="이름을 입력하세요"
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="passwordName">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={onPasswordHandler}
                  placeholder="비밀번호를 입력하세요"
                ></input>
              </div>
              <button onSubmit={onSubmitHandler}>로그인</button>
              {/* <p className='homeReg'></p> */}
              {/* <button type="button" img className="kakaoLoginBtn" src={kakao } width="183px" height="45px" a href={KAKAO_AUTH_URL} /> */}
              <button onClick={onSigninHandler}>신규 회원가입</button>
            </form>
            {/* <button
              className="kakaoLoginBtn"
              onClick={onKakaoHandler}
              width="183px"
              height="45px"
            ></button> */}
          </div>
        </div>
        {/* </div> */}
      </main>
      <footer>
        <ul className="footer-list">
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">오시는 길</a>
          </li>
          <li>&copy;</li>
        </ul>
      </footer>
    </div>
  );
}

export default LoginPage;
