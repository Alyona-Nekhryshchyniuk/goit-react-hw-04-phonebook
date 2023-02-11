import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './Form.styled';
import { Button } from '../Button.styled';
import { Input } from '../Input.styled';
import { Label } from './Label.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = ({ target }) => {
    if (target.name === 'name') return setName(target.value);
    setNumber(target.value);
  };

  return (
    <Form
      color="#ffee7d"
      onSubmit={e => {
        e.preventDefault();
        this.props.addContact({ name, number });
        setName('');
        setNumber('');
      }}
    >
      <Label>
        Name:{' '}
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
      </Label>
      <Label>
        Number:{' '}
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
      </Label>
      <Button type="submit">
        {' '}
        <BsFillTelephonePlusFill /> Add contacts
      </Button>
    </Form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
export default ContactForm;
