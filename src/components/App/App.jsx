
import { ContactForm } from '../Form/Form';
import { ContactList } from '../Contacts/Contacts';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactFilter />

      <ContactList />
    </Container>
  );
};
