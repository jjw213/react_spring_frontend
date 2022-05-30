import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { logoutUser } from '../_actions/user_action'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import '../css/style.css';
import { Menu } from 'antd';
import styled from 'styled-components'
import { IoIosMenu } from "react-icons/io";

function RightNav() {
    const [menu, setmenu] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const logoutHandler = (event) => {
        dispatch(logoutUser()).then(() => {
            navigate('/');
        })
            .catch(err => {
                console.log(err)
                setTimeout(() => {
                }, 3000);
            });

    };
    return (
        <React.Fragment >
        {/* <ControlBox menu={menu}>


            {user.userData == null ?
                <Control href="/members/loginSelect">회원가입</Control>
                : <Control><Link to="/MyPage" >{user.userData} 님 환영합니다.</Link></Control>}
            {user.userData == null ? <Control style={{ margin: '0 20px' }} href="/members/memberLogin">로그인</Control>
                : <Control style={{ margin: '0 20px ' }} onClick={logoutHandler}>로그아웃</Control>}
            
        </ControlBox>
        <Menubar href='#' onClick={() => { setmenu(!menu) }} >
        <IoIosMenu />
    </Menubar> */}
    
    {user.userData == null ?
                <Menu.Item key="signUp" style={{paddingLeft:"24px"}}><a href="/members/loginSelect" >
                    회원가입</a></Menu.Item>
                : <Menu.Item key="signUp" style={{paddingLeft:"24px"}}><Link to="/MyPage"  >
                    {user.userData} 님 환영합니다.</Link></Menu.Item>}
            {user.userData == null ? <Menu.Item key="signin"  style={{paddingLeft:"24px"}}><a  href="/members/memberLogin">
                로그인</a></Menu.Item>
                : <Menu.Item key="signin"  style={{paddingLeft:"24px"}}><a onClick
                ={logoutHandler}>로그아웃</a></Menu.Item>}
            
    </React.Fragment>
    )
}
const ControlBox = styled.div`
display: flex;
align-items:center;
@media screen and (max-width: 500px) {
    
    flex-direction: column;
    align-items:flex-end;
    display: ${(menu) => 
        {
       return menu.menu === false ? "none" : "flex"
    }
};
}`

const Control = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
`
const Menubar = styled.a`
    display: flex;
    align-items:center;
    font-size: 30px;
    position: absolute;
    right: 32px;
    @media screen and (min-width: 500px) {
        display: none;    
    }
`
export default RightNav
