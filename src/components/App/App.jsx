import { useState, useEffect } from 'react';
import { ContactForm } from '../Form/Form';
import { ContactList } from '../Contacts/Contacts';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container } from './App.styled';

export const App = () => {

  const testContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts')) ?? testContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, id, number }) => {
    const contact = { name, id, number };

   console.log(contact);
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteHandler = id => {
    setContacts(prevState =>
      prevState.filter(prevState => prevState.id !== id)
    );

    return;
  };

  const onFilterContacts = () => {
       if (filter) {
      let filterContact = contacts.filter(
        contact =>
          contact.name.includes(filter) ||
          contact.name.toLowerCase().includes(filter)
      );
      return filterContact;
    } else {
      return contacts;
    }
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={onFormSubmit}></ContactForm>

      <h2>Contacts</h2>
      <ContactFilter onFilter={onFilter} filter={filter} />

      <ContactList
        contacts={contacts}
        filter={filter}
        filterContacts={onFilterContacts}
        onDelete={onDeleteHandler}
      ></ContactList>
    </Container>
  );
};
