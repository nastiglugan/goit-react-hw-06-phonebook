import { useSelector } from 'react-redux';
import { ContactWrap, List, ContactTitle } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);

  return (
    <ContactWrap>
      <ContactTitle>Contact List</ContactTitle>
      <List>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
      </List>
    </ContactWrap>
  );
};
