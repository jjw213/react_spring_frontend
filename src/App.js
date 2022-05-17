import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '../src/view/MainPage'
import SignPage from './view/SignPage';
import ListPage from './view/ListPage'
import LoginPage from './view/LoginPage';
import Nav from './view/Nav';
import LoginSelectPage from './view/LoginSelectPage';
import Profile from './view/Profile';
import KakaoLogout from './view/KakaoLogout';
import ApiTest from './view/ApiTest';
import CommunityPage from './view/CommunityPage';
import Auth from "./_reducers/Auth";

function App() {
  // const REST_API_KEY = "170293c1b046c874abd5476ddf3dba3a";
  // const REDIRECT_URI = "http://localhost:3000/members/kakaoLogin";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Nav/>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

        <Routes>
          <Route exact path="/" element={MainPage()} />
          <Route exact path="/members/new" element={SignPage()} />
          <Route exact path="/members" element={ListPage()} />
          <Route exact path="/members/memberLogin" element={LoginPage()} />


          <Route exact path="/members/loginSelect" element={LoginSelectPage()} />
          <Route exact path="/members/profile" element={Profile()} />
          <Route exact path="/members/kakaoLogin" element={Auth()}/>
          <Route exact path="/members/kakaoLogout" element={KakaoLogout()}/> 
          <Route exact path="/apiTest" element={ApiTest()}/> 
          <Route exact path="/community" element={CommunityPage()}/>

          
        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
