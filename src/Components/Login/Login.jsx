import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

function Login() {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (login) navigate('/conta');
  }, [login, navigate]);

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='recoverpassword' element={<LoginPasswordLost />} />
          <Route path='resetpassword' element={<LoginPasswordLost />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
