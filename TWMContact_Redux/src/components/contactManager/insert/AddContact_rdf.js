import React, { Component } from 'react';
import { addContactAction } from '../../../event/action/ContactAction';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

/*
  This is for Redux form handled by Redux-form library
*/
class AddContact extends Component {

  constructor(props){
    super(props);
  };


  onsubmit = (contact) => {
     this.props.addContactAction(contact);

    //Finally redirect to home page
    this.props.history.push('/');
  };



  renderField(field){
    const error = field.meta.error;
    const isFieldTouched = field.meta.touched;
    const submitFailed = field.meta.submitFailed

    return (
      <div className="form-group">
          <input type={field.type}
                 name={field.name}
                 placeholder={field.placeholder}
                 className= { `form-control form-control-lg ${ isFieldTouched && error && submitFailed ? 'is-invalid' : ''}` }
                // className={classnames('form-control form-control-lg', {'is-invalid': isFieldTouched && error})}
                 {...field.input} /> 

          {isFieldTouched && error && submitFailed && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }


  render()
  {
      const { handleSubmit } = this.props;

    return (
      <div className="card mb-5">
        <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={handleSubmit(this.onsubmit.bind(this))}>
              <Field type="text" name="name"  placeholder="Enter name"  component={this.renderField} />
              <Field type="text" name="phone" placeholder="Enter phone"  component={this.renderField} />
              <Field type="email" name="email" placeholder="Enter email"  component={this.renderField} />
              <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
            </form>
        </div>
      </div>
    );
  }

}

function validateContact(contact) {
  const errors = {};
  const { name, phone, email} = contact;

  if (!name) { 
    errors.name = "name is required"
  }
  if (!phone) { 
    errors.phone = "phone is required"
  }
  if (!email) { 
    errors.email = "email is required"
  }

  return errors;
}


export default reduxForm({validate: validateContact, form: 'AddContactForm'})
(
  connect(null, {addContactAction})(withRouter(AddContact))
);