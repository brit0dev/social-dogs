import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <nav className='container'>
        <NavLink to='/' end>
          Home
        </NavLink>
        <NavLink to='/login'>Login / Criar</NavLink>
      </nav>
    </header>
  );
}

export default Header;
