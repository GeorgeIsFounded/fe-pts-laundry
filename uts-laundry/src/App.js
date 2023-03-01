import React from 'react';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/forgotPassword';
import Home from './pages/dashboard/home';
import Outlet from './pages/dashboard/home/outlet';
import Member from './pages/dashboard/home/member';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />}>
          <Route path="outlet" element={<Outlet />} />
          <Route path="member" element={<Member />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
