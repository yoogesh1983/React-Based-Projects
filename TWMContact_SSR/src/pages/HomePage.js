import React from 'react';
import TableData, {loadData as load} from '../components/contactManager/read_delete/TableData';
import {TableHeader, MetaTag} from '../components/template/Template_Common';


const Home = () => {
  const totaluser = '10';
  return (
    <React.Fragment>
      <MetaTag title={`${totaluser} USERS`} content="TWM USERS" />
      <TableHeader />
      <TableData />
    </React.Fragment>
  );
};

const loadData = (store) => load(store);

export default
{
  loadData,                 //loadData:loadData 
  component: Home
};


