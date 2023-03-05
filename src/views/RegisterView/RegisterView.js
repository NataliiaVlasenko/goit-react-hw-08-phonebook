 import { Form, Field} from './RegisterView.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from '@mui/material/Button';

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    
      <Form onSubmit={handleSubmit}>
        <label >
          Name
          <Field
            
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <Field
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label >
          Password
          <Field
            
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit" >
          Register
        </Button>
      </Form>
   
  );
}