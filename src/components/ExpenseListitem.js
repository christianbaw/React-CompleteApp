import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const ExpenseListItem = ({ id, description, unmineableaddress, createdAt }) => (
  // <div className="container-body">
  //   <div className="list-item" to={`/edit/${id}`}>
  //     <div>
  //       <h3 className="list-item__title">{description}</h3>
  //       <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
  //     </div>
  //     <h3 className="list-item__data">{unmineableaddress}</h3>
  //     <h3 className="list-item__data"><button className="button">View</button></h3>
  //     <h3 className="list-item__data"><button className="button">Edit</button></h3>
      
      
  //   </div>
  // </div>
  <tr className="table-active">
    <th>{description}</th>
    <th>{moment(createdAt).format('MMMM Do, YYYY')}</th>
    <th>{unmineableaddress}</th>
    <th><Link className="btn btn-primary" to={`/view/${id}`}>{'View Item'}</Link></th>
    <th><Link className="btn btn-secondary" to={`/edit/${id}`}>{'Edit Item'}</Link></th>
  </tr>
  
);

export default ExpenseListItem;
