import React from 'react';
import Signup from '../components/authManager/Signup';
import {MetaTag} from '../components/template/Template_Common';


const SignupPage = () => {
  
  return (
    <React.Fragment>
      <MetaTag title='SIGNUP' content="signup" />
      <Signup />
    </React.Fragment>
  );
};

export default{
  component: SignupPage
};


