import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';

function Login() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='recoverpassword' element={<LoginPasswordLost />} />
        <Route path='resetpassword' element={<LoginPasswordLost />} />
      </Routes>
    </section>
  );
}

export default Login;
