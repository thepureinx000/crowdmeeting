/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { compose } from "recompose";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import FirstStep from "../../ui/templates/CreateEvent/first-step";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import FormStateFromRedux from "./Form/formStateFromRedux";
import FormStateToRedux from "./Form/formStateToRedux";

class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <FirstStep get={<FormStateFromRedux />} to={<FormStateToRedux />} />
      </div>
    );
  }
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(dashboardStyle),
  withRouter
)(CreateEvent);
