import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';
import SettingsReducer from './SettingsReducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    twm_contact: ContactReducer,
    twm_setting: SettingsReducer,
    form: formReducer
});