import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

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

  const [board, setBoardContent] = useState({
    title: '',
    content: '',

  })

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const user = useSelector((state) => state.user)
  const [boardList, setboardList] = useState([]);
  useEffect(() => {
    fetch(`/board/boardList`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setboardList(data);
        console.log(data);
      });
  }, []);
  console.log(user.userData);
  const getValue = e => {
    const { title, value } = e.target;
    setBoardContent({
      ...board,
      title: value
    })
    // console.log(title, value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      title: board.title,
      content: board.content,
      writer: user.userData
    }
    console.log(user.userData);
    if (body.writer == null){
      return alert("로그인 해야 함!!");}
    dispatch(savePost(body))
      .then(response => {
        console.log(response.payload)
        if (response.payload != null) {
          // props.history.push('/') 이제 안됌
          navigate('/#');
        } else {
          setFormErrorMessage("포스팅 실패")
          alert('포스팅 실패');
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
      
      <Header></Header>
      <div className="App">
        <h1>Movie Review</h1>
        <div className='movie-container'>
          {boardList.map(ele =>
          <tr>
            <div key={ele.idx}>
              <h2>{ele.title}</h2>
              <div>{ele.content}</div>
              <div>작성자 : {ele.writer}</div>
            </div>
            </tr>)}
        </div>
        <div className='form-wrapper'>
          <input className="title-input" type='text' placeholder='제목'
            onChange={getValue}
            name='title' />
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setBoardContent({
                ...board,
                content: ReactHtmlParser(data)[0].props.children[0],
              })
            }}
          // onBlur={(event, editor) => {
          //   console.log('Blur.', editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log('Focus.', editor);
          // }}
          />
        </div>
        <button className="submit-button" onClick={onSubmitHandler}>입력</button>
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