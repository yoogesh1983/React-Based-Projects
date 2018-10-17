import React from 'react';
import MetaTag from '../components/template/Meta';

const AboutPage =  (props) => {
  return (
    <div>
      <MetaTag title='ABOUT' content="about" />
      <h1 className="display-4">{props.match.params.id}</h1>
      <p className="lead">Simple App to manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};


export default{
  component: AboutPage
};


