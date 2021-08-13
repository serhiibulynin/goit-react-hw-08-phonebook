import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContaсtList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";
import { fetchContacts } from "../../redux/contacts/contactsOperations";
import {
  getContacts,
  getLoading,
  getError,
} from "../../redux/contacts/contactsSelectors";
import ContactsPageStyled from "./ContactsPageStyled";

class ContactsPage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <ContactsPageStyled>
        <div className="ContactWrapper">
          <ContactForm />
          <Filter />
        </div>
        <ContaсtList />
      </ContactsPageStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  isLoadingContacts: getLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
