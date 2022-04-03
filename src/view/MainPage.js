import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { logoutUser } from '../_actions/user_action'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';
import Header from './Header';

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

  console.log(user)
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <div class="container">
        <form action="/board/new" method="post">
          <div class="form-group">
            <label for="name">제목</label>
            <input type="text" id="name" name="title" placeholder="글쓰기"/>
          </div>
          <button type="submit">등록</button>
        </form>
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