import React, { Component } from 'react';
import { ContactForm } from '../Form/Form';
import { ContactList } from '../Contacts/Contacts';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    console.log('App componentDidMount');

   const contacts = localStorage.getItem('contacts');
   const parsedContacts = JSON.parse(contacts);

     if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   console.log('App componentDidUpdate');

     const nextContacts = this.state.contacts;
     const prevContacts= prevState.contacts;

    if (nextContacts !== prevContacts) {
      
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

  }

  onFormSubmit = ({ name, id, number }) => {
    const contact = { name, id, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  onDeleteHandler = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => {
      return { ...prevState, contacts: [...filteredContacts] };
    });
  };

  onFilterContacts = () => {
    let filterContact = [];
    if (this.state.filter) {
      filterContact = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
      );
    } else {
      return this.state.contacts;
    }
    return filterContact;
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.onFormSubmit}
        ></ContactForm>

        <h2>Contacts</h2>
        <ContactFilter onFilter={this.onFilter} filter={this.state.filter} />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          filterContacts={this.onFilterContacts}
          onDelete={this.onDeleteHandler}
        ></ContactList>
      </Container>
    );
  }
}
