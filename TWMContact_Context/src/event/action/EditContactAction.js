import axios from 'axios';

const editContactAction = async (state, dispatch) => {
    const { id, name, phone, email } = state;
    
    const editedContact = {
        id,                    //id : id
        name,                  //name : name
        phone,                 // phone : phone
        email                  // email : email
    }

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.put(url, editedContact);

    dispatch({
        type: 'EDIT_CONTACT',
        payload: res.data
      });

 };

 export default editContactAction;