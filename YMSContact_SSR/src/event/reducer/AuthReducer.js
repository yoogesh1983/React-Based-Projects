import {AUTH_USER, AUTH_ERROR } from '../../event/Types';

const initialState = {       
    authenticationToken: null,
    isAuthenticated:false,
    errorMessage: null
};

export default function(state = initialState, action){
    
    switch (action.type){

            case AUTH_USER:
                return {...state, authenticationToken: action.payload, isAuthenticated: action.isAuthenticated, errorMessage: null};

            case AUTH_ERROR:
                return {...state, errorMessage: action.payload};
            
            default:
                return state;
    }
}   