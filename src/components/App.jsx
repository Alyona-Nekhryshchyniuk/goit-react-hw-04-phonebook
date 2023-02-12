import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem('contacts')));
    }).then(storageData => {
      Boolean(storageData.length) && setContacts([...storageData]);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    contacts.find(obj => obj.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [
          { name, id: nanoid(), number },
          ...prevContacts,
        ]);
  };

  const deleteContact = ContactId => {
    setContacts(contacts.filter(contact => ContactId !== contact.id));
  };

  // const addContact = ({ name, number }) => {
  //   contacts.find(obj => obj.name === name)
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(prevContacts => [
  //         { name, id: nanoid(), number },
  //         ...prevContacts,
  //       ]);
  // };

  // const deleteContact = ContactId => {
  //   setContacts(contacts.filter(contact => ContactId !== contact.id));
  // };

  const updateFilterInState = value => {
    setFilter(value);
  };

  const loweredFilter = filter.toLowerCase();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h1>Contacts</h1>
      <Filter onChange={updateFilterInState} value={filter} />
      <ContactList
        deleteContact={deleteContact}
        contacts={contacts.filter(({ name }) =>
          name.toLowerCase().includes(loweredFilter)
        )}
        filter={filter}
      />
    </>
  );
};

export default App;
