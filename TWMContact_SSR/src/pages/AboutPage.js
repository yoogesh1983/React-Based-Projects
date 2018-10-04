import React from 'react';
import{ Helmet } from 'react-helmet';


const header = () =>{
  return (
    <Helmet>
      <title>ABOUT</title>
      <meta property='og:title' content="about" />
    </Helmet>
  );
}

const AboutPage =  (props) => {
  return (
    <div>
      {header()}
      <h1 className="display-4">{props.match.params.id}</h1>
      <p className="lead">Simple App to manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};


export default{
  component: AboutPage
};


