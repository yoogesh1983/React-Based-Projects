import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


//we are using de-structuring provided by es6 here. so instead of props.label, we are {doing} label so we can use label directly later
const TextInputGroup_ref = ({type, name, placeholder, defaultValue, reference, error}) => {
  return (
      <div className="form-group"> 
          <input type={type} 
                name={name} 
                className={classnames('form-control form-control-lg', {'is-invalid': error})}
                placeholder={placeholder}
                 //value={lastName}          -- instead of value, we use defaultValue
                 //onChange={this.onchange}  -- instead of onChange, we use ref
                 defaultValue={defaultValue} 
                 ref={reference}/>
      </div>
  );
};


TextInputGroup_ref.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  reference: PropTypes.object.isRequired
};

TextInputGroup_ref.defaultProps = {
  type: 'text'
};

export default TextInputGroup_ref;

