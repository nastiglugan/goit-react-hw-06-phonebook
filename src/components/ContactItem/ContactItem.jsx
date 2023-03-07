import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import {
  ContactItemWrap,
  ListItems,
  Item,
  DeleteBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));

  return (
    <ContactItemWrap>
      <ListItems>
        <Item>Name:{contact.name}</Item>
        <Item>Tel:{contact.number}</Item>
      </ListItems>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ContactItemWrap>
  );
};
