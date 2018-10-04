import React from 'react';
import{ Helmet } from 'react-helmet';


const header = () =>{
  return (
    <Helmet>
      <title>NOT FOUND</title>
      <meta property='og:title' content="404" />
    </Helmet>
  );
}


const NotFoundPage =  ({ staticContext = {} }) => {

  staticContext.notFound = true;
  
  return (
    <div>
      {header()}
      <h1 className="display-4"><span className="text-danger">404 Page Not Found</span></h1>
      <p className="lead">Sorry the page you requsted does not exist</p>
    </div>
  );
};

export default{
  component: NotFoundPage
};
