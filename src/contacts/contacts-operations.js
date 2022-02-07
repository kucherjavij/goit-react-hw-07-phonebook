import axios from "axios"
import {
    addContactRequest, addContactSuccess, addContactRejected,
    deleteContactRequest, deleteContactSuccess, deleteContactRejected,
    fetchContactRequest, fetchContactSuccess, fetchContactRejected
} from "./contacts-actions";
axios.defaults.baseURL = 'https://6201629bfdf50900172499d7.mockapi.io/contacts';


const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios.get(`/contacts`)
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactRejected(error)))
}

const addContact = data => dispatch => {
    const contact = {
        name: data.name,
        number: data.phone
    }

    dispatch(addContactRequest())

    axios.post(`/contacts`, contact).then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactRejected(error)))
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest())
    
    axios.delete(`/contacts/${contactId}`).then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactRejected(error)))
};


export default { addContact, deleteContact, fetchContacts };