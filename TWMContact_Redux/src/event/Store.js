import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import ReduxPromise from 'redux-promise';


// Check for settings in localStorage
if (localStorage.getItem('settings') == null) 
{
    // Default settings
    const defaultSettings = {
      disableBalanceOnAdd: true,
      disableBalanceOnEdit: false,
      allowRegistration: false
    };
  
    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
  }

const initialState = { twm_setting: JSON.parse(localStorage.getItem('settings')) };
const middleware = [thunk, ReduxPromise];

const store = createStore(rootReducer, 
                           initialState, 
                           compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);


export default store;