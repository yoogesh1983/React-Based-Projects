import axios from 'axios';
import uuid  from 'uuid';
import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../action/Types';


export const getAllContactAction = () => async dispatch => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const promise = await axios.get(url);

    dispatch({
        type: GET_CONTACTS,
        payload: promise.data,
        dynamicId:promise.data[0].id
      });
 };

 


export const getContactAction = id => async dispatch => {

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.get(url);
     
    dispatch({
        type: GET_CONTACT,
        payload: res.data
      });
 };




 export const addContactAction = (contact) => async dispatch =>  {

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
 };





 export const editContactAction = contact => async dispatch =>  {

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
