import React from "react";
import { connect } from "react-redux";
import { getFilter } from "../../redux/contacts/contactsSelectors";
import { changeFilter } from "../../redux/contacts/contactsActions";
import FilterStyled from "./FilterStyled";
import TextField from "@material-ui/core/TextField";

const Filter = ({ value, onChange }) => (
  <FilterStyled>
    <h2 className="title">Find contacts by name</h2>
    <form className="FormEditor">
      {/* <label>
        <input
          type="text"
          name="name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
          onChange={onChange}
          className="finde-input"
          autoComplete="off"
        />
      </label> */}
      <TextField
        id="filled-basic"
        label="Filter"
        variant="filled"
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
        required
        onChange={onChange}
        className="FormEditorInput"
        autoComplete="off"
      />
    </form>
  </FilterStyled>
);

const mapstateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(changeFilter(event.target.value)),
});

export default connect(mapstateToProps, mapDispatchToProps)(Filter);
