import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { FormInput, FormLabel, Input } from './Form.styled';
import propTypes from 'prop-types';

export function ContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = { id: nanoid(), name, number };

    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameInContacts) {
      alert(`${name} is already in Contacts`);
      return;
    }
    onSubmit(contact);
    setName('');
    setNumber('');
   
  };

  return (
    <Formik initialValues={{ name: '', number: '' }}>
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
            value={number}
            onChange={handleNumberChange}
          />
        </FormLabel>

        <button type="submit">Add contact</button>
      </FormInput>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
