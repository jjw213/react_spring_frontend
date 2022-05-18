import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import {loadAnimal} from "../_actions/board_action"
import { useDispatch } from "react-redux";
function ApiTest() {
  const dispatch = useDispatch();
    const [animal, setAnimal] = useState([]);
    const [kindcd, setKindcd] = useState("")
    const selectList = [
      {
        place:"강원도",
        code:6420000
      },
      {
        place:"경기도",
        code:6410000
      },
      {
        place:"경상남도",
        code:6480000
      },
      {
        place:"경상북도",
        code:6470000
      },
      {
        place:"광주광역시",
        code:6290000
      },
      {
        place:"대구광역시",
        code:6270000
      },
      {
        place:"대전광역시",
        code:6300000
      },
      {
        place:"부산광역시",
        code:6260000
      },
      {
        place:"서울특별시",
        code:6110000
      },
      {
        place:"세종특별자치시",
        code:5690000
      },
      {
        place:"울산광역시",
        code:6310000
      },
      {
        place:"인천광역시",
        code:6280000
      },
      {
        place:"전라남도",
        code:6460000
      },
      {
        place:"전라북도",
        code:6450000
      },
      {
        place:"제주특별자치도",
        code:6500000
      },
      {
        place:"충청남도",
        code:6440000
      },
      {
        place:"충청북도",
        code:6430000
      },
    ];
    const [Selected, setSelected] = useState("");
  
    const handleSelect = (e) => {
      setSelected(e.target.value);
    };
    const onSubmitHandler = (event) => {
      event.preventDefault();
      setKindcd(event.currentTarget.value)
    let body = {
      numOfRows: 30,
      kindcd: kindcd,
      upr_cd:Selected
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
      setKindcd(event.currentTarget.value)
    }
    const onDogHandler = (event) => {
      setKindcd(event.currentTarget.value)
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
       <div>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item.code} key={item.code}>
              {item.place}
            </option>
          ))}
        </select>
        <hr />
        <p>
          Selected: <b>{Selected}</b>
        </p>
      </div>
      <form>
      <label htmlFor="name">개 / 고양이</label>
                {/* <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input> */}
      </form>
                <button onClick={onCatHandler} value="고양이" >고양이</button>
                <button onClick={onDogHandler} value="개" >강아지</button>
                <button onClick={onSubmitHandler}  >제출</button>
      {animal && animal.map(ele =>
            <div key={ele.desertionNo}>
              <h2>종 : {ele.kindCd}</h2>
              <div>나이 : {ele.age}</div>
              <div>특징 : {ele.specialMark}</div>
              <div><img src={ele.filename}></img></div>
            </div>)}

    </div>
  )
}

export default ApiTest
