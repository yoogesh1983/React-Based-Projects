import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteContactAction } from '../../../event/action/ContactAction';
import { connect } from 'react-redux';

class Contact extends Component{

    constructor(props){
        super(props);
    }
    
    deleteContact = id => {
        this.props.deleteContactAction(id);
    }


    render() {
        const { id, name, phone, email } = this.props.contact;
           return (
                    <table className="table table-sm table-hover table-striped">
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}
                                    <i className="fas fa-times" 
                                        style={{curser: 'pointer', float: 'right', color: 'red'}}
                                        onClick={this.deleteContact.bind(this, id)} />
                                       

                                    <Link to={`/contact/edit/${id}`}>
                                        <i className="fas fa-pencil-alt" 
                                            style={{ curser:'pointer', float: 'right', color:'black', marginRight:'1rem'}} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
}

}

/* Since we not mapping anything to props, we don't need this

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
});

*/


export default connect(null, {deleteContactAction})(Contact);