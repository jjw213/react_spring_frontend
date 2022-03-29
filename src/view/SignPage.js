import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action'
import '../main.css';

function SignPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onNameHandeler = (event) => {
    setName(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 다릅니다!')
    }

    let body = {
      name: Name,
      password: Password,
    }
    dispatch(registerUser(body))
      .then(response => {
        console.log(response.payload)
        if (response.payload != null) {
          // props.history.push('/') 이제 안됌
          navigate('/');
        } else {
          //    setFormErrorMessage("아이디 혹은 비번 틀림")
          alert('아이디 혹은 비번 틀림');
        }
      })
      .catch(err => {
        console.log(err)
        // setFormErrorMessage('서버 연결이 불안정합니다.')
        setTimeout(() => {
          //   setFormErrorMessage("")
        }, 3000);
      });
  }
  return (

    <div className="container">
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
            <form action="" method="" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" onChange={onNameHandeler} placeholder="이름을 입력하세요"></input>
              </div>
              <div>
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" onChange={onPasswordHandler} placeholder="비밀번호를 입력하세요"></input>
              </div>
              <div>
                <label htmlFor="passwordConfirm">비밀번호확인</label>
                <input type="password" id="passwordConfirm" name="passwordConfirm" onChange={onConfirmPasswordHandler} placeholder="비밀번호 확인"></input>
              </div>
              <button onSubmit={onSubmitHandler} >등록</button>
            </form>
          </div>
        </div>
      </main >
      <footer>
        <ul className="footer-list">
            <li><a href="#">개인정보 처리방침</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">오시는 길</a></li>
            <li>&copy;Global IN</li>
        </ul>
    </footer>
    </div >

    // <div className='Write'>
    //     <form action="/members/new" method="post">
    //         <div>
    //         	<input type='text' id='title_txt' name='name' placeholder='제목'/> 
    //         </div>
    //         <div>
    //         	<input type='url' id='link_txt' name='url' placeholder='링크'/> 
    //         </div>
    //         <div>
    //         	<textarea id='ex_txt' name='content' placeholder='설문내용에 대해 설명해주세요'></textarea>    
    //         </div>
    //         <div>
    //             시작일자&nbsp;&nbsp;
    //                 <input type="date" name="startDate" id='date'/>
    //             	&nbsp;&nbsp;

    //             마감일자&nbsp;&nbsp;
    //                 <input type="date" name="endDate" id='date'/>    
    //         </div>
    //         <div id="submit_btn">
    //             <button type="submit">저장</button>&nbsp;&nbsp;
    //             <button>취소</button>
    //         </div>
    //     </form>
    // </div>

  );
}

export default SignPage;