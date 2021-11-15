import { combineReducers } from "redux";
// import {types} from './contacts-types';
import actions from './contacts-actions'
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
        items: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
        filter: ''
    },
}
const items = createReducer(initialState.contacts.items,{
    [actions.addContact]: (state, {payload}) => {
        if(
            state.some(item=>item.name.includes(payload.name))){
                return alert(`${payload.name} is already in contacts`)
            }
        
    return [...state, payload]
    } ,
    [actions.deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload),
})
// const items = (state = initialState.contacts.items, {type, payload}) =>{
//     switch(type){
//         case types.ADD :
//             return [...state, payload];
//         case types.DELETE:
//             return state.filter(({id}) => id !== payload);

//         default:
//             return state;
//     }
// }
const filter = createReducer(initialState.contacts.filter,{
    [actions.changeFilter]:( _, {payload}) => payload,
}
)
// const filter = (state = initialState.contacts.filter, {type, payload}) => {
//     switch(type){
//         case types.CHANGE_FILTER:
//            return payload;
//         default:  
//            return state;
//     }
   
// }

export default combineReducers({
    items,
    filter,
})