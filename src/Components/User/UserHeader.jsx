import React from 'react';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      default:
        setTitle('Minha conta');

        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
