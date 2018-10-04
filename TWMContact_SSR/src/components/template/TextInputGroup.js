import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


//we are using de-structuring provided by es6 here. so instead of props.label, we are {doing} label so we can use label directly later
const TextInputGroup = ({type, name, placeholder, value, onChange, error}) => {
  return (
      <div className="form-group"> 
          <input type={type} 
                 name={name} 
                 className="is-invalid form-control form-control-lg" 
                 className={classnames('form-control form-control-lg', {'is-invalid': error})}
                 placeholder={placeholder} 
                 value={value} 
                 onChange={onChange} />

          {error && <div className="invalid-feedback">{error}</div>}
      </div>
  );
};


TextInputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error:PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
