import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'services/contactsApi';
import * as actions from './contactsActions';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const contacts = await fetchContacts();
    dispatch(actions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.getContactsError(error));
  }
};

export const addContact = contactId => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const contact = await fetchAddContact(contactId);
    dispatch(actions.addContactSuccess(contact));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await fetchDeleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
