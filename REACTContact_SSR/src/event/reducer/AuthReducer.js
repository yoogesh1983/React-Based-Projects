import {AUTH_EVENT } from '../../event/Types';

const initialState = {       
    authenticationToken: null,
    isAuthenticated:false,
    errorMessage: null
};

export default function(state = initialState, action: AUTH_EVENT){
    
    switch (action.type){

            case 'auth_user':
                return {...state, authenticationToken: action.payload, isAuthenticated: action.isAuthenticated, errorMessage: null};

            case 'auth_error':
                return {...state, errorMessage: action.payload};
            
            default:
                return state;
    }
}   