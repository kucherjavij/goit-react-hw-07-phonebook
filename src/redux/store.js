import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "../contacts/contacts-reducer"


const store = configureStore({
    reducer:
        {contacts: contactReducer} 
})

export default store;

