import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  changeFilter,
} from "./contactsActions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const setError = (_, { payload }) => payload;
const refreshError = () => null;

const error = createReducer(null, {
  [fetchContactsRequest]: refreshError,
  [fetchContactsError]: setError,
  [addContactRequest]: refreshError,
  [addContactError]: setError,
  [deleteContactRequest]: refreshError,
  [deleteContactError]: setError,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
