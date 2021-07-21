import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashboardPage = () => (
    <div className="container col-sm-5">
    <hr className="col-sm-12"/>
        <ExpensesSummary/>
        <hr className="col-sm-12"/>
        <ExpenseListFilters/>
        <hr className="col-sm-12"/>
        <ExpenseList/>

    </div>
);

export default ExpenseDashboardPage;