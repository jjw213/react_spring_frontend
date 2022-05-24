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

        <React.Fragment >
            {user.userData == null ?
            <a href="/members/loginSelect" style={{margin:'0 20px 0 50px'}}>회원가입</a>
            :<a href="/MyPage" style={{margin:'0 20px 0 50px'}}>{user.userData} 님 환영합니다.</a>}
            {user.userData == null ? <a href="/members/memberLogin">로그인</a>
                : <a onClick={logoutHandler}>로그아웃</a>}
            {/* <div><a href="/members">회원목록</a></div> */}
        </React.Fragment>

    )
}

export default RightNav
