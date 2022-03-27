import React, { useEffect, useState } from 'react';

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
  return (
    <div className="container">
      <div>
        <h1>Hello Spring</h1>
        <p>회원 기능</p>
        <p>
          <a href="/members/new">회원 가입</a>
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