import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { savePost } from '../_actions/board_action'
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
<<<<<<< HEAD
import "../css/MainPage.css"

=======
import axios from 'axios';
>>>>>>> 0a693dc3031c4810d2b2d3ea5bf7a2d45328c59c
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function MainPage(props) {

  const [animal, setAnimal] = useState([]);
<<<<<<< HEAD
  // let API_URL = "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20140301&endde=20140430&pageNo=1&numOfRows=10&ServiceKey=";
  // let API_KEY = "d7DXF5UusAcJ7jFQYs3HTZ4c%2FrU7kRtgZOq6EIVTNyL5VJ%2B6Lu9Wp0ge6uWOxn2XbPuKuB42fiGPe4U1bfmWtA%3D%3D";
  const [Num, setNum] = useState("")
=======
  const [Num, setNum] = useState("")
  const [filename, setFilename] = useState("")
>>>>>>> 0a693dc3031c4810d2b2d3ea5bf7a2d45328c59c
  const onNumHandeler = (event) => {
    setNum(event.currentTarget.value)
  }
  const endPoint = async()=>{
      axios.post(`/animal/animalList`,null, 
      {params:{numOfRows : 10 }})
      // .then(res=>res.json())
      // .then(res=>console.log(res.data))
<<<<<<< HEAD
      .then(res=>setAnimal(res.data))
=======
      .then(res=>setFilename(res.data[0].filename))
>>>>>>> 0a693dc3031c4810d2b2d3ea5bf7a2d45328c59c
      //  console.log(res);
      console.log(animal)
  }
  useEffect(()=>{
<<<<<<< HEAD
  //   if()
      endPoint();
  },[])

 
=======
      endPoint();
  },[])
  
>>>>>>> 0a693dc3031c4810d2b2d3ea5bf7a2d45328c59c

  return (
    <div>
      
<<<<<<< HEAD

      <Header></Header>
      <Main></Main>
      <Footer></Footer>
=======
      {/* <Main></Main>
      <Footer></Footer> */}

      <Header></Header>
      {animal && filename}
>>>>>>> 0a693dc3031c4810d2b2d3ea5bf7a2d45328c59c
    </div>
  )
}

export default MainPage