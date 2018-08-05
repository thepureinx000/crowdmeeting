import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from 'react-redux'
import Helmet from 'react-helmet'
import { configureStore } from "./store/store";

import App from "./features/Dashboard/dashboard";
// import Dashboard from "./features/Dashboard/dashboard";
import CreateEvent from "./features/CreateEvent/create-event";
import UserProfile from "./features/UserProfile/user-profile";
import DashboardPage from "./ui/templates/Dashboard/dashboard";

import "assets/css/material-dashboard-react.css?v=1.3.0";

const rootElement = document.getElementById('root')
const hist = createBrowserHistory();
const store = configureStore(window.initialStore || {})

ReactDOM.render(
    <ReduxProvider store={store}>
      <BrowserRouter history={hist}>
        <React.Fragment>
          <Helmet
            titleTemplate="%s • Crowdmeetings"
          />
        <App>
          <Switch>
            <Route path="/create-event" component={CreateEvent} />
            <Route path="/user" exact component={UserProfile} />
            <Route path="/dashboard" exact component={DashboardPage} />
          </Switch>
        </App>
        </React.Fragment>
      </BrowserRouter>
    </ReduxProvider>,

  rootElement
);
