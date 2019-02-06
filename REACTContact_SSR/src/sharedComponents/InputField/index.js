import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Styles from './styles.js';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { input, type, name, placeholder, normalize, meta: { error } } = this.props;
    const { hasError, isCheckBoxField, className : classNameProvidedByUser, classes, invalidFeedBackClassName } = this.props;
    const classNameAddedBySystem = classes.checkBoxContainer;

    return (
      <React.Fragment>
          <input type={type}
                 name={name}
                 placeholder={placeholder}
                 className= {classNameProvidedByUser}
                 normalize={normalize}
                 autoComplete={placeholder}
                 {...input} /> {isCheckBoxField && <span className={classNameAddedBySystem}>RememberMe</span>}
                 
        {hasError && <div className={invalidFeedBackClassName}>{error}</div>}
      </React.Fragment>
    );
  }
}

export default injectSheet(Styles)(InputField);
