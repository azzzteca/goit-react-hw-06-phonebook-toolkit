import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export function ContactList({ children }) {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {!filter
          ? contacts.map(contact => (
              <li key={uuidv4()}>
                <ContactListItem contact={contact} />
              </li>
            ))
          : contacts
              .filter(contact => contact.name.toLowerCase().includes(filter))
              .map(contact => (
                <li key={contact.id}>
                  <ContactListItem contact={contact} />
                </li>
              ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  children: PropTypes.node,
};
