import React,{useState, useEffect} from "react";
import axios from "axios";

function Silde(){
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
    return(
        <div class="slidebox">
            <form>
      <label htmlFor="name">페이지 수</label>
                <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input>
                {/* <button onSubmit={onSubmitHandler}  >로그인</button> */}
      </form>
            <input type="radio" name="slide" id="slide01" checked/>
            <input type="radio" name="slide" id="slide02"/>
            <input type="radio" name="slide" id="slide03"/>
            <input type="radio" name="slide" id="slide04"/>
            <input type="radio" name="slide" id="slide05"/>
            <input type="radio" name="slide" id="slide06"/>
            <input type="radio" name="slide" id="slide07"/>
            <input type="radio" name="slide" id="slide08"/>
            <input type="radio" name="slide" id="slide09"/>
            <input type="radio" name="slide" id="slide10"/>
            <ul class="slidelist">
                <li class="slideitem">
                    <img src={animal&&animal[0].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[1].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[2].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[3].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[4].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[5].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[6].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[7].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[8].filename}/>
                </li>
                <li class="slideitem">
                    <img src={animal&&animal[9].filename}/>
                </li>
            </ul>
        </div>
    )
}

export default Silde