import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducer';
import log from '../event/middlewire/log';
import stateValidator from '../event/middlewire/stateValidator';


// Initial State Setting
if (localStorage.getItem('settings') == null) {
  const defaultSettings = { disableBalanceOnAdd: true, disableBalanceOnEdit: false, allowRegistration: false, runningOnTestEnvironment: false, jwtToken:null };
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}
const initialState = window.INITIAL_STATE;
const initialSetting = JSON.parse(localStorage.getItem('settings'));
initialState.twm_setting = initialSetting;
if(initialSetting.jwtToken){
  initialState.twm_auth.authenticationToken = initialSetting.jwtToken;
  initialState.twm_auth.isAuthenticated = true;
}


//MiddleWare Setting
const axiosInstance = axios.create({
  baseURL: '/api'
});
const middleware = [thunk.withExtraArgument(axiosInstance), log, stateValidator];


//Store Creation
const store = createStore(rootReducer, 
                           initialState, 
                           compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);


export default store;