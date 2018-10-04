import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
    twm_contact: ContactReducer,
    twm_setting: SettingsReducer
});