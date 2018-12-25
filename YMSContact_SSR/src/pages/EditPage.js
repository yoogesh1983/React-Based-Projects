import React from 'react';
import {MetaTag} from '../components/template/Template_Common';
import EditContact, {loadData as load} from '../components/contactManager/update/EditContact';

const EditPage = () => {
  return (
        <React.Fragment>
           <MetaTag title='EDIT' content="edit" />
           <EditContact />
        </React.Fragment>
  );
};

export default
{
  loadData: (store) => load(store),
  component: EditPage
};
