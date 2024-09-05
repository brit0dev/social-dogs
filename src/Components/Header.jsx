import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import DogsIcon from '../Assets/dogs.svg?react';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav + ' container'}>
        <NavLink to='/' end aria-label='Dogs - Home'>
          <DogsIcon className={styles.logo} />
        </NavLink>
        <NavLink to='/login' className={styles.login}>
          Login / Criar
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
