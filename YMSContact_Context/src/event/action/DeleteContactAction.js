import axios from 'axios';


const deleteContactAction = async (id, dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try
    {
        // we are not doing anything by response since it is returning empty object always, we don't even need to asign it to variable
        await axios.delete(url);
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
          });
    }
    catch(e)
    {
        //Since the database is not deleting our added contacts, we are forcefully deleting evenif we get denied response from ajax call
        console.log("deletion failed...!!However still deleting from store...")
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
          });

    }

 };

 export default deleteContactAction;