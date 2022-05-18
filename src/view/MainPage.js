import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import "../css/MainPage.css"

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function MainPage(props) {

  const [animal, setAnimal] = useState([]);
  // let API_URL = "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20140301&endde=20140430&pageNo=1&numOfRows=10&ServiceKey=";
  // let API_KEY = "d7DXF5UusAcJ7jFQYs3HTZ4c%2FrU7kRtgZOq6EIVTNyL5VJ%2B6Lu9Wp0ge6uWOxn2XbPuKuB42fiGPe4U1bfmWtA%3D%3D";
  const [Num, setNum] = useState("")
  const onNumHandeler = (event) => {
    setNum(event.currentTarget.value)
  }
  const endPoint = async()=>{
      axios.post(`/animal/animalList`,null, 
      {params:{numOfRows : 10 }})
      // .then(res=>res.json())
      // .then(res=>console.log(res.data))
      .then(res=>setAnimal(res.data))
      //  console.log(res);
      console.log(animal)
  }
  useEffect(()=>{
  //   if()
      endPoint();
  },[])

 

  return (
    <div>
      

      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default MainPage