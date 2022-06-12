import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { codeCheck, loginUser } from "../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "../../css/main.css";
import { dibsList } from "../../_actions/board_action";
import kakao from "../../css/img/kakao.png";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onNameHandeler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSigninHandler = (event) => {
    navigate("/members/new");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    if (body.name == "") {
      return alert("아이디를 입력하세요.");
    } else if (body.password == "") {
      return alert("패스워드를 입력하세요.");
    }
    dispatch(loginUser(body))
      .then((response) => {
        if (response.payload != null && response.payload != "") {
          let body2 = {
            name: response.payload.name,
            code: "none"
          }
          dispatch(dibsList(body2.name));
          dispatch(codeCheck(body2));
          navigate("/");
        } else {
          alert("아이디 혹은 비번 틀림");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <nav className="header-nav"></nav>
      </header>
      <main className="container">
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
          <div className="form-group2">
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
          <p className="kakaoLoginBtn" style={{ width: "200px", height: "40px" }}>
            <a
              href={KAKAO_AUTH_URL}
              style={{
                color: "black",
                fontSize: "initial"
              }}
            >
              <img
                src={kakao}
                width="8%"
                height="auto"
                style={{ margin: "0px 3% 0px 0px" }}
              />
              카카오 로그인
            </a>
          </p>
          <button onClick={onSigninHandler}>신규 회원가입</button>
        </form>
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
