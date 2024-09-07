import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './UserHeaderNav.module.css';
import FeedIcon from '../../Assets/feed.svg?react';
import StatsIcon from '../../Assets/estatisticas.svg?react';
import AddIcon from '../../Assets/adicionar.svg?react';
import LogoutIcon from '../../Assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState();
  const mobile = useMedia('(max-width:40rem)');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    navigate('/login');
    userLogout();
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to='/conta' end>
          <FeedIcon /> {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <StatsIcon /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <AddIcon /> {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
