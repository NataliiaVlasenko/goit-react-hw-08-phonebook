import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import Loader from '../../components/Loader/Loader';
//import s from './LoginView.module.css';
import {Form, Field} from './LoginView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  //const isLoading = useSelector(authSelectors.getLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
        
        placeholder="Example user@mail.com"
        value={email}
        onChange={handleChange}
        
      />

      <Field
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
        title="Enter your password"

      />



      
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Log in
        </Button>
      

      {/* {isLoading && <Loader/>} */}
    </Form>
  );
}