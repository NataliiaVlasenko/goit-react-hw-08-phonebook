import {Authlink} from './AuthNav.styled';

const AuthNav = () => (
  <div>
    <Authlink
      to="/register"
      exact
      
      //activeClassName={s.activeLink}
    >
      Sign up
    </Authlink>
    <Authlink
      to="/login"
      exact
      
      //activeClassName={s.activeLink}
    >
      Log in
    </Authlink>
  </div>
);

export default AuthNav;