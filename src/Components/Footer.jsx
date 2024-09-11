import React from 'react';
import styles from './Footer.module.css';
import DogsIcon from '../Assets/dogs-footer.svg?react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <DogsIcon />
      <p>Social Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}

export default Footer;
