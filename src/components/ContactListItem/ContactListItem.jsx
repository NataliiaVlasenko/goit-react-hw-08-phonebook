import propTypes from 'prop-types';
import React from 'react';
import { ListElement } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsActions';

export const ContactListItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <ListElement>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))} >  
      
        X
      </button>
    </ListElement>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
 
};