import React from 'react'
import catBtn1 from "../../css/img/catIcon1.png";
import dogBtn1 from "../../css/img/dogIcon1.png";
import etcBtn1 from "../../css/img/etcIcon1.png";
import catBtn2 from "../../css/img/catIcon2.png";
import dogBtn2 from "../../css/img/dogIcon2.png";
import etcBtn2 from "../../css/img/etcIcon2.png";
import "../../css/ApiTest.css";

function Btn(props) {
    const {dog, cat, animals, isHover1, isHover2, isHover3, submit} = props;
  return (
      
    <div className="animalBtn">
        <div className="searchName">
            <label htmlFor="name">👀 찾고자 하는 동물을 선택해주세요 👀</label>
        </div>
        <button
          onClick={cat}
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
          onClick={dog}
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
        <button
          onClick={animals}
          value="기타"
          className="dogBtn"
          style={{
            border: "none",
            width: "80px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <img
            src={isHover3 ? etcBtn2 : etcBtn1}
            style={{ width: "100%", height: "100%" }}
          />
        </button>
        <div className="submitCenter">
        <button
          className="submitBtn submitBtnPush"
          onClick={submit}
          style={{
            border: "none",
            width: "120px",
            backgroundColor: "#FFAA40",
            cursor: "pointer",
          }}
        >
          찾기
        </button>
      </div>
      </div>
  )
}

export default Btn