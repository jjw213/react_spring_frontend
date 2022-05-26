import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { logoutUser } from '../_actions/user_action'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../css/style.css';
import { Menu } from 'antd';

function RightNav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formErrorMessage, setFormErrorMessage] = useState('')
    const user = useSelector((state) => state.user)

    const logoutHandler = (event) => {
        dispatch(logoutUser()).then(() => {
            navigate('/');
        })
            .catch(err => {
                console.log(err)
                setFormErrorMessage('서버 연결이 불안정합니다.')
                setTimeout(() => {
                    setFormErrorMessage("")
                }, 3000);
            });

    };

    return (

        <Menu mode="horizontal">
            
            
            {/* <div><a href="/members">회원목록</a></div> */}
        
            {/* <Menu.Item key="signin"> */}
            {user.userData == null ? <a style={{margin:'0 20px'}} href="/members/memberLogin">로그인</a>
                : <a style={{margin:'0 20px '}} onClick={logoutHandler}>로그아웃</a>}
            {/* </Menu.Item> */}
            {/* <Menu.Item key="signup"> */}
            {user.userData == null ?
            <a href="/members/loginSelect">회원가입</a>
            :<a href="/MyPage" >{user.userData} 님 환영합니다.</a>}
            {/* </Menu.Item> */}
          </Menu>
    )
}

export default RightNav
