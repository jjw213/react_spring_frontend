import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { loadAnimal } from "../_actions/board_action";
import { useDispatch } from "react-redux";
import GridCard from "./GridCard.js";
import { Row } from "antd";
import catBtn1 from "../css/img/catIcon1.png";
import dogBtn1 from "../css/img/dogIcon1.png";
import catBtn2 from "../css/img/catIcon2.png";
import dogBtn2 from "../css/img/dogIcon2.png";
import "../css/ApiTest.css";
function ApiTest() {
  const selectList = [
    {
      place: "강원도",
      code: 6420000,
    },
    {
      place: "경기도",
      code: 6410000,
    },
    {
      place: "경상남도",
      code: 6480000,
    },
    {
      place: "경상북도",
      code: 6470000,
    },
    {
      place: "광주광역시",
      code: 6290000,
    },
    {
      place: "대구광역시",
      code: 6270000,
    },
    {
      place: "대전광역시",
      code: 6300000,
    },
    {
      place: "부산광역시",
      code: 6260000,
    },
    {
      place: "서울특별시",
      code: 6110000,
    },
    {
      place: "세종특별자치시",
      code: 5690000,
    },
    {
      place: "울산광역시",
      code: 6310000,
    },
    {
      place: "인천광역시",
      code: 6280000,
    },
    {
      place: "전라남도",
      code: 6460000,
    },
    {
      place: "전라북도",
      code: 6450000,
    },
    {
      place: "제주특별자치도",
      code: 6500000,
    },
    {
      place: "충청남도",
      code: 6440000,
    },
    {
      place: "충청북도",
      code: 6430000,
    },
  ];
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
    console.log(numOfRows);
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

      <form>
        <div className="searchName">
          <label htmlFor="name">찾고자 하는 동물을 선택해주세요 👀</label>
        </div>
        {/* <input type="text" id="name" name="numOfRows" onChange={onNumHandeler} placeholder="이름을 입력하세요"></input> */}
      </form>
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
            // onMouseOver={() => setIsHover1(true)}
            // onMouseOut={() => setIsHover1(false)}
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
            // onMouseOver={() => setIsHover2(true)}
            // onMouseOut={() => setIsHover2(false)}
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
          제출
        </button>
      </div>
      <hr />
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Animals by latest</h2>
        <hr></hr>
        <Row gutter={[16, 16]}>
          {animal &&
            animal.map((ani, index) => (
              <React.Fragment key={ani.desertionNo}>
                {Selected2 == "전체" ? (
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
                ) : ani.processState == Selected2 ? (
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
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
        </Row>
      </div>
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

      {/* {animal && animal.map(ele =>
        <div key={ele.desertionNo}>
          <h2>종 : {ele.kindCd}</h2>
          <div>나이 : {ele.age}</div>
          <div>특징 : {ele.specialMark}</div>
          <div><img src={ele.filename}></img></div>
        </div>)} */}
    </div>
  );
}

export default ApiTest;
