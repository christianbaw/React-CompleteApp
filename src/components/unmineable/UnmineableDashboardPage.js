import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../../actions/expenses';
import UnmineableDashboardForm from './UnmineableDashboardForm';

export class UnmineableDashboardPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="container col-sm-6">
        <hr className="col-sm-12"/>
        <UnmineableDashboardForm
        expense={this.props.expense}/>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(UnmineableDashboardPage);
