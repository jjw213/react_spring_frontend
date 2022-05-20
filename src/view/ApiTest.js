import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { loadAnimal } from "../_actions/board_action";
import { useDispatch } from "react-redux";
import AnimalList from "./AnimalList";
import selectList from "../selectList.json";
import catBtn1 from "../css/img/catIcon1.png";
import dogBtn1 from "../css/img/dogIcon1.png";
import catBtn2 from "../css/img/catIcon2.png";
import dogBtn2 from "../css/img/dogIcon2.png";
import "../css/ApiTest.css";
function ApiTest() {
  const selectList2 = [
    {
      processState: "전체",
      code: 1,
    },
    {
      processState: "보호중",
      code: 2,
    },
    {
      processState: "종료",
      code: 3,
    },
  ];
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [animal, setAnimal] = useState([]);
  const [kindcd, setKindcd] = useState("개");
  const [Selected, setSelected] = useState("6110000");
  const [Selected2, setSelected2] = useState("전체");
  const [numOfRows, setNumOfRows] = useState(50);
  const [Loading, setLoading] = useState(true);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.target.value);
    setNumOfRows(50);
    console.log(selectList);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
  };
  const onCatHandler = (event) => {
    setKindcd(event.currentTarget.value);
    setIsHover2(false);
    setIsHover1(true);
    setNumOfRows(50);
  };
  const onDogHandler = (event) => {
    setKindcd(event.currentTarget.value);
    setIsHover2(true);
    setIsHover1(false);
    setNumOfRows(50);
  };
  const loadMoreHandler = (event) => {
    setLoading(true);
    setNumOfRows(numOfRows + 50);
    onSubmitHandler();
  };
  useEffect(() => {
    onSubmitHandler();
  }, []);

  const onSubmitHandler = () => {
    let body = {
      numOfRows: numOfRows,
      kindcd: kindcd,
      upr_cd: Selected,
    };
    console.log(body.kindcd);
    dispatch(loadAnimal(body)).then((response) => {
      console.log(response.payload);
      if (response.payload != null) {
        setAnimal(response.payload);
        setLoading(false);
      } else {
        alert("동물들을 불러오지 못했어요");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const body = document.body;

    const html = document.documentElement;

    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      // loadMoreItems()

      console.log("clicked");

      buttonRef.current.click();
    }
  };
  return (
    <div style={{ width: "100%", margin: "0" }}>
      <p>
        지역 :
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item.code} key={item.code}>
              {item.place}
            </option>
          ))}
        </select>
      </p>
      <p>
        상태 :
        <select onChange={handleSelect2} value={Selected2}>
          {selectList2.map((item) => (
            <option value={item.processState} key={item.code}>
              {item.processState}
            </option>
          ))}
        </select>
      </p>

        <div className="searchName">
          <label htmlFor="name">찾고자 하는 동물을 선택해주세요 👀</label>
        </div>
      <div className="animalBtn">
        <button
          onClick={onCatHandler}
          value="고양이"
          className="catBtn"
          style={{
            border: "none",
            width: "80px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <img
            src={isHover1 ? catBtn2 : catBtn1}
            style={{ width: "100%", height: "100%" }}
          />
        </button>
        <button
          onClick={onDogHandler}
          value="개"
          className="dogBtn"
          style={{
            border: "none",
            width: "80px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <img
            src={isHover2 ? dogBtn2 : dogBtn1}
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      </div>
      <div className="submitBtn">
        <button
          onClick={onSubmitHandler}
          style={{
            border: "none",
            width: "80px",
            backgroundColor: "#FFAA40",
            cursor: "pointer",
          }}
        >
          찾기
        </button>
      </div>
      <hr />
      <AnimalList animal={animal} Selected2={Selected2}/>
      {Loading && (
        <div style={{ textAlign: "center", fontSize: "large" }}>
          최근 {numOfRows} 개의 목록 중 '{Selected2}' 동물들 불러오는 중 ...
        </div>
      )}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button ref={buttonRef} onClick={loadMoreHandler}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default ApiTest;
