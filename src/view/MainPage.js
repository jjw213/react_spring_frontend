import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function MainPage(props) {

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
      
      
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default MainPage