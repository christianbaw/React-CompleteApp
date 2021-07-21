import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'address' : 'addresses' ;
  
  return (
    
    
      <div className="card">
        <h5 className="card-header">My saved crypto</h5>
        <div className="card-body">
          <h5 className="card-title">Viewing {expenseCount} {expenseWord}</h5>
          <p className="card-text">TESTHERE</p>
          <small><Link className="btn btn-primary" to="/create">Add Address</Link></small>
        </div>
      </div>
    
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
