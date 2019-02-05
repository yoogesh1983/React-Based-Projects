import React from 'react';

//This method is used for Redux-form to insert input field. It is used at Signup form currently
export const renderField = (props) => {
  const error = props.meta.error;
  const isFieldTouched = props.meta.touched;
  const submitFailed = props.meta.submitFailed

  return (
    <div className="form-group">
        <input type={props.type}
               name={props.name}
               placeholder={props.placeholder}
               normalize={props.normalize}
               className= { `${props.type !== 'checkbox' ? 'form-control form-control-lg' : '' } ${ isFieldTouched && error && submitFailed ? 'is-invalid' : ''}` }
               autoComplete={props.placeholder}
               {...props.input} /> {props.type === 'checkbox' ? 'RememberMe' : ''}

        {isFieldTouched && error && submitFailed && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};


//This is actual validation for signInForm and signUpForm
export const validateForm = inputform => {
  const errors = {};
  const { email, password, phone} = inputform;
  const requiredFields = ['email', 'password', 'phone'];

   /* Check required fields */
   requiredFields.forEach(index => {
    if(!inputform[index]){
     errors[index] = 'This is a required field';
    }
   })

   /* Email-address Validation */
    if(email && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
      errors.email = 'Please enter a valid email address containing an "@" and "." symbol.';   
    }

  return errors;
};

export const OnlyNums = function OnlyNums(str) {
  return str.replace(/[^\d]/g, '');
};

//This method is used to modify the localStorage Setting
export const modifyLocalStorageSetting = (param, value, toggleable) => {
  const settings = JSON.parse(localStorage.getItem('settings'));

  if(toggleable){
    settings[param] = !settings[param];
  }
  else{
    settings[param] = value;
  }
  localStorage.setItem('settings', JSON.stringify(settings));
  return settings;
};