
import Button from '@mui/material/Button';
import defaultAvatar from '../../images/avatar.png';

import { Container, Avatar, Name } from './UserMenu.styled';

import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';


export default function UserMenu() {

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <Container>
      <Avatar
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        
      />
      <Name >Welcome, {name}</Name>
      <Name > {email}</Name>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Container>
  );
}