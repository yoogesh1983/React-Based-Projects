import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signupAction } from '../../event/action/AuthAction'

class Signup extends Component {

    constructor(props){
        super(props);
    };

   onSubmit = (signupForm) => {
     this.props.signupAction(signupForm, () => this.props.history.push('/'));
   };

    render(){

        const { handleSubmit } = this.props;

        return (
            <div className="card mb-5">
              <div className="card-header">{this.props.errorMessage ? <span>{this.props.errorMessage.toUpperCase()}</span> : 'SIGN-UP'}</div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                   <Field type="email" name="email" placeholder="Enter email" autoComplete="none" component={this.renderField} />
                   <Field type="password" name="password" placeholder="Enter password" autoComplete="none" component={this.renderField} />
                   <input type="submit" value="Signup" className="btn btn-block btn-success" />
                  </form>
              </div>
            </div>
          );
    }

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
                     autoComplete={field.placeholder}
                     {...field.input} /> 
    
              {isFieldTouched && error && submitFailed && <div className="invalid-feedback">{error}</div>}
          </div>
        );
      }
}

function validateSignupForm(signupForm) {
    const errors = {};
    const { email, password} = signupForm;
  
    if (!email) { 
      errors.email = "email is required"
    }
    if (!password) { 
        errors.password = "password is required"
      }

    return errors;
  }

  const mapStateTOProps = state => {
    return {
        errorMessage: state.twm_auth.errorMessage
    }
};

export default compose(
    connect(mapStateTOProps, {signupAction}),
    reduxForm({validate: validateSignupForm, form: 'SignUpForm' })
)(withRouter(Signup))

