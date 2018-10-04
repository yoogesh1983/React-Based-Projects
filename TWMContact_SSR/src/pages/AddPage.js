import React from 'react'
import{ Helmet } from 'react-helmet';
//import AddContact from '../components/contactManager/insert/AddContact';
import AddContact from '../components/contactManager/insert/AddContact_ref';


const header = () =>{
  return (
    <Helmet>
      <title>ADD</title>
      <meta property='og:title' content="add" />
    </Helmet>
  );
}

const AddPage =  () => {
  return (
      <React.Fragment>
       {header()}
       <AddContact />
      </React.Fragment>
  );
};

export default{
  component: AddPage
};
