import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
 import { ADD, DELETE} from './contactsTypes';


 export const addContact = createAction(ADD, contact => ({
  payload: {
    id: nanoid(),
    ...contact,
  },
}));


export const deleteContact = createAction(DELETE);
