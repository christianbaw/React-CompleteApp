import React, { useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { thisStringValue } from 'es-abstract';
import 'babel-polyfill';


export default class UnmineableDashboardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      unmineableaddress: props.expense ? props.expense.unmineableaddress : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      data: '',
      paymentsData: '',
      loadingMining: true,
      loadingPayments: true
    };

    
    
  }

  async componentWillMount() {
     const response = await axios.get(`https://api.unminable.com/v4/address/${this.state.unmineableaddress}?coin=DOGE`)
    //  .then(response => this.setState(() => ({ loadingMining: false, data: response.data.data })))
     //  .then(axios.get(`https://api.unminable.com/v4/account/${this.state.data.uuid}/payments?page=1`)
     //  .then(response => this.setState(() => ({ loadingPayments: false, paymentsData: response.data.data.list[0] })))
     //    .catch(function (error){
     //    console.log('error on promise' + error);
     //  }))
      .catch(function (error){
         console.log('error on promise' + error);
     });
     this.setState(() => ({ loadingMining: false, data: response.data.data }));

     const response2 = await axios.get(`https://api.unminable.com/v4/account/${this.state.data.uuid}/payments?page=1`)
     this.setState(() => ({ loadingPayments: false, paymentsData: response2.data.data.list }));

     console.log(this.state.paymentsData);
  };




  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onUnmineableAddressChange = (e) => {
    const unmineableaddress = e.target.value;
    this.setState(() => ({ unmineableaddress }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
 
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.unmineableaddress) {
      this.setState(() => ({ error: 'Please provide description and unmineable address.' }));
    } else {
      this.setState(() => ({ error: '' }));
      
      this.props.onSubmit({
        description: this.state.description,
        unmineableaddress: this.state.unmineableaddress,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    const {data, loadingMining, loadingPayments} = this.state;


    return (
    <div className="card col-sm-12">
        <h5 className="card-header">Viewing details - {this.state.unmineableaddress} </h5>
        <div className="card-body">
        <div className="container row">
        { loadingMining ? 
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            :
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item"><span className="badge bg-info text-dark big-font">Your total balance is: {this.state.data.balance}</span></li>
                  <li className="list-group-item"><span className="badge bg-info text-dark big-font">Min amount to be paid: {this.state.data.payment_threshold}</span></li>
                  <li className="list-group-item">
                  <div>
                  <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">{ this.state.data.auto & this.state.data.enabled ? ' Auto payment is enabled' : ' Autopayment is not enabled' }</label>
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled/>
                  </div>
                  </li>
                </ul>
            </div>
            
        }
        {
          loadingPayments ? 
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          <div className="col-sm-6">
            <table className="table table-striped">
              <thead className="">
                <tr className="table-active">
                  <th>Amount paid</th>
                  <th>Date paid</th>
                  <th>Payment status</th>
                </tr>
                <tr className="table-active">
                  <th>{this.state.paymentsData[0].amount }</th>
                  <th>{moment(this.state.paymentsData[0].timestamp).format('MMMM Do, YYYY')}</th>
                  <th>{this.state.paymentsData[0].status == 'success' ? <button className="btn btn-success">PAID</button> : <button className="btn btn-danger">NOT PAID</button> }</th>
                </tr>
                <tr className="table-active">
                  <th>{this.state.paymentsData[1].amount }</th>
                  <th>{moment(this.state.paymentsData[1].timestamp).format('MMMM Do, YYYY')}</th>
                  <th>{this.state.paymentsData[1].status == 'success' ? <button className="btn btn-success">PAID</button> : <button className="btn btn-danger">NOT PAID</button> }</th>
                </tr>

            </thead>
          </table>
          </div>
        }
        </div>
      </div>
    </div>
    
    )
  }
}
