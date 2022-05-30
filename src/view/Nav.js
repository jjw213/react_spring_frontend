import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RightNav from './RightNav';

const MenuList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: black;
    border: none;
  };
  float:right;
`;

function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const toggleChange = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    return (
        <div>
            { /* web */}
            <BrowserView>
                <MenuList>
                    <Menu selectedKeys="mail" mode="horizontal">
                        <Menu.Item key="subs">
                            <Link to="/">
                                메인화면
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="product">
                            <Link to="/apiTest">
                                동물 찾기
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="cs">
                            <Link to="/community">
                                커뮤니티
                            </Link>
                        </Menu.Item>
                    <RightNav />
                    </Menu>
                </MenuList>
            </BrowserView>
            { /* mobile */}
            <MobileView>
                <NavTop>
                    <Button type="primary" onClick={toggleChange} 
                    style={{ marginBottom: 16 }}>
                        {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined  />}
                    </Button>
                </NavTop>
                <MenuList style={{display:"block"}}>
                <Menu selectedKeys="mail" mode="horizontal">
                    <Menu.Item key="subs">
                        <Link to="/">
                            메인화면
                        </Link>

                    </Menu.Item>

                </Menu>
                </MenuList>
                {toggleMenu &&
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={toggleBar}
                        onClick={onMenuClick}
                    >
                        <Menu.Item key="product">
                            <Link to="/apiTest">
                                동물 찾기
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="cs">
                            <Link to="/community">
                                커뮤니티
                            </Link>
                        </Menu.Item>
                        <RightNav />
                    </Menu>
                    
                }
            </MobileView>
        </div>
    )
}

export default Nav;