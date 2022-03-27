import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '../src/view/MainPage'
import SignPage from './view/SignPage';
import ListPage from './view/ListPage'
import LoginPage from './view/LoginPage';
function App() {

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
     
          <Routes>
            <Route exact path="/" element={MainPage()} />
            <Route exact path="/members/new" element={SignPage()} />
            <Route exact path="/members" element={ListPage()}/>
            <Route exact path="/members/memberLogin" element={LoginPage()}/>
      </Routes>
    
      </div>
    </Suspense>
  );
}

export default App;
