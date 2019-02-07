import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signinAction } from '../../event/action/AuthAction';
import { validateForm, OnlyNums } from '../template/Function_Common';
import TextInput from '../template/TextInput';

class Signin extends Component {

    constructor(props){
        super(props);
    };

    componentDidMount() {
        this.handleInitialize();
        const updatedFormObj = { 
            email: 'yoogesh2002@yahoo.com',
            password: 'updatedPassword',
            phone:'7137322412'
        }
        this.updateFormValue(updatedFormObj)
    }
      
    handleInitialize() {
        const { signInForm } = this.props;
        signInForm.email = 'syoogesh@gmail.com';
        signInForm.password = 'initialPassword';
        signInForm.phone = '8327628913';
        this.props.initialize(this.initializeData(signInForm));
   } 

   initializeData(signInForm) {
       if (!signInForm) return {};
       
       const obj = {
           email: signInForm.email,
           password: signInForm.password,
        };
        return obj;
    }
    
    updateFormValue(formObj) {
        Object.keys(formObj).forEach(index => this.updateFormField(index, formObj[index]));
    }

    updateFormField(formValueName, value = '') {
        this.props.change(formValueName, value);
    }

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
                   <Field type="email" name="email" placeholder="Enter email" autoComplete="none" component={TextInput} />
                   <Field type="tel" name="phone" placeholder="Enter Phone" autoComplete="none" normalize={OnlyNums} component={TextInput} />
                   <Field type="password" name="password" placeholder="Enter password" autoComplete="none" component={TextInput} />
                   <Field type="checkbox" name="rememberMe" placeholder="Remember Me" autoComplete="none" component={TextInput} />

                   <input type="submit" value="Signin" className="btn btn-block btn-success" />
                  </form>
              </div>
            </div>
          );
    }
}

const mapStateToProps = state => {
    const { signIn: { values = {}, syncErrors = {} } = {} } = state.form;
    const {errorMessage } = state.twm_auth;
    return {
        signInForm: values,
        errorMessage,
        formErrors: syncErrors,
    };
  };

    
export default compose(
    connect(mapStateToProps, {signinAction}),
    reduxForm({validate: validateForm, form: 'signIn' })
)(withRouter(Signin))
