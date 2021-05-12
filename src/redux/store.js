import { configureStore } from '@reduxjs/toolkit';

import {contactsReducer,filterReducer} from './reducer'

const store = configureStore({
  reducer: {
    contacts:contactsReducer,
    filter:filterReducer
  },
  devtools: process.env.NODE_ENV === "development"
})


export default store;