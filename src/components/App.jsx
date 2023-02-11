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
    new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem('contacts')));
    }).then(storageData => {
      if (storageData) return setContacts([...storageData]);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts.length < this.state.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = ({ newName, number }) => {
    console.log(contacts);
    contacts.find(obj => obj.name === newName)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [{ name, id: nanoid(), number }, ...prevState.contacts],
        }));
  };

  const deleteContact = ContactId => {
    // setContacts(contacts.filter(contact => ContactId !== contact.id))
    // this.setState(({ contacts }) => ({
    //   contacts: contacts.filter(contact => ContactId !== contact.id),
    // }));
  };

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
