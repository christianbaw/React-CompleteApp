import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpExpensePage from '../components/HelpExpensePage';
import UnmineableDashboardPage from '../components/unmineable/UnmineableDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
     <div>
     
     
        <Switch>
         <PublicRoute path="/" component={LoginPage} exact={true}/>
         <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
         <PrivateRoute path="/create" component={AddExpensePage} />
         <PrivateRoute path="/edit/:id" component={EditExpensePage} />
         <PrivateRoute path="/view/:id" component={UnmineableDashboardPage} />
         <PrivateRoute path="/help" component={HelpExpensePage} />
         <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>

);


export default AppRouter;