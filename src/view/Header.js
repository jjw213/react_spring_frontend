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
            <ul  >
              <li><a href="#">menu 1</a></li>
              <li><a href="#">menu 2</a></li>
              <li><a href="#">menu 3</a></li>
              <li><a href="#">menu 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
