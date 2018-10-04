import React from 'react';
import{ Helmet } from 'react-helmet';
import Setting from '../components/contactManager/setting/PersonalSetting';

const header = () =>{
  return (
    <Helmet>
      <title>SETTING</title>
      <meta property='og:title' content="Setting" />
    </Helmet>
  );
}


const MySettingPage =  () => {
  return (
    <React.Fragment>
      {header()}
      <Setting />
    </React.Fragment>
  );
};

export default{
  component: MySettingPage
};
