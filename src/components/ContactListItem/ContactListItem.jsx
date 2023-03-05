import propTypes from 'prop-types';
import React from 'react';
import { ListElement } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/contacts/contacts-operations';
import { useDeleteContactMutation } from 'services/api';

export const ContactListItem = ({ id, name, number }) => {

  const [deleteContact] = useDeleteContactMutation();

  //const dispatch = useDispatch();
  return (
    <ListElement>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
      >
        X
      </button>
    </ListElement>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
};
