import React from 'react'
import MetaTag from '../components/template/Meta';
//import AddContact from '../components/contactManager/insert/AddContact';
//import AddContact from '../components/contactManager/insert/AddContact_ref';
import AddContact from '../components/contactManager/insert/AddContact_rdf';


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
