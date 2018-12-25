import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';
import SettingsReducer from './SettingsReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    twm_contact: ContactReducer,
    twm_setting: SettingsReducer,
    twm_auth: AuthReducer,
    form: formReducer
});