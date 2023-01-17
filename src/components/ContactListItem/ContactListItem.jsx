import propTypes from 'prop-types';
import React from 'react';
import { ListElement } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListElement>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </ListElement>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};