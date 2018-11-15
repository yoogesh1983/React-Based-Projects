import React from 'react';


//This method is used for form to insert input field
export const renderField = (field) => {
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
};


//This is actual validation for signInForm and signUpForm
export const validateForm = (inputform) => {
  const errors = {};
  const { email, password} = inputform;
  const requiredFields = ['email', 'password'];

   /* Check required fields */
   checkRequiredFields(requiredFields, inputform, errors);

   /* Email-address Validation */
    if(email){
        const emailErrorMsg = validateEmailAddress(email);
        if(emailErrorMsg){
            errors.email = emailErrorMsg;
        }
    }
  return errors;
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


//This method is required while validating form fields
const checkRequiredFields = (arr, values, errors) => {
  arr.forEach(f => {
    const reqMsg = required(values[f]);
    if (reqMsg) {
      errors[f] = reqMsg;
    }
  });
}

const required = (val) => {
  if (!val) return 'This is a required field';
  return undefined;
}


//This method is used to validate email address field
const validateEmailAddress = (email) => {
  const valid = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
  return !valid ? 'Please enter a valid email address containing an "@" and "." symbol.' : '';
}