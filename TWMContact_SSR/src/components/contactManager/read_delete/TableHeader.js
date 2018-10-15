import React, { Component } from 'react';

const TableHeader = () => {
    
    return (
        <div>
          <table className="table table-sm table-hover table-striped">
              <thead>
                  <tr>
                      <th>{process.env.API_URL}</th>
                      <th>Phone</th>
                      <th>Email</th>
                  </tr>
              </thead>
          </table>
        </div>
      );
};

export default TableHeader;