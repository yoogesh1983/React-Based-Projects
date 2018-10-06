import React, { Component } from 'react';
import {Consumer} from '../../../event/Store';
import deleteContactAction from '../../../event/action/DeleteContactAction';
import { Link } from 'react-router-dom';

class Contact extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
          return (
            <React.Fragment>
                <Consumer>
                    {value => {
                        const {dispatch} = value;
                        return this.renderContacts(dispatch);
                    }}
                 </Consumer>
            </React.Fragment>
        
            );
    }
    

    renderContacts (dispatch) {
        const { id, name, phone, email } = this.props.contact;

        return (<table className="table table-sm table-hover table-striped">
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}
                        <i className="fas fa-times" 
                            style={{curser: 'pointer', float: 'right', color: 'red'}} 
                            onClick={deleteContactAction.bind(this, id, dispatch)} />

                        <Link to={`contact/edit/${id}`}>
                            <i className="fas fa-pencil-alt" 
                                style={{ curser:'pointer', float: 'right', color:'black', marginRight:'1rem'}} />
                        </Link>
                        
                    </td>
                </tr>
            </tbody>
        </table>);
    }
}

export default Contact;