import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import "../../css/main.css";
import SignUpInput from "./SignUpInput";

function SignPage(props) {
  const kakaoid = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onNameHandeler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  console.log(kakaoid);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password!=ConfirmPassword) {
      return alert("비밀번호와 확인이 일치하지 않습니다.");
    }else if( Password.length <5) {
      return alert("비밀번호는 5자리 이상이여야 합니다.");
    }else if(!Name.includes("@")){
      console.log("@포합이니?"+Name.includes("@"))
      return alert("아이디는 (@가 포함된) 이메일 형식이어야 합니다.");
    }

    let body = {
      name: Name,
      password: Password,
      kakao_id: props.kakaoid,
    };
    dispatch(registerUser(body))
      .then((response) => {
        console.log(response);
        if (response != null) {
          // props.history.push('/') 이제 안됌
          alert("회원가입 축하드립니다!");
          navigate("/");
        } else {
          //    setFormErrorMessage("아이디 혹은 비번 틀림")
          alert("아이디 혹은 비밀번호가 틀렸어요:X");
        }
      })
      .catch((err) => {
        console.log(err);
        // setFormErrorMessage('서버 연결이 불안정합니다.')
        setTimeout(() => {
          //   setFormErrorMessage("")
        }, 3000);
      });
  };
  return (
    <div>
      <header>
        <nav className="header-nav"></nav>
      </header>
      <SignUpInput
        submit={onSubmitHandler}
        name={onNameHandeler}
        pw={onPasswordHandler}
        pwc={onConfirmPasswordHandler}
      />
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
          <li>&copy;Global IN</li>
        </ul>
      </footer>
    </div>
  );
}

export default SignPage;
