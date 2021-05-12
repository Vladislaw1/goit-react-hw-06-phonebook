import { addContact, deleteContact, filterContact } from './actions';

import { createReducer } from '@reduxjs/toolkit';

export const contactsReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => {
      const newList = [...state];
      newList.splice(action.payload, 1);
      return newList;
    },
  },
);
//   (state = [],{type,payload}) => {
//   switch (type) {
//
//     case ADD_CONTACT:
//       return [...state, payload]
//
//     case DELETE_CONTACT:
//       const newList = [...state]
//       newList.splice(payload, 1)
//       return  newList
//
//     default:
//       return state
//   }
// }

export const filterReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload
})

//   (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//
//     default:
//       return state;
//   }
// };

