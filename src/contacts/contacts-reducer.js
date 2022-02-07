import { combineReducers, createReducer } from "@reduxjs/toolkit"
import {
    addContactRequest, addContactSuccess, addContactRejected,
    changeFilter, deleteContactRequest, deleteContactSuccess, deleteContactRejected,
    fetchContactRequest, fetchContactSuccess, fetchContactRejected
} from "./contacts-actions"


const contactReducer = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload)
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactRejected]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactRejected]: () => false,
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactRejected]: () => false,
})

const filterReducer = createReducer('', {
[changeFilter]: (_, {payload}) => payload
})

        export default combineReducers({
            contactReducer,
            filterReducer,
            loading
        })
