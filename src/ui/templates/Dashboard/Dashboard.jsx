import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// @material-ui/icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../molecules/Grid/GridItem.jsx";
import Card from "../../molecules/Card/Card.jsx";

import addEvent from "assets/img/icons/add_event.png";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const fabStyle = {
  right: 20,
  bottom: 20,
  position: 'fixed',
  backgroundColor: '#00acc1',
  color: '#fff'
};

const cardStyle = {
  maxWidth: 80,
  height: 80,
  backgroundColor: '#fcb400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <div className={classes.typo}>
              <h3>WORKSPACE</h3>
            </div>
          </GridItem>

        </Grid>
        <Grid container>
          <GridItem xs={12} sm={3} md={3}>
            <Button variant="fab" aria-label="Add" className={classes.button} style={fabStyle}>
              <AddIcon />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={3} md={1}>
            <Card style={cardStyle}>
              <img src={addEvent} alt="add" style={{ width: '42px', height: '42px' }}/>
              <span>Add Event</span>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3} md={1}>
            <Card style={cardStyle}>
              <img src={addEvent} alt="add" style={{ width: '42px', height: '42px' }}/>
              <span>Add Event</span>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3 } md={1}>
            <Card style={cardStyle}>
              <img src={addEvent} alt="add" style={{ width: '42px', height: '42px' }}/>
              <span>Add Event</span>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
