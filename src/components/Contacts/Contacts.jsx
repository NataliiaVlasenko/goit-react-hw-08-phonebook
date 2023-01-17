import React from 'react';

//import PropTypes from 'prop-types';

export const ContactList = ({ filterContacts, onDelete }) => {
  // console.log('from contacts', contacts.id)


  
  return (
    <ul>
      {filterContacts().map(({ name, id, number }) => (
        <li key={id} id={id}>
          {' '}
          {name}: {number}{' '}
          <button type = "button" onClick={() => onDelete(id)}> Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  //title: PropTypes.string.isRequired
};
