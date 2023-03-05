import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader';
//import { useEffect } from 'react';

import { getFilter } from 'redux/contacts/contacts-selectors';
import { useGetContactsQuery } from 'services/api';

import { useSelector, useDispatch } from 'react-redux';
//import { getFilter } from 'redux/filter/filterSelectors';
//import { fetchContacts } from 'redux/contacts/contacts-operations';


const ContactList = () => {

  const filter = useSelector(getFilter);

  const { data: contacts, isFetching, isError } = useGetContactsQuery();

  const filteredContacts =
  contacts &&
  contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  console.log(contacts);
  console.log(filter);
const isContactsEmpty = filteredContacts && filteredContacts.length > 0;

  return (
    <>
      {isFetching && <Loader/>}
      {isError && console.log(isError)}
      {isContactsEmpty ? (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <ul>
          <p>No contacts found...</p>
        </ul>
      )}
    </>
    // <ul>
    //   {filteredList.map(
    //     (
    //       { name, id, phone } //filterContacts()
    //     ) => (
    //       <ContactListItem key={id} name={name} id={id} phone={phone} />
    //     )
    //   )}
    // </ul>
  );
};

export default ContactList;