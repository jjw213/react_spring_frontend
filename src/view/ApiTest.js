import axios from 'axios';
import React,{ useEffect, useState } from 'react'

function ApiTest() {
    const [animal, setAnimal] = useState([]);
    // let API_URL = "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20140301&endde=20140430&pageNo=1&numOfRows=10&ServiceKey=";
    // let API_KEY = "d7DXF5UusAcJ7jFQYs3HTZ4c%2FrU7kRtgZOq6EIVTNyL5VJ%2B6Lu9Wp0ge6uWOxn2XbPuKuB42fiGPe4U1bfmWtA%3D%3D";
    const [Num, setNum] = useState("")
    const onNumHandeler = (event) => {
      setNum(event.currentTarget.value)
    }
    const endPoint = async()=>{
        axios.post(`/animal/animalList`,null, 
        {params:{numOfRows : Num }})
        // .then(res=>res.json())
        // .then(res=>console.log(res.data))
        .then(res=>setAnimal(res.data))
        //  console.log(res);
        console.log(animal)
    }
    useEffect(()=>{
      if(Num)
        endPoint();
    },[Num])
  return (
    <div>
      <form>
      <label htmlFor="name">페이지 수</label>
                <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input>
                {/* <button onSubmit={onSubmitHandler}  >로그인</button> */}
      </form>
      {animal && animal.map(ele =>
            <div key={ele.desertionNo}>
              <h2>종 : {ele.kindCd}</h2>
              <div>나이 : {ele.age}</div>
              <div>특징 : {ele.specialMark}</div>
            </div>)}
      id : {animal && animal.desertionNo}
    </div>
  )
}

export default ApiTest
