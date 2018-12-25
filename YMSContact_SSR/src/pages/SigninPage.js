import React from 'react';
import Signin from '../components/authManager/Signin';
import {MetaTag} from '../components/template/Template_Common';


const SigninPage = () => {
  
  return (
    <React.Fragment>
      <MetaTag title='SIGN-IN' content="sign-in" />
      <Signin />
    </React.Fragment>
  );
};

export default{
  component: SigninPage
};


