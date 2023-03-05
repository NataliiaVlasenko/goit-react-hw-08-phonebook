
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
//import s from './Navigation.module.css';

import { Nav } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav >
      <Nav to="/" exact >
        Home
      </Nav>

      {isLoggedIn && (
        <Nav
          to="/contacts"
          exact
        
        >
          Contacts
        </Nav>
      )}
    </nav>
  );
}

export default Navigation;