import React, { Component } from 'react';
import {Consumer} from '../../../event/Store';
import Contact from './Contact';

const TableData = () => {
    return (
        <React.Fragment>
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return(
                            <div>
                            {
                              contacts.map(contact => (<Contact key={contact.id} contact={contact} />))
                            }
                            </div>
                       );
                }}
             </Consumer>
        </React.Fragment>
    
        );
  };
  
export default TableData;