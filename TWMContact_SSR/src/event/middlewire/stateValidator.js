import tv4 from 'tv4';
import contactSchema from '../../components/contactManager/__fixtures__/allContactSchema';

export default ({ dispatch, getState }) => next => action => {

    //we want to run the validation after it goes to reducer. so we just call next(action)
    next(action);

    if(action.type === 'get_All_Contacts' && !tv4.validate(getState(), contactSchema)){
        console.warn("Invalid state schema detected");
    }
};
