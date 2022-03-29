import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { logoutUser } from '../_actions/user_action'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function MainPage(props) {
  // const [message, setMessage] = useState([]);
  // useEffect(() => {
  //   fetch(`/hello-api?name=ss`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setMessage(data);
  //     });
  // }, []);
  // console.log(message)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrorMessage, setFormErrorMessage] = useState('')
  const user = useSelector((state) => state.user)
  
  const logoutHandler = (event) => {
    dispatch(logoutUser()).then(() => {
      navigate('/');
    })
      .catch(err => {
        console.log(err)
        setFormErrorMessage('서버 연결이 불안정합니다.')
        setTimeout(() => {
          setFormErrorMessage("")
        }, 3000);
      });
      
  };

  console.log(user)
  return (
    <div className="container">
      <div>
        <h1>Hello Spring</h1>
        <p>회원 기능</p>
        <p>
          <a href="/members/new">회원 가입</a>
          {user.userData == null ? <a href="/members/memberLogin">로그인</a>
          : <a onClick={logoutHandler}>로그아웃</a>}
        </p>
        <p>
          <a href="/members">회원 목록</a>
        </p>
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <ul>
    //         {message.map((v, idx) =>
    //           <li key={
    //             `${idx}${v}`
    //           }> {v} </li>)}
    //       </ul> */}
    //       {/* {message.map((v, idx)=>{
    //         return (<div>{v}</div>)
    //       })} */}


    //     {/* <div>
    //         <input onChange={}></input>
    //       </div> */}
    //   </header>
    // </div>
  )
}

export default MainPage