import {GET_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, ADD_CONTACT, GET_CONTACT, TOGGLE_LOGIN } from '../../event/Types';
import _ from 'lodash'

const initialState = {       
    contacts: {},          // contacts: [], 
    currentContact:{},
    dynamicId:{},
    isAuthenticated: true
};

export default function(state = initialState, action){
   
    switch(action.type)
    {
        case GET_CONTACTS: 
                return { 
                    ...state,        
                    contacts: _.mapKeys(action.payload, 'id'),      //contacts: action.payload, 
                    dynamicId: action.dynamicId
        };
        
        case GET_CONTACT:
        return {
            ...state,
            currentContact: action.payload
        };


        case ADD_CONTACT:
        return {
            ...state, 
            contacts: {...state.contacts, [action.payload.id]:action.payload}   //contacts: [action.payload, ...state.contacts] 
        };


        case DELETE_CONTACT:
                return {
                        ...state, 
                        contacts: _.omit(state.contacts, action.payload) // contacts: state.contacts.filter(contact => contact.id !== action.payload)  
        };    
        
        
        case EDIT_CONTACT:
           return {
               ...state,
              // contacts: state.contacts.map(contact => contact.id == action.payload.id ? (contact = action.payload) : contact) 
               contacts: {...state.contacts, [action.payload.id]:action.payload}
        };


        case TOGGLE_LOGIN:
        return {
          ...state,
          isAuthenticated: !state.isAuthenticated
        };

        default:
                return state;
    }
}