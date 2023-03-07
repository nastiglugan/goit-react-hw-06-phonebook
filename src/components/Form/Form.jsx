import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contactsSlice';
import { FormWrap, Label, Input, BtnForm } from './Form.styled';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();

    const form = {
      name: event.target.name.value,
      number: event.target.number.value,
      id: nanoid(),
    };

    const findContact = contacts.find(contact => contact.name === form.name);

    if (findContact) {
      alert(`${form.name} is already in contact`);
      return;
    }

    dispatch(addContacts(form));

    const reset = () => {
      event.target.name.value = '';
      event.target.number.value = '';
    };
    reset();
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380XXXXXXXXX"
        />
      </Label>
      <BtnForm type="submit">Add contact</BtnForm>
    </FormWrap>
  );
};

// };
