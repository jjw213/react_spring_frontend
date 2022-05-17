import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function MainPage(props) {

  const [animal, setAnimal] = useState([]);
  const [Num, setNum] = useState("")
  const [filename, setFilename] = useState("")
  const onNumHandeler = (event) => {
    setNum(event.currentTarget.value)
  }
  const endPoint = async()=>{
      axios.post(`/animal/animalList`,null, 
      {params:{numOfRows : 10 }})
      // .then(res=>res.json())
      // .then(res=>console.log(res.data))
      .then(res=>setFilename(res.data[0].filename))
      //  console.log(res);
      console.log(animal)
  }
  useEffect(()=>{
      endPoint();
  },[])
  

  return (
    <div>
      
      {/* <Main></Main>
      <Footer></Footer> */}

      <Header></Header>
      {animal && filename}
    </div>
  )
}

export default MainPage