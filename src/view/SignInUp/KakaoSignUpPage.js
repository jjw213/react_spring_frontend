import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkUser, emailUser, registerUser } from "../../_actions/user_action";
import "../../css/main.css";
import SignUpInput from "./SignUpInput";

function SignPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const onNameHandeler = (event) => {
    setName(event.currentTarget.value);
    
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onCheckHandler =()=>{
    dispatch(checkUser(Name))
      .then((response)=>{
        if (response.payload != null && response.payload != '') {
          setDisabled(true);
        } else {
          setDisabled(false);
        }
      })
  }
  
  useEffect(()=>{
    onCheckHandler();
},[Name])

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password!=ConfirmPassword) {
      return alert("비밀번호와 확인이 일치하지 않습니다.");
    }else if( Password.length <8) {
      return alert("비밀번호는 8자리 이상이여야 합니다.");
    }else if(!Email.includes("@")){
      return alert("아이디는 (@가 포함된) 이메일 형식이어야 합니다.");
    }else if(Name.length>10){
      return alert("이름은 10글자 이하여야 합니다.");
    }

    let body = {
      name: Name,
      password: Password,
      kakao_id: props.kakaoid,
      email:Email
    };
    dispatch(registerUser(body))
      .then((response) => {
        if (response.payload != null && response.payload != '') {
          alert("가입 메일로 발송된 인증번호를 확인해주십시오.");
          dispatch(emailUser(body)).then(()=>{
            navigate("/");
          })
        } else {
          alert("이미 존재하는 이메일 입니다.");
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
      <SignUpInput
        submit={onSubmitHandler}
        name={onNameHandeler}
        pw={onPasswordHandler}
        pwc={onConfirmPasswordHandler}
        email={onEmailHandler}
        disabled={disabled}
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
