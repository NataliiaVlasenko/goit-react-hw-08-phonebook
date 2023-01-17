import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import propTypes from 'prop-types';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul>
      {filterContacts().map(({ name, id, number }) => (
        <ContactListItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
