import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

//import PropTypes from 'prop-types';

export const ContactList = ({ filterContacts, onDelete }) => {
  // console.log('from contacts', contacts.id)


  
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
  //title: PropTypes.string.isRequired
};
