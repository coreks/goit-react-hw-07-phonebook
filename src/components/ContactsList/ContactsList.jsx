import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactsItem from './ContactItem/ContactItem';
import { operations, selectors } from 'redux/contacts';

import s from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getIsLoading);

  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>LOADING...</div>}
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
