import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducer';


// Initial State Setting
if (localStorage.getItem('settings') == null) {
    const defaultSettings = { disableBalanceOnAdd: true, disableBalanceOnEdit: false, allowRegistration: false };
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
  }
const initialState = window.INITIAL_STATE;
initialState.twm_setting = JSON.parse(localStorage.getItem('settings'));


//MiddleWare Setting
const axiosInstance = axios.create({
  baseURL: '/api'
});
const middleware = [thunk.withExtraArgument(axiosInstance)];


//Store Creation
const store = createStore(rootReducer, 
                           initialState, 
                           compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);


export default store;