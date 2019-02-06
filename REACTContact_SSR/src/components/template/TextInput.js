import React, { Component } from 'react';
import { InputField } from '../../sharedComponents';

class TextInput extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const { input, type, meta: { touched : isFieldTouched, error, submitFailed} } = this.props;
    const hasError = isFieldTouched && error && submitFailed;
    const isCheckBoxField =  type === 'checkbox';
    const className = `${isCheckBoxField ? 'checkBoxContainer' : 'form-control form-control-lg'} ${hasError ? 'is-invalid' : ''}`;
    const invalidFeedBackClassName = hasError ? 'invalid-feedback' : '';

    const attrs = {
      ...this.props,
      hasError,
      isCheckBoxField,
      value: input.value, 
      className,
      invalidFeedBackClassName
    };
    
    return (
      <div className="form-group">
            <InputField {...attrs} />
      </div>
    );
  }
}

export default TextInput;

