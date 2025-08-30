import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import Project from './pages/Project'
import ScrollToTop from './components/ScrollToTop'
import './portfolio.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
