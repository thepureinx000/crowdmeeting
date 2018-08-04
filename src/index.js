import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Provider as ReduxProvider } from 'react-redux'
import Helmet from 'react-helmet'
import { configureStore } from "./store/store";

import "assets/css/material-dashboard-react.css?v=1.3.0";

import indexRoutes from "routes";

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
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </ReduxProvider>,

  rootElement
);
