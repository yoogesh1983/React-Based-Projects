import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signupAction } from '../../event/action/AuthAction'
import { renderField, validateForm } from '../template/Function_Common';

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
                   <Field type="email" name="email" placeholder="Enter email" autoComplete="none" component={renderField} />
                   <Field type="password" name="password" placeholder="Enter password" autoComplete="none" component={renderField} />
                   <input type="submit" value="Signup" className="btn btn-block btn-success" />
                  </form>
              </div>
            </div>
          );
    }
}


const mapStateTOProps = state => {
  return {
      errorMessage: state.twm_auth.errorMessage
  }
};

export default compose(
    connect(mapStateTOProps, {signupAction}),
    reduxForm({validate: validateForm, form: 'SignUpForm' })
)(withRouter(Signup))

