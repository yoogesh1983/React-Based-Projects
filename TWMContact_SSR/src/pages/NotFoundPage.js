import React from 'react';
import {MetaTag} from '../components/template/Template_Common';

const NotFoundPage =  ({ staticContext = {} }) => {
  
  staticContext.notFound = true;
  
  return (
    <div>
      <MetaTag title='NOT FOUND' content="404" />
      <h1 className="display-4"><span className="text-danger">404 Page Not Found</span></h1>
      <p className="lead">Sorry the page you requsted does not exist</p>
    </div>
  );
};

export default{
  component: NotFoundPage
};
