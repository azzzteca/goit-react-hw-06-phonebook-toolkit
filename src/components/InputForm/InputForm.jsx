import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/contacts-actions';
import { useLocalStorage } from '../hooks/useLocalStoraje';
import s from './InputForm.module.css';

export function InputForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const inputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const newContact = name.toLowerCase();
    const savedContacts = contacts.find(
      contact => contact.name.toLowerCase() === newContact,
    );

    if (savedContacts) {
      alert(name + 'is already in contacts.');
      return;
    }

    dispatch(actions.addContact({ name, number }));
    // setName('');
    // setNumber('');
    evt.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          onChange={inputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label>
        Number
        <input
          onChange={inputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
