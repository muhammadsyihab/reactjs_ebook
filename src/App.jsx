// import React from 'react'
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route, Navigate,  } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import BookDetail from './pages/BookDetail'
import AllCategories from './pages/AllCategories';
import AllBooks from './pages/AllBooks';
import login from './pages/auth/login';
import { RecoilRoot } from 'recoil';
import Profile from './pages/Profile';



function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/login' Component={login} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/book-detail/:bookId' Component={BookDetail} />
            <Route path='/all-categoeies' Component={AllCategories} />
            <Route path='/all-books' Component={AllBooks} />
            <Route path='/profile' Component={Profile} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
