import React from 'react';
import{ Helmet } from 'react-helmet';
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



const TextInputGroup_ref = (props) => {
  const {type, name, placeholder, defaultValue, reference, error} = props;
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



const MetaTag = (props) => {
  return (
      <Helmet>
          <title>{props.title}</title>
          <meta property='og:title' content={props.content} />
      </Helmet>
  );
};



const TableHeader = () => {
  return (
      <div>
        <table className="table table-sm table-hover table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
      </div>
    );
};


/*--------------------------------------------------------*/
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
/*--------------------------------------------------------*/


export {TextInputGroup};
export {TextInputGroup_ref};
export {MetaTag};
export {TableHeader};
