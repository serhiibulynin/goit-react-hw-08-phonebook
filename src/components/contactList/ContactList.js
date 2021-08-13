import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { connect } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import ContactListStyled from "./ContactListStyled";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ContactListStyled>
    {contacts.length > 0 && <h2 className="ContactsTitle">Contacts</h2>}
    <ul className="ContactList">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  </ContactListStyled>
);

const mapstateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
