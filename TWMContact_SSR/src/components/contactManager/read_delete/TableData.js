import React, { Component } from 'react';
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


render(){
    const {contacts} = this.props; 
    return (<div>{contacts.map(contact => (<Contact key={contact.id} contact={contact} />))}</div>);
 }; 

} 

TableData.propTypes = {
    contacts: PropTypes.array.isRequired,
    getAllContactAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.twm_contact.contacts
});


const loadData = (store) => {
    return store.dispatch(getAllContactAction());
};
  

export {loadData};
export default connect(mapStateToProps, {getAllContactAction})(TableData);