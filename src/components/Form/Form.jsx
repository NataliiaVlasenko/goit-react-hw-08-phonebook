import { useState } from 'react';

import { Formik } from 'formik';
import { FormInput, FormLabel, Input } from './Form.styled';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

//import { useDispatch } from 'react-redux';
//import { addContact } from 'redux/contacts/contactsActions';
//import { addContact } from 'redux/contacts/contacts-operations';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/api';

const INITIAL_STATE = {
  name: '',
  number: '',
};

function ContactForm() {
  //const dispatch = useDispatch();

  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  // const nameInputId = nanoid();
  // const numberInputId = nanoid();

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onSubmit = event => {
    event.preventDefault();
    console.log(contacts);
    if (
      contacts && contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`Contact '${name}' is already exist`);
    }
    const id = nanoid();
    addContact({ id, name, number });
    reset();
  };

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };
  return (
    <Formik initialValues={{ name: '', number: '' }}>
      <FormInput autoComplete="off" onSubmit={onSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={event => setName(event.target.value)}
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
            onChange={event => setNumber(event.target.value)}
          />
        </FormLabel>

        <button type="submit">Add contact</button>
      </FormInput>
    </Formik>
  );
}

export default ContactForm;