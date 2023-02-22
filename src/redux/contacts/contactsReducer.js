import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import { ADD, DELETE } from './contactsTypes';
import { addContact, deleteContact } from './contactsActions';
import { filterContact } from '../filter/filterActions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, { payload }) => {
      if (state.find(({ name }) => name === payload.name)) {
        alert(`Contact ${payload.name} is already exist`);
        return state;
      }
      return [...state, payload];
    },

    [deleteContact]: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  }
);

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
