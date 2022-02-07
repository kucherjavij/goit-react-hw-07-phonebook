import axios from "axios"

axios.defaults.baseURL = 'https://6201629bfdf50900172499d7.mockapi.io/contacts'

const fetchContacts = () => {
     return axios.get(`/contacts`)
        .then(response => response.data)
}

const addContacts = (contact) => {
     return axios.post(`/contacts`, contact)
        .then(response => response.data)
}

const deleteContacts = (contactId) => {
     return axios.post(`/contacts?${contactId}`)
        .then(response => response.data)
}
export default {fetchContacts,addContacts,deleteContacts}