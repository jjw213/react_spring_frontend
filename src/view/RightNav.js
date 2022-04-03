import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { logoutUser } from '../_actions/user_action'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../css/style.css';

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

        <li className='right_nav'>
            {user.userData == null ?
             <li><a href="/members/new">회원가입</a></li>
            :<li style={{ color: 'red' }}>{user.userData} 님 환영합니다.</li>}
            {user.userData == null ? <li><a href="/members/memberLogin">로그인</a></li>
                : <li><a onClick={logoutHandler}>로그아웃</a></li>}
            <li><a href="/members">회원목록</a></li>
        </li>

    )
}

export default RightNav
