import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { FormInput, FormLabel, Input } from './Form.styled';
import propTypes from 'prop-types';

export class ContactForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { id: nanoid(), name, number };

    const nameInContacts = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in Contacts`);
      return;
    }
    this.props.onSubmit(contact);
    form.reset();
  };

  render() {
    return (
      <Formik initialValues={{ name: '', number: '' }}>
        <FormInput autoComplete="off" onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.name}
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
              value={this.number}
            />
          </FormLabel>

          <button type="submit">Add contact</button>
        </FormInput>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
