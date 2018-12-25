import React, { Component } from 'react';
import _ from 'lodash'
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllContactAction } from '../../../event/action/ContactAction';

class TableData extends Component{

constructor(props){
    super(props);
}

componentDidMount(){
    this.props.getAllContactAction();
}

renderContactLists(contact) {
    return (<Contact key={contact.id} contact={contact} />); // renderContactLists = contact => <Contact key={contact.id} contact={contact} isUserLoggedIn={this.props.isUserLoggedIn} />;
  }
  

render(){
    const contactsObject = this.props.contacts;
    const contactsArray = _.map(contactsObject);

    const contactList = contactsArray.map(this.renderContactLists);
    //const contactList = contactsArray.map(contact => <Contact key={contact.id} contact={contact} />);  -- Or you can do like this
    
    return (<div>{contactList}</div>);
 }; 

} 

TableData.propTypes = {
    contacts: PropTypes.object.isRequired,
    getAllContactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.twm_contact.contacts,
    isUserLoggedIn: state.twm_auth.isAuthenticated
});


const loadData = (store) => {
    return store.dispatch(getAllContactAction('server'));
};
  

export {loadData};
export default connect(mapStateToProps, {getAllContactAction})(TableData);