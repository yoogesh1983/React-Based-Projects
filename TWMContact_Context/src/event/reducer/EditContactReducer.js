const editContactReducer = (state, action) => {
    switch (action.type) {
      case 'EDIT_CONTACT':
           return {
               ...state,
               contacts: state.contacts.map(contact => contact.id == action.payload.id ? (contact = action.payload) : contact)
           };
       default:
            return state;
    }
   };

   export default editContactReducer;