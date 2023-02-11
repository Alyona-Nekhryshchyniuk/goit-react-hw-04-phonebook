import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  async componentDidMount() {
    const storageData = await JSON.parse(localStorage.getItem('contacts'));
    storageData && this.setState({ contacts: [...storageData] });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length < this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.state.contacts.find(obj => obj.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [{ name, id: nanoid(), number }, ...prevState.contacts],
        }));
  };

  deleteContact = ContactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => ContactId !== contact.id),
    }));
  };

  updateFilterInState = value => {
    this.setState({ filter: value });
  };

  render() {
    const { addContact, updateFilterInState, deleteContact } = this;
    const { filter, contacts } = this.state;
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
  }
}

export default App;
