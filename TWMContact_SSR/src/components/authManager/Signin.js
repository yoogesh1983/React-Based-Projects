import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signinAction } from '../../event/action/AuthAction';
import { renderField, validateForm } from '../template/Function_Common';

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
                   <Field type="email" name="email" placeholder="Enter email" autoComplete="none" component={renderField} />
                   <Field type="password" name="password" placeholder="Enter password" autoComplete="none" component={renderField} />
                   <input type="submit" value="Signin" className="btn btn-block btn-success" />
                  </form>
              </div>
            </div>
          );
    }
}


const mapStateTOProps = state => ({
        errorMessage: state.twm_auth.errorMessage
});

    
export default compose(
    connect(mapStateTOProps, {signinAction}),
    reduxForm({validate: validateForm, form: 'SignInForm' })
)(withRouter(Signin))






