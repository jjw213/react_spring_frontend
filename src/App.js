import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import {  Route, Routes } from "react-router-dom";
import MainPage from '../src/view/MainPage'
import SignPage from './view/SignInUp/SignPage';
import ListPage from './view/ListPage'
import LoginPage from './view/SignInUp/LoginPage';
import Nav from './view/Nav';
import LoginSelectPage from './view/LoginSelectPage';
import Profile from './view/Profile';
import KakaoLogout from './view/KakaoLogout';
import ApiTest from './view/Animals/ApiTest';
import CommunityPage from './view/CommunityPage';
import MyPage from './view/Mainpage/MyPage';

import Auth from "./_reducers/Auth";
import "../node_modules/antd/dist/antd.css";
import PublicRoute from './store/PublicRoute';
import PrivateRoute from './store/PrivateRoute';


function App() {
   return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Nav/>
      <div>
      {/* <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}> */}

        <Routes>
          <Route exact path="/" element={MainPage()} />
          <Route exact path="/members" element={ListPage()} />
          <Route exact path="/members/new" element={<PublicRoute/>} >
            <Route exact path="/members/new" element={SignPage()}/>
          </Route>
          <Route exact path="/members/memberLogin" element={<PublicRoute/>} >
            <Route exact path="/members/memberLogin" element={LoginPage()}/>
          </Route>

          <Route exact path="/members/loginSelect" element={LoginSelectPage()} />
          <Route exact path="/members/profile" element={<PrivateRoute/>} />
          <Route exact path="/members/kakaoLogin" element={Auth()}/>
          <Route exact path="/members/kakaoLogout" element={KakaoLogout()}/> 
          <Route exact path="/apiTest" element={ApiTest()}/> 
          <Route exact path="/community" element={CommunityPage()}/>
          <Route exact path="/MyPage" element={MyPage()}/>
          

          
        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
