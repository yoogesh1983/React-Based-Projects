import React, { Component } from 'react';
import { addContactAction } from '../../../event/action/ContactAction';
import {TextInputGroup} from '../../template/Template_Common';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';
import requireAuth from '../../higherOrder/requireAuth';

/*
  This is for controlled component where you are not using Props and each input is connected to a state instead
*/
class AddContact extends Component {

  constructor(props){
    super(props);
    this.state = {  id : '', 
                    name: '', 
                    phone: '', 
                    email: '', 
                    errors: {}
                 };
  };

  onchange = e => this.setState({[e.target.name]: e.target.value});

  onsubmit = (e) => {
    e.preventDefault();

    //check for errors
    const valid = this.validateContact();

    if (valid)
    {
      this.props.addContactAction(this.state);

     //remove value after submitting
     this.setState({ id:'', name:'',  phone:'',  email:'',  errors:{}});

     //Finally redirect to home page
     this.props.history.push('/');
    }
  };


  render()
  {
    const {name, phone, email, errors} = this.state;
    
    return (
    <div className="card mb-5">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this)}>
          <TextInputGroup name="name" placeholder="Enter name" value={name} onChange={this.onchange} error={errors.name} />
          <TextInputGroup name="phone" placeholder="Enter phone" value={phone} onChange={this.onchange} error={errors.phone} />
          <TextInputGroup type="email" name="email" placeholder="Enter email" value={email} onChange={this.onchange} error={errors.email}/>
          <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
        </form>
      </div>
    </div>
    );
  }


  validateContact() {
    const {name, phone, email } = this.state;

    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }
      });
      return false;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'phone is required' }
      });
      return false;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'email is required' }
      });
      return false;
    }
    return true;
  }

}

export default connect(null, {addContactAction})(withRouter(requireAuth(AddContact)));