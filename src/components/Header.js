import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="p-2 bg-dark text-white">
    <div className="container col-sm-5">
     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <ul className="nav col-2 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <Link className="nav-link px-2 text-primary" to="/dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link className="nav-link px-2 text-secondary" to="/unmineabledashboard">
          <h1>Unmineable</h1>
        </Link>
        <Link className="nav-link px-2 text-secondary" to="/dashboard">
          <h1>Menu 3</h1>
        </Link>
      </ul>
        <button className="btn btn-primary" onClick={startLogout}>Logout</button>
      </div>
    </div>  
  </header>
  
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

