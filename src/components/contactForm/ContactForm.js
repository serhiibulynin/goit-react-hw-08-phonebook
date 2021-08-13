import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import { addContact } from "../../redux/contacts/contactsOperations";

import ContactFormStyled from "./ContactFormStyled";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const contactIncludesName = contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(name.toLowerCase());
    if (contactIncludesName) {
      return alert(`${name} is already in contacts`);
    }
    console.log(`contacts`, name);
    this.props.onSubmit(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <ContactFormStyled>
        <h2 className="PhoneBookTitle">Phonebook</h2>
        <form className="FormEditor" onSubmit={this.handleSubmit}>
          {/* <label className="FormEditorLabel" htmlFor={this.nameInputId}>
            Name
            <input
              className="FormEditorInput"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChangeInput}
              id={this.nameInputId}
            />
          </label> */}
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            className="FormEditorInput"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChangeInput}
          />
          {/* <label className="FormEditorLabel" htmlFor={this.numberInputId}>
            Number
            <input
              className="FormEditorInput"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.handleChangeInput}
              id={this.numberInputId}
            />
          </label> */}
          <TextField
            id="filled-basic"
            label="Number"
            variant="filled"
            className="FormEditorInput"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChangeInput}
          />
          <Button variant="contained" color="primary" type="submit">
            Add contact
          </Button>
        </form>
      </ContactFormStyled>
    );
  }
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

const mapstateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactForm);
