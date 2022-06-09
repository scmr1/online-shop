import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminHome } from './pages/admin'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminHome message='123'/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
