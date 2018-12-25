import axios from 'axios';
import uuid  from 'uuid';

const addContactAction = async (state, dispatch) => {
    const { name, phone, email } = state;
    
    const newContact = {
        id: uuid(),             //Generating random uuid
        name,                  //name : name
        phone,                 // phone : phone
        email                  // email : email
    }

    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await axios.post(url, newContact);

    dispatch({
        type: 'ADD_CONTACT',
        payload: res.data
      });

 };

 export default addContactAction;