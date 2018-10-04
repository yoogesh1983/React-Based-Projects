import {GET_CONTACTS, DELETE_CONTACT, EDIT_CONTACT, ADD_CONTACT, GET_CONTACT } from '../Types';

const initialState = {
    contacts: [],
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
                    contacts: action.payload,
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
            contacts: [action.payload, ...state.contacts]
    };


        case DELETE_CONTACT:
                return {
                        ...state,
                        contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };    
        
        
        case EDIT_CONTACT:
           return {
               ...state,
               contacts: state.contacts.map(contact => contact.id == action.payload.id ? (contact = action.payload) : contact)
        };

        default:
                return state;
    }
}