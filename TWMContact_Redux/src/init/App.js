import React, { Component } from 'react';
import { BrowserRouter as TWMRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/template/Header';
import {Provider} from 'react-redux';
import store from '../event/Store';
import Home from '../pages/Home';
import About from '../pages/About';
import Add from '../pages/Add';
import MySetting from '../pages/MySetting';
import Edit from '../pages/Edit';
import NotFound from '../pages/NotFound';

class App extends Component {
    
    render(){
        return(
                <Provider store={store}>
                    <TWMRouter>
                        <div>
                            <Header branding="Contact Manager" />
                            
                            <div className="container">
                               <Switch>
                                   <Route exact path="/" component={Home} />
                                   <Route  path="/contact/setting" component={MySetting} />
                                   <Route  path="/contact/add" component={Add} />
                                   <Route  path="/about/:id" component={About} />
                                   <Route  path="/contact/edit/:id" component={Edit} />
                                   <Route  component={NotFound} />
                               </Switch>
                            </div>
                        </div>
                    </TWMRouter>
                </Provider>
        );
    }
}
export default App;