import { useSelector } from 'react-redux';
import { Section } from '../Section/Section.jsx';
import { InputForm } from '../InputForm/InputForm.jsx';
import { Filter } from '../Filter/Filter.jsx';
import { ContactList } from '../ContactList/ContactList.jsx';
import s from './App.module.css';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className={s.app}>
      <Section title={'Phonebook'}>
        <InputForm />

        <ContactList>{contacts.length > 2 && <Filter />}</ContactList>
      </Section>
    </div>
  );
}
