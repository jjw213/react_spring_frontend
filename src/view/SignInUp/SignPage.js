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
  const [isActive, setIsActive] = useState(false);

  const onNameHandeler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  // const onCheckHandler =()=>{
  //   Name.includes("@") && Password.length >=5 && Password==ConfirmPassword
  //   ? setIsActive(true) : setIsActive(false)
  //   console.log("is액티브??"+isActive)
  // }


  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(Password.length);
    console.log("비번, 확인 : "+Password+ConfirmPassword);
    console.log("@ 포함?  "+Name);

    if ((Name.includes("@")) && (Password.length >=5) && (Password==ConfirmPassword)) {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }

    let body = {
      name: Name,
      password: Password,
      kakao_id: 0,
    };
    dispatch(registerUser(body))
      .then((response) => {
        if (response.payload != null) {
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
