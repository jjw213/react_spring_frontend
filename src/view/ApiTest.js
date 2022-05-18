import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import {loadAnimal} from "../_actions/board_action"
import { useDispatch } from "react-redux";
function ApiTest() {
    const [animal, setAnimal] = useState([]);
    const [kindcd, setKindcd] = useState("")
    const dispatch = useDispatch();
    const onDogHandler = (event) => {
      event.preventDefault();
      console.log(event.currentTarget.value)
      setKindcd(event.currentTarget.value)
    let body = {
      numOfRows: 30,
      kindcd: "개",
    };
    console.log(body.kindcd);
      dispatch(loadAnimal(body))
      .then((response) => {
        console.log(response.payload);
        if (response.payload != null) {
          setAnimal(response.payload);          
        } else {
          alert("아이디 혹은 비번 틀림");
        }
      })
    }
    const onCatHandler = (event) => {
      console.log(event.currentTarget.value)
      setKindcd(event.currentTarget.value)
      console.log(kindcd);
    }


    // const endPoint = async()=>{
    //     axios.post(`/animal/aSelectList`,null, 
    //     {params:{numOfRows : 30, kindcd: kindcd }})
    //     // .then(res=>res.json())
    //     // .then(res=>console.log(res.data))
    //     .then(res=> {setAnimal(res.data)
    //     console.log(res.data)})
    //     //  console.log(res);
    //     console.log(animal);
    // }
    // useEffect(()=>{
    //   if(kindcd !=null && kindcd != "")
    //     endPoint();
    // },[kindcd])
  return (
    <div>
      <form>
      <label htmlFor="name">개 / 고양이</label>
                {/* <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input> */}
      </form>
                <button onClick={onCatHandler} value="고양이" >고양이</button>
                <button onClick={onDogHandler} value="개" >강아지</button>
      {animal && animal.map(ele =>
            <div key={ele.desertionNo}>
              <h2>종 : {ele.kindCd}</h2>
              <div>나이 : {ele.age}</div>
              <div>특징 : {ele.specialMark}</div>
              <div><img src={ele.popfile}></img></div>
            </div>)}

    </div>
  )
}

export default ApiTest
