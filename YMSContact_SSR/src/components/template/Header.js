import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { signoutAction } from '../../event/action/AuthAction';

class Header extends Component{

  constructor(props){
    super(props);
  }


  renderLinks(){
    const { dynamicId, isUserLoggedIn } = this.props;
    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration } = this.props.settings;

    if(!isUserLoggedIn){
        return(
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                  <i className="fas fa-sign-in-alt" /> Sign-In
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                  <i className="fas fa-plus" /> Sign-Up
              </Link>
            </li>
          </ul>
        </div>
        );
    }
    else{
      return(
          <div>
            <ul className="navbar-nav mr-auto">
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
              </li>}

              <li className="nav-item">
                <Link to="/contact/setting" className="nav-link">
                  <i className="fas fa-question" /> Setting
                </Link>
              </li>

              <a href="#" className="nav-link" onClick={ this.props.signoutAction.bind(this) }>
                <i className="fas  fa-sign-out-alt" /> Sign-Out
              </a>
            </ul>
          </div>
          );
    }
}


  render(){
    const { branding } = this.props;
    const { routes } = this.props.route;

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand"> <i className="fas fa-home" /> {branding}</a>
            {this.renderLinks()}
          </div>
        </nav>
        { renderRoutes(routes)}
      </div>
    );
  }

}

Header.defaultProps = {
  branding: 'Home'
};


Header.propTypes = {
  branding: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  dynamicId: state.twm_contact.dynamicId,
  isUserLoggedIn: state.twm_auth.isAuthenticated,
  settings: state.twm_setting
});


export default{
  component: connect(mapStateToProps, { signoutAction })(Header)
};