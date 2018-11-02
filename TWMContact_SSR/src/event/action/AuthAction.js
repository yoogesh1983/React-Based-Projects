import axios from 'axios';
import {modifyLocalStorageSetting} from '../../components/template/Function_Common';
import { AUTH_USER, AUTH_ERROR} from '../types';


export const signinAction = (signinForm, callback) => async dispatch =>{
    try {
            //const response = await axios.post(`${process.env.AUTH_API_URL}/signin`, signinForm);
            dispatch({
                type: AUTH_USER,
                payload: 'TestTokenByYoogesh',                         //response.data.token
                isAuthenticated: true
            });
            setAuthTokenToLocalStorage('TestTokenByYoogesh');         //response.data.token
            callback();
        }
    catch(error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Invalid login credentials'
            });
    }
}



export const signupAction = (signupForm, callback) => {

    return async function(dispatch){

    try
    {
        //const response = await axios.post(`${process.env.AUTH_API_URL}/signup`, signupForm);
        dispatch({
            type: AUTH_USER,
            payload: 'TestTokenByYoogesh',                          //response.data.token
            isAuthenticated: true
        });
        setAuthTokenToLocalStorage('TestTokenByYoogesh');          //response.data.token 
        callback();

    }
    catch(error){
        dispatch({
            type: AUTH_ERROR,
            payload: `Signup failed!! Reason: ${error}`
        });

    }
}
}


//You cannot dispatch more then one action from here since you are returning Object here (Unlike function above) 
export const signoutAction = () => {
        setAuthTokenToLocalStorage(null); 
        return ({ 
            type: AUTH_USER,
            payload: null,
            isAuthenticated: false
        });
}


const setAuthTokenToLocalStorage = tokenValue => modifyLocalStorageSetting('jwtToken', tokenValue, false);


