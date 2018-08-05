import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withRouter } from "react-router";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
// core components
import GridItem from "../../molecules/Grid/GridItem.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const fabStyle = {
  right: 20,
  bottom: 20,
  position: 'fixed',
  backgroundColor: '#00acc1',
  color: '#fff'
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
            <Link to="/create-event">
              <Button variant="fab" aria-label="Add" className={classes.button} style={fabStyle}>
                <AddIcon />
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(dashboardStyle)(Dashboard);
export default compose(
  withStyles(dashboardStyle),
  withRouter
)(Dashboard)
