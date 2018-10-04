import React from 'react';
import{ Helmet } from 'react-helmet';
import EditContact, {loadData as load} from '../components/contactManager/update/EditContact';


const header = () =>{
  return (
    <Helmet>
      <title>EDIT</title>
      <meta property='og:title' content="edit" />
    </Helmet>
  );
}


const EditPage = () => {
  return (
        <React.Fragment>
           {header()}
           <EditContact />
        </React.Fragment>
  );
};

export default
{
  loadData: (store) => load(store),
  component: EditPage
};
