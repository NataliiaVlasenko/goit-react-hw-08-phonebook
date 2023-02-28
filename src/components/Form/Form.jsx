import { useState } from 'react';

import { Formik } from 'formik';
import { FormInput, FormLabel, Input } from './Form.styled';

import { useDispatch } from 'react-redux';
//import { addContact } from 'redux/contacts/contactsActions';
import { addContact } from 'redux/contacts/contactsOperations';

export function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }}>
      <FormInput autoComplete="off" onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </FormLabel>

        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleNumberChange}
          />
        </FormLabel>

        <button type="submit">Add contact</button>
      </FormInput>
    </Formik>
  );
}
