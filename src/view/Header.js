import React from 'react'

function Header() {
  return (
    <div>
      <div className="header">
        <div className="section">
          <div className="logo">
            <a href="/">LOGO</a>
          </div>

          {/* <form action="#">
              <input type="text" placeholder="이름을 입력하세요" />
              <input type="submit" value="검색" />
            </form> */}
          <div className="nav">
            <ul>
              <li><a href="https://www.animal.go.kr/front/awtis/institution/institutionList.do?menuNo=1000000059">동물보호센터</a></li>
              <li><a href="http://www.119ark.org/">동물구조119</a></li>
              <li><a href="https://www.animals.or.kr/">동물자유연대</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
