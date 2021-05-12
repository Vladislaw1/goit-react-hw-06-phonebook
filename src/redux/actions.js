import {createAction} from '@reduxjs/toolkit'

export const addContact = createAction("phonebook/addContact")
export const deleteContact = createAction("phonebook/deleteContact")
export const filterContact = createAction("phonebook/filterContact")

// export const addConact = (state) => ({
//   type: ADD_CONTACT,
//   payload: state
// });
//
// export const deleteConact = (index) => ({
//   type: DELETE_CONTACT,
//   payload: index,
// });
//
// export const filter = (word) => ({
//   type: FILTER,
//   payload: word,
// });
