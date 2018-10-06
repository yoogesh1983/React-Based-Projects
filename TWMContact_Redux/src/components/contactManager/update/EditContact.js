import React, { Component } from 'react';
import { getContactAction, editContactAction }  from '../../../event/action/ContactAction';
import TextInputGroup from '../../template/TextInputGroup';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';

class EditContact extends Component {

  constructor(props){
    super(props);
    this.state = {  id : '', 
                    name: '', 
                    phone: '', 
                    email: '', 
                    errors: {}
                 };
  };

  componentDidMount(){ 
      const { id } = this.props.match.params;
      const { getContactAction } = this.props;
      getContactAction(id);
  };

  componentWillReceiveProps(nextProps, nextState){
    const {id, name, phone, email } = nextProps.currentContact;
    this.setState({
         id,
         name,
         phone,
         email
    });
  }


  onchange = e => this.setState({[e.target.name]: e.target.value});

  onsubmit = (e) => {
    e.preventDefault();

    //check for errors
    const valid = this.validateContact();

    if (valid)
    {
      this.props.editContactAction(this.state);

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
      <div className="card-header">Edit Id: [{this.props.match.params.id}]</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this)}>
          <TextInputGroup name="name" placeholder="Enter name" value={name} onChange={this.onchange} error={errors.name} />
          <TextInputGroup name="phone" placeholder="Enter phone" value={phone} onChange={this.onchange} error={errors.phone} />
          <TextInputGroup type="email" name="email" placeholder="Enter email" value={email} onChange={this.onchange} error={errors.email}/>
          <input type="submit" value="Update Contact" className="btn btn-block btn-success" />
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

const mapStateToProps = state => ({
  currentContact: state.twm_contact.currentContact
});

export default connect(mapStateToProps, 
                        { editContactAction, 
                          getContactAction
                        }
                      )(withRouter(EditContact));