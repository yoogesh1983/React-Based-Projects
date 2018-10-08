import axios from 'axios';
import uuid  from 'uuid';
import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, TOGGLE_LOGIN } from '../Types';
import userTestData from '../../components/contactManager/__fixtures__/userTestData.json'; 


export const getAllContactAction = () => async (dispatch, getState, api) => {

    try
    {
        const url = '/users';
        let res;

        if(JSON.parse(localStorage.getItem('settings')).runningOnProdEnvironment === true) {res = await api.get(url);}
        else {res = userTestData;}
        
        dispatch({
            type: GET_CONTACTS,
            payload: res.data,
            dynamicId:res.data[0].id
        });
    }
    catch(e)
    {
        console.log("Fetching contact failed...!!")
    }
 };

 


export const getContactAction = id => async (dispatch, getState, api) => {

    try
    {
        const url = `/users/${id}`;
        const res = await api.get(url);        

        dispatch({
            type: GET_CONTACT,
            payload: res.data
          });        
    }
    catch(e)
    {
        console.log("Fetching a particular contact failed...!!") 
    }

 };




 export const addContactAction = (contact) => async dispatch =>  {

    try
    {
        const { name, phone, email } = contact;
        const newContact = {
            id: uuid(),             //Generating random uuid
            name,                  //name : name
            phone,                 // phone : phone
            email                  // email : email
        }

        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await axios.post(url, newContact);
    
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
          });

    }
    catch(e)
    {
        console.log("Adding a contact failed...!!") 
    }

 };





 export const editContactAction = contact => async dispatch =>  {

    try
    {
        const { id, name, phone, email } = contact;
        const editedContact = {
            id,                    //id : id
            name,                  //name : name
            phone,                 // phone : phone
            email                  // email : email
        }
    
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        const res = await axios.put(url, editedContact);
    
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data
          });

    }
    catch(e)
    {
        console.log("Editing a contact failed...!!") 
    }

 };


 export const deleteContactAction = id => async dispatch =>  {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try
    {
        // we are not doing anything by response since it is returning empty object always, we don't even need to asign it to variable
        await axios.delete(url);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
          });
    }
    catch(e)
    {
        //Since the database is not deleting our added contacts, we are forcefully deleting evenif we get denied response from ajax call
        console.log("deletion failed...!!However still deleting from store...")
        dispatch({
            type: DELETE_CONTACT,
            payload: id
          });

    }
 };


 export const toggleLoginAction = () => {
    return {
      type: TOGGLE_LOGIN
    };
  };