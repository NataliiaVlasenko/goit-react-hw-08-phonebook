import axios from 'axios';

//https://63f9ba5dbeec322c57e6d42a.mockapi.io/contacts
// API endpoint

const instance = axios.create({
  baseURL: 'https://63f9ba5dbeec322c57e6d42a.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
