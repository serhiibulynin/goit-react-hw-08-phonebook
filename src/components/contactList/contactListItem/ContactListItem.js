import React from "react";
import Button from "@material-ui/core/Button";

const ContactListItem = ({ contact, onRemoveContact }) => (
  <li className="ContactListItem">
    {contact.name + " : " + contact.number}
    {
      <Button
        className="ContactButton"
        type="button"
        name="delete"
        variant="contained"
        color="primary"
        onClick={() => onRemoveContact(contact.id)}
      >
        Delete contact
      </Button>
    }
  </li>
);

// ContactListItem.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default ContactListItem;
