import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchGetContactsThunk, selectContactsItems, selectWordForFilter} from "redux/contactListReduser";


const ContactList = () => {
  const contacts = useSelector(selectContactsItems);
  const wordForFilter = useSelector(selectWordForFilter)

const dispatch=useDispatch()
useEffect(() => { 
  dispatch(fetchGetContactsThunk());
}, [dispatch]);
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(wordForFilter.toLowerCase())
  )??[];
  // const handleDelete = contactId => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  //   dispatch(setContacts(updatedContacts));
  // };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
