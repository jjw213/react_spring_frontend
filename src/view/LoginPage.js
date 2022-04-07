import React, { useEffect, useState } from 'react'
import { userData } from './SignPage'
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action'
import { useNavigate } from "react-router-dom";
import '../css/main.css';

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [formErrorMessage, setFormErrorMessage] = useState('')
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
    setName(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      name: Name,
      password: Password
    }
    console.log(body)
    dispatch(loginUser(body))
      .then(response => {
        console.log(response.payload)
        if (response.payload != null) {
          // props.history.push('/') 이제 안됌
          navigate('/');
        } else {
          setFormErrorMessage("아이디 혹은 비번 틀림")
          alert('아이디 혹은 비번 틀림');
        }
      })
      .catch(err => {
        console.log(err)
        setFormErrorMessage('서버 연결이 불안정합니다.')
        setTimeout(() => {
          setFormErrorMessage("")
        }, 3000);
      });
  }
  return (
    <div>
      <header>
        <nav className="header-nav">
          <div>
            <a href="/">
              <h1>MY USERS</h1>
            </a>
          </div>
        </nav>
      </header>
      <main className="container">
        <div className="login-page">
          <h1>WELCOME!</h1>
          <div className="form">
            <form action="" method="" className="login-form" onSubmit={onSubmitHandler}>
              <div className="fordnm-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" onChange={onNameHandeler} placeholder="이름을 입력하세요"></input>
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" onChange={onPasswordHandler} placeholder="비밀번호를 입력하세요"></input>
              </div>
              <button onSubmit={onSubmitHandler}  >로그인</button>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <ul className="footer-list">
          <li><a href="#">개인정보 처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">오시는 길</a></li>
          <li>&copy;Global IN</li>
      </ul>
    </footer>
    </div >

  )
}

export default LoginPage