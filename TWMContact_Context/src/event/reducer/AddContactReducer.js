const addContactReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
           return {
               ...state,
               contacts: [action.payload, ...state.contacts]
           };
       default:
            return state;
    }
   };

   export default addContactReducer;