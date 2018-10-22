import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

export default (ChildComponent) => {

    class RequireAuth extends Component{

        componentDidMount(){if(!this.props.isAuthenticated){this.props.history.push('/');}}
        componentDidUpdate(){if(!this.props.isAuthenticated){this.props.history.push('/');}}
          
        render()
        {
          switch(this.props.isAuthenticated){
              case false: return <Redirect to="/" />;
              case null: return <div>Loading...</div>;
              default: return <ChildComponent {...this.props} />;
          }
        }
        
    }

    const mapStateToProps = state => ({
        isAuthenticated: state.twm_auth.isAuthenticated
      });

    return connect(mapStateToProps)(withRouter(RequireAuth))      
};  