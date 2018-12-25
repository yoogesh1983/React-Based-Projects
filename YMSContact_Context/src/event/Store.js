import React, {Component} from 'react';
import axios from 'axios';
import deleteContactReducer from './reducer/DeleteContactReducer';
import addContactReducer from './reducer/AddContactReducer';
import editContactReducer from './reducer/EditContactReducer';

const Context = React.createContext();

export class Provider extends Component{

    constructor(props)
    {
        super(props);
        
        this.state = {
                       contacts: [],

                       dispatch: action => {
                           this.setState(state => deleteContactReducer(state, action)),
                           this.setState(state => addContactReducer(state, action)),
                           this.setState(state => editContactReducer(state, action))                        
                        }
        };
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        this.setState({
            contacts: res.data
        });
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;