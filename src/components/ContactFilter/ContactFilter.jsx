import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContact } from 'redux/contacts/contacts-actions';
import {FiltrInput, FiltrLabel} from './ContactFilter.styled';



const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div >
      <FiltrLabel>
        Find contacts by name
        <FiltrInput
          type="text"
          name="filter"
          
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          placeholder="Enter search request here"
          value={filter}
          onChange={event => dispatch(filterContact(event))}
        />
      </FiltrLabel>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;