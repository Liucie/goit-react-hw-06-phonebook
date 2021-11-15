// import { types} from './contacts-types'
import { createAction } from '@reduxjs/toolkit'


const addContact = createAction('contacts/add');
// const addContact = (contact) => ({
//     type: types.ADD,
//     payload: contact,
// });
const deleteContact = createAction('contacts/delete');
// const deleteContact = (id) =>({
//     type: types.DELETE,
//     payload: id,
// });
const changeFilter = createAction('contacts/changeFilter');
// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// });
export default { addContact, deleteContact, changeFilter }
