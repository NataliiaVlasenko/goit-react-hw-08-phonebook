import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/Contacts';
import ContactForm from '../../components/Form';
import ContactFilter from '../../components/ContactFilter';
//import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {Wrapper} from './ContactView.styled';


const ContactsView = () => {
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </Wrapper>
  );
}

export default ContactsView;