import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { loadAnimal } from "../_actions/board_action"
import { useDispatch } from "react-redux";
import GridCard from "./GridCard.js";
import {Row} from "antd";

function ApiTest() {
  const dispatch = useDispatch();
  const [animal, setAnimal] = useState([]);
  const [kindcd, setKindcd] = useState("")
  const selectList = [
    {
      place: "강원도",
      code: 6420000
    },
    {
      place: "경기도",
      code: 6410000
    },
    {
      place: "경상남도",
      code: 6480000
    },
    {
      place: "경상북도",
      code: 6470000
    },
    {
      place: "광주광역시",
      code: 6290000
    },
    {
      place: "대구광역시",
      code: 6270000
    },
    {
      place: "대전광역시",
      code: 6300000
    },
    {
      place: "부산광역시",
      code: 6260000
    },
    {
      place: "서울특별시",
      code: 6110000
    },
    {
      place: "세종특별자치시",
      code: 5690000
    },
    {
      place: "울산광역시",
      code: 6310000
    },
    {
      place: "인천광역시",
      code: 6280000
    },
    {
      place: "전라남도",
      code: 6460000
    },
    {
      place: "전라북도",
      code: 6450000
    },
    {
      place: "제주특별자치도",
      code: 6500000
    },
    {
      place: "충청남도",
      code: 6440000
    },
    {
      place: "충청북도",
      code: 6430000
    },
  ];
  const [Selected, setSelected] = useState("");
  const [numOfRows, setNumOfRows] = useState(30);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const onCatHandler = (event) => {
    setKindcd(event.currentTarget.value)
  }
  const onDogHandler = (event) => {
    setKindcd(event.currentTarget.value)
  }
  const loadMoreHandler = (event) => {
    setNumOfRows(numOfRows+30);
    onSubmitHandler();
  }
  const onSubmitHandler = () => {
    let body = {
      numOfRows: numOfRows,
      kindcd: kindcd,
      upr_cd: Selected
    };
    console.log(body.kindcd);
    dispatch(loadAnimal(body))
      .then((response) => {
        console.log(response.payload);
        if (response.payload != null) {
          setAnimal(response.payload);
        } else {
          alert("동물들을 불러오지 못했어요 ㅠㅠ");
        }
      })
  }
  return (
    <div style={{width:'100%', margin:'0'}}>
      
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
      
      <form>
        <label htmlFor="name">개 / 고양이</label>
        {/* <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input> */}
      </form>
      <button onClick={onCatHandler} value="고양이" >고양이</button>
      <button onClick={onDogHandler} value="개" >강아지</button>
      <button onClick={onSubmitHandler}  >제출</button>

      <div style={{width:'85%', margin:'1rem auto'}}>
            <h2>Animals by latest</h2>
            <hr></hr>
            <Row gutter={[16,16]}>
              {animal && animal.map((ani, index)=>(
                <React.Fragment key={ani.desertionNo}>
                  {ani.processState =="보호중"? 
                  <GridCard 
                    image={ani.popfile}
                    kindCd={ani.kindCd}
                    age={ani.age}
                    careAddr={ani.careAddr}
                    careNm={ani.careNm}
                    careTel={ani.careTel}
                    processState={ani.processState}
                    sexCd={ani.sexCd}
                    specialMark={ani.specialMark}
                    weight={ani.weight}
                  />
             :"" }
                </React.Fragment>
              ))}

            </Row>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={loadMoreHandler}>Load More</button>
      </div>

      {/* {animal && animal.map(ele =>
        <div key={ele.desertionNo}>
          <h2>종 : {ele.kindCd}</h2>
          <div>나이 : {ele.age}</div>
          <div>특징 : {ele.specialMark}</div>
          <div><img src={ele.filename}></img></div>
        </div>)} */}

    </div>
  )
}

export default ApiTest
