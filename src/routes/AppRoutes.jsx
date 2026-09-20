import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react'
const Dashboard = lazy(() => import('../pages/Dashboard'))
import Login from '../pages/Login';
import Register from '../pages/Register';

const Jobs = lazy(() => import('../pages/Jobs'))
const Profile = lazy(() => import('../pages/Profile'))
const Applications = lazy(() => import('../pages/Applications'))

import DashBoardLayout from '../layouts/DashBoardLayout';
import ProtectedRoutes from './ProtectedRoutes';
import Home from '../pages/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading page...</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route element={<DashBoardLayout />}>
                            
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="jobs" element={<Jobs />} />
                            <Route path="applications" element={<Applications />} />
                            <Route path="profile" element={<Profile />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRoutes;