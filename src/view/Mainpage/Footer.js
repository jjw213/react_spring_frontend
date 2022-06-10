import React from "react";
import logo1 from "../../css/img/logo.png";

function Footer() {
  return (
    <div id="Footer">
      <div id="footer_box">
        <div id="footer_logo">
          {/* <h1>LOGO</h1> */}
          <img
            src={logo1}
            style={{ width: "100px", height: "90px", marginTop: "-18px" }}
          ></img>
        </div>
        <div id="address">
          <ul>
            <li>서울시 영등포구 000로 111</li>
            <li>TEL:02-123-1234 Email:email@email.com</li>
            <li>출처:공공기관API-유기동물관리시스템</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
