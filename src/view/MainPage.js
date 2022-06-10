import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import "../css/MainPage.css"

import Header from './Mainpage/Header';
import Main from './Mainpage/Main';
import Footer from './Mainpage/Footer';


function MainPage(props) {

  const [animal, setAnimal] = useState([]);

  const [count, setCount] = useState([]);

  // const endPoint = async()=>{
  //     axios.post(`/animal/animalList`,null, 
  //     {params:{numOfRows : 10 }})
  //     // .then(res=>res.json())
  //     // .then(res=>console.log(res.data))
  //     .then(res=>setAnimal(res.data))
  //     .then(res=>setFilename(res.data[0].filename))

  //     axios.post(`/animal/countList`,null, 
  //       {params:{numOfRows : 1000 , kindcd:"개"}})
  //       .then(res=>setCount(res.data))

  // }
  // useEffect(()=>{
  // //   if()
  //     endPoint();
  // },[])

  return (
    <div>
    
      <Header></Header>
      <Main></Main>
      <Footer></Footer> 
    </div>
  )
}

export default MainPage