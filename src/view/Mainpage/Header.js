import { width } from "@mui/system";
import React from "react";
import logo from "../../css/img/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="section">
        <div className="logo">
          <a href="/">
            <img
              src={logo}
              style={{ width: "100px", height: "90px", marginTop: "-18px" }}
            ></img>
          </a>
        </div>

        <div className="nav">
          <ul>
            <li>
              <a href="https://www.animal.go.kr/front/awtis/institution/institutionList.do?menuNo=1000000059">
                동물보호센터
              </a>
            </li>
            <li>
              <a href="http://www.119ark.org/">동물구조119</a>
            </li>
            <li>
              <a href="https://www.animals.or.kr/">동물자유연대</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
