import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { getFilter } from 'redux/filter/filterSelectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  //console.log(contacts);
  const filter = useSelector(getFilter);

  const normalizedData = filter.toLowerCase();
  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedData)
  );

  return (
    <ul>
      {normalizedContacts.map(
        (
          { name, id, number } //filterContacts()
        ) => (
          <ContactListItem key={id} name={name} id={id} number={number} />
        )
      )}
    </ul>
  );
};
