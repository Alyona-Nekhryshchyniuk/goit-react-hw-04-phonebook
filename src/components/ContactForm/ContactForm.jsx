import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from './Form.styled';
import { Button } from '../Button.styled';
import { Input } from '../Input.styled';
import { Label } from './Label.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form
        color="#ffee7d"
        onSubmit={e => {
          e.preventDefault();
          this.props.addContact(this.state);
          this.setState({ name: '', number: '' });
        }}
      >
        <Label>
          Name:{' '}
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputChange}
          />
        </Label>
        <Label>
          Number:{' '}
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.inputChange}
          />
        </Label>
        <Button type="submit">
          {' '}
          <BsFillTelephonePlusFill /> Add contacts
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
