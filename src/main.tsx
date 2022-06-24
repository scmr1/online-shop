import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import { AdminLayout } from './components/AdminLayout'
import { AdminHome } from './pages/admin/AdminHome'
import { UsersList } from './pages/admin/UsersList'
import './globalStyles.module.less'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
                    <Route path="users" element={<UsersList />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
