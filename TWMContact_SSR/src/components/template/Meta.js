import React, { Component } from 'react';
import{ Helmet } from 'react-helmet';


const MetaTag = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta property='og:title' content={props.content} />
        </Helmet>
    );
};

export default MetaTag;