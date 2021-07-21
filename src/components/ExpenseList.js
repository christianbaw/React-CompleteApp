import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListitem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="container">
    <table className="table table-striped">
    <thead className="">
      <tr className="table-active">
        <th>Description</th>
        <th>Date Added</th>
        <th>Address</th>
        <th>View Data</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {
        props.expenses.length === 0 ? (
            <span>No expenses</span>
          
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
      }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

