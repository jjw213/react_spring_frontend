import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { loadAnimal } from "../../_actions/board_action";
import { useDispatch } from "react-redux";
import AnimalList from "./AnimalList";
import selectList from "../../selectList.json";
import "../../css/ApiTest.css";
import Btn from "./Btn";
function ApiTest() {
  const selectList2 = [
    {
      processState: "전체",
      state: "",
      code:1,
    },
    {
      processState: "보호중",
      state: "protect",
      code:2,
    },
    // {
    //   processState: "종료",
    //   state: "notice",
    //   code:3,
    // },
  ];
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [animal, setAnimal] = useState([]);
  const [kindcd, setKindcd] = useState("개");
  const [Selected, setSelected] = useState("6110000");
  const [Selected2, setSelected2] = useState("protect");
  const [numOfRows, setNumOfRows] = useState(50);
  const [Loading, setLoading] = useState(true);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.target.value);
    setNumOfRows(50);
    console.log(selectList);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
    setNumOfRows(50);
  };
  const onCatHandler = (event) => {
    setKindcd(event.currentTarget.value);
    setIsHover2(false);
    setIsHover1(true);
    setIsHover3(false);
    setNumOfRows(50);
  };
  const onDogHandler = (event) => {
    setKindcd(event.currentTarget.value);
    setIsHover2(true);
    setIsHover1(false);
    setIsHover3(false);
    setNumOfRows(50);
  };
  const onAnimalsHandler = (event) => {
    setKindcd(event.currentTarget.value);
    setIsHover2(false);
    setIsHover1(false);
    setIsHover3(true);
    setNumOfRows(50);
  };
  const loadMoreHandler = (event) => {
    setLoading(true);
    setNumOfRows(numOfRows + 50);
    onSubmitHandler();
  };
  //얘 있으면 메인페이지에서 animalList가 갑분 렌더링 됨
  useEffect(() => {
    onSubmitHandler();
  }, []);

  const onSubmitHandler = () => {
    let body = {
      numOfRows: numOfRows,
      kindcd: kindcd,
      upr_cd: Selected,
      state: Selected2
    };
    dispatch(loadAnimal(body)).then((response) => {
      if (response.payload != null) {
        setAnimal(response.payload);
        setLoading(false);
        if(response.payload.length<50){
          setDisabled(true);
        }
        else{
          setDisabled(false);
        }
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
    <div>
      <div style={{ width: "100%", margin: "0" }}>
        <div className="totalText">
          <div className="locationText">
            <p>지역📍</p>
            <select onChange={handleSelect} value={Selected} className="locSel">
              {selectList.map((item) => (
                <option value={item.code} key={item.code}>
                  {item.place}
                </option>
              ))}
            </select>
          </div>
          <div className="stateText">
            <p>상태❗</p>
            <select
              onChange={handleSelect2}
              value={Selected2}
              className="stateSel"
            >
              {selectList2.map((item) => (
                <option value={item.state} key={item.code}>
                  {item.processState}
                </option>
              ))}
            </select>
          </div>

          <Btn
            dog={onDogHandler}
            cat={onCatHandler}
            animals={onAnimalsHandler}
            isHover1={isHover1}
            isHover2={isHover2}
            isHover3={isHover3}
            submit={onSubmitHandler}
          />
        </div>
        <hr />
        <AnimalList
          animal={animal}
          kindcd={kindcd}
          Selected={Selected}
          Selected2={Selected2}
          num={numOfRows}
        />
        {disabled && (<div style={{ textAlign: "center" }}>더이상 불러올 동물이 없습니다.</div>)}
        {Loading && (
          <div style={{ textAlign: "center" }}>
            최근 {numOfRows} 개의 목록 중 '{Selected2}' 동물들 불러오는 중 ...
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </div>
        )}
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            disabled={disabled}
            ref={buttonRef}
            onClick={loadMoreHandler}
            className="custom-btn btn-1"
          >
            더 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApiTest;
