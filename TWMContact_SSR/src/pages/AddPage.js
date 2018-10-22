import React from 'react'
import {MetaTag} from '../components/template/Template_Common';
//import AddContact from '../components/contactManager/insert/AddContact';
import AddContact from '../components/contactManager/insert/AddContact_ref';


const AddPage =  () => {
  return (
      <React.Fragment>
       <MetaTag title='ADD' content="add" />
       <AddContact />
      </React.Fragment>
  );
};

export default{
  component: AddPage
};
