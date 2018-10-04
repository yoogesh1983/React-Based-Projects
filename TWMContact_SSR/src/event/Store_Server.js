import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducer';


export default (req) => {

    // Initial State Setting
    const initialState = { };

    //MiddleWare Setting
    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: { cookie: req.get('cookie') || '' }
      });
    const middleware = [thunk.withExtraArgument(axiosInstance)];


    //Store Creation
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
    
    return store;
};

