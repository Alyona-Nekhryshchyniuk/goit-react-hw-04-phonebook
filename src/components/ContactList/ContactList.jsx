import PropTypes from 'prop-types';
import { Button } from '../Button.styled';
import { List, ListItem } from './List.styled';
import { RiContactsLine, RiDeleteBin6Line } from 'react-icons/ri';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                <div>
                  <RiContactsLine color="color=#ffee7d" /> {name}: {number}
                </div>
                <Button
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {' '}
                  <RiDeleteBin6Line
                    style={{
                      fill: '#ffee7d',
                      width: '18px',
                      height: '18px',
                    }}
                  />{' '}
                  Delete
                </Button>
              </ListItem>
            )
          );
        })}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};
export default ContactList;
