import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { getFilter } from 'redux/filter/filterSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filteredContacts = useSelector(state => state.filter);

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const searchContact = () => {
    if (!filteredContacts) {
      return contacts;
    }
    const normalizedData = filteredContacts.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedData)
    );
  };

  const filteredList = searchContact();

  return (
    <ul>
      {filteredList.map(
        (
          { name, id, phone } //filterContacts()
        ) => (
          <ContactListItem key={id} name={name} id={id} phone={phone} />
        )
      )}
    </ul>
  );
};
