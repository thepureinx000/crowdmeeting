import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from "react-final-form";
import { compose } from "recompose";
// core libraries
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../molecules/Grid/GridItem.jsx";
import CustomInput from "../../atoms/CustomInput/CustomInput.jsx";
import Button from "../../atoms/CustomButtons/Button.jsx";
import Card from "../../molecules/Card/Card.jsx";
import CardHeader from "../../molecules/Card/CardHeader.jsx";
import CardBody from "../../molecules/Card/CardBody.jsx";
import CardFooter from "../../molecules/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const required = value => (value ? undefined : "Required");

const onSubmit = (values) => {
  console.log('first-step: ', values);
}

const FirstStep = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Creating an Event</h4>
              <p className={classes.cardCategoryWhite}>First step</p>
            </CardHeader>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                  <form onSubmit={handleSubmit}>
                    {props.to}
                    <CardBody>
                    <Grid container>
                      <GridItem xs={12} sm={12} md={5}>
                        <Field
                          name="title"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                                labelText="Title"
                                id="username"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  ...input
                                }}
                              />
                          )}
                        </Field>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <Field
                          name="category"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Category"
                              id="username"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                ...input
                              }}
                            />
                          )}
                        </Field>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Field
                          name="date"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Date"
                              id="email-address"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                ...input
                              }}
                            />
                          )}
                        </Field>
                      </GridItem>
                    </Grid>
                    </CardBody>
                    <CardFooter>
                      <Button color="primary" type="submit" disabled={submitting}>Next step -></Button>
                    </CardFooter>
                    {props.get}
                  </form>
                )}
              />
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

FirstStep.propTypes = {
  
};

export default compose(
  withStyles(styles)
)(FirstStep);