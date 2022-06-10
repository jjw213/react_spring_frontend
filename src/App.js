import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from '../src/view/MainPage'
import SignPage from './view/SignInUp/SignPage';
import LoginPage from './view/SignInUp/LoginPage';
import Nav from './view/Nav';
import LoginSelectPage from './view/LoginSelectPage';
import ApiTest from './view/Animals/ApiTest';
import MyPage from './view/Mypage/MyPage';
import PostMain from './view/page/post/PostMain';
import PostView from './view/page/post/PostView';
import Auth from "./_reducers/Auth";
import "../node_modules/antd/dist/antd.css";
import PublicRoute from './store/PublicRoute';
import PrivateRoute from './store/PrivateRoute';
import CommunityPage from './view/page/post/CommunityPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Nav />
      <div>
        {/* <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}> */}

        <Routes>
          <Route exact path="/" element={MainPage()} />
          <Route exact path="/members/new" element={<PublicRoute />} >
            <Route exact path="/members/new" element={SignPage()} />
          </Route>
          <Route exact path="/members/memberLogin" element={<PublicRoute />} >
            <Route exact path="/members/memberLogin" element={LoginPage()} />
          </Route>

          <Route exact path="/members/loginSelect" element={LoginSelectPage()} />
          <Route exact path="/myPage" element={<PrivateRoute />} >
            <Route exact path="/myPage" element={MyPage()} />
          </Route>
          <Route exact path="/members/kakaoLogin" element={<PublicRoute />} >
            <Route exact path="/members/kakaoLogin" element={Auth()} />
          </Route>
          <Route exact path="/apiTest" element={ApiTest()} />

          <Route exact path='/postView/:no' element={<PostView />} />
          <Route exact path='/community' element={PostMain()} />
          <Route exact path="/write" element={<PrivateRoute />} >
            <Route exact path="/write" element={CommunityPage()} />
          </Route>

        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
