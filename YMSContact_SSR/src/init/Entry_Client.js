//Startup point for the client side application 
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import Route from './Route';
import { BrowserRouter } from 'react-router-dom';
import store from '../event/Store_Client';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.hydrate(<Provider store={store}>
                      <BrowserRouter>
                           <div>{renderRoutes(Route)}</div>
                      </BrowserRouter>
                  </Provider>, document.querySelector('#root'));