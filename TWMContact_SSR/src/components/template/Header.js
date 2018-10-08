import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { toggleLoginAction } from '../../event/action/ContactAction';

class Header extends Component{

  constructor(props){
    super(props);
  }


  render(){
    const { branding, dynamicId, isUserLoggedIn} = this.props;
    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration } = this.props.settings;
    const { routes } = this.props.route;

    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={ this.props.toggleLoginAction.bind(this) }>
                    <i className={ `fas  ${ isUserLoggedIn ? 'fa-sign-out-alt' : 'fa-sign-in-alt' }` }
                    /> { isUserLoggedIn ? 'Sign-Out' : 'Sign-In' }
                </a>
              </li>
              

              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>

            {disableBalanceOnAdd && disableBalanceOnEdit && allowRegistration && 
              <li className="nav-item">
                <Link to={'/about/' + dynamicId} className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li> 
            }
              <li className="nav-item">
                <Link to="/contact/setting" className="nav-link">
                  <i className="fas fa-question" /> Setting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      { renderRoutes(routes)}
      </div>
    );
  }

}

Header.defaultProps = {
  branding: 'My App'
};


Header.propTypes = {
  branding: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  dynamicId: state.twm_contact.dynamicId,
  isUserLoggedIn: state.twm_contact.isAuthenticated,
  settings: state.twm_setting
});


export default{
  component: connect(mapStateToProps, { toggleLoginAction })(Header)
};