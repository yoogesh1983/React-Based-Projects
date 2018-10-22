import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signinAction } from '../../event/action/AuthAction';

class Signin extends Component {

    constructor(props){
        super(props);
    };

   onSubmit = (signinForm) => {
     this.props.signinAction(signinForm, () => this.props.history.push('/'));
   };

    render(){

        const { handleSubmit } = this.props;

        return (
            <div className="card mb-5">
              <div className="card-header">{this.props.errorMessage ? <span>{this.props.errorMessage.toUpperCase()}</span> : 'SIGN-IN'}</div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                   <Field type="email" name="email" placeholder="Enter email" autoComplete="none" component={this.renderField} />
                   <Field type="password" name="password" placeholder="Enter password" autoComplete="none" component={this.renderField} />
                   <input type="submit" value="Signin" className="btn btn-block btn-success" />
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

function validateSigninForm(signinForm) {
    const errors = {};
    const { email, password} = signinForm;
  
    if (!email) { 
      errors.email = "email is required"
    }
    if (!password) { 
        errors.password = "password is required"
      }

    return errors;
  }


  const mapStateTOProps = state => ({
        errorMessage: state.twm_auth.errorMessage
    });


export default compose(
    connect(mapStateTOProps, {signinAction}),
    reduxForm({validate: validateSigninForm, form: 'SignInForm' })
)(withRouter(Signin))






