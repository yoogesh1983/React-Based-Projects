import React from 'react';
import {MetaTag} from '../components/template/Template_Common';
import Setting from '../components/contactManager/setting/PersonalSetting';

const MySettingPage =  () => {
  return (
    <React.Fragment>
      <MetaTag title='SETTING' content="Setting" />
      <Setting />
    </React.Fragment>
  );
};

export default{
  component: MySettingPage
};
