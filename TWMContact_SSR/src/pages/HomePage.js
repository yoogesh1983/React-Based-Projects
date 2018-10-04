import React from 'react';
import TableData, {loadData as load} from '../components/contactManager/read_delete/TableData';
import TableHeader from '../components/contactManager/read_delete/TableHeader';
import{ Helmet } from 'react-helmet';

const header = () =>{
  const totaluser = '10';
  return (
    <Helmet>
      <title>{`${totaluser} USERS`}</title>
      <meta property='og:title' content="TWM USERS" />
    </Helmet>
  );
}


const Home = (props) => {
  return (
    <React.Fragment>
      {header()}
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


