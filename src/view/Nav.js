import React from 'react'
import '../css/style.css';
import RightNav from './RightNav';

function Nav() {
    return (
        <div>
            <div className="nav_wrapper">
                <nav className="menu">
                    <ul>
                        <li ><a href="/" title="Link">Home</a>
                        </li>
                        <li ><a href="/apiTest" title="Link">동물 찾기</a>
                            <ul >
                                <li ><a href="/apiTest" title="Link ">전체 보기</a></li>
                                <li ><a href="#Link" title="Link">추천 받기</a></li>
                            </ul>
                        </li>
                        <li ><a href="/community" title="Link">커뮤니티</a>
                        </li>

                        <RightNav />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
