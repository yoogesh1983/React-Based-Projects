const deleteContactReducer = (state, action) => {
    switch (action.type) {
      case 'DELETE_CONTACT':
           return {
               ...state,
               contacts: state.contacts.filter(contact => contact.id !== action.payload)
           };
       default:
            return state;
    }
   };

   export default deleteContactReducer;