import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };


    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="search addresses" value={this.props.filters.text} onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        
                        }}/>
                </div>
             </div>
             <div className="col-sm-2">
                    <select className="form-select" value={this.props.filters.sortBy}
                        onChange={(e) =>{
                        if(e.target.value == "date"){
                            this.props.dispatch(sortByDate());
                        }
                        else if(e.target.value == "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                    }}>
                        <option value="date">Date</option>
                        <option value="address">address</option>
                    </select>
            </div>
            <div className="col-sm-6">
                <div className="input-group mb-6">
                    <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />
                </div>
            </div>
            </div>
        </div>
        );
    }
    
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);