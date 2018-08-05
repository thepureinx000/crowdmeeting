import React from "react";
import { Field, Form } from "react-final-form";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../ui/molecules/Grid/GridItem.jsx";
import CustomInput from "../../ui/atoms/CustomInput/CustomInput.jsx";
import Button from "../../ui/atoms/CustomButtons/Button.jsx";
import Card from "../../ui/molecules/Card/Card.jsx";
import CardHeader from "../../ui/molecules/Card/CardHeader.jsx";
import CardAvatar from "../../ui/molecules/Card/CardAvatar.jsx";
import CardBody from "../../ui/molecules/Card/CardBody.jsx";
import CardFooter from "../../ui/molecules/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import FormStateFromRedux from "./Form/formStateFromRedux";
import FormStateToRedux from "./Form/formStateToRedux";

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
// const minValue = min => value =>
//   value >= min ? undefined : `Should be greater than ${min}`;
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);

const onSubmit = values => {
  console.log(values);
};

function UserProfile(props) {
  const { classes, ...rest } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                  <form onSubmit={handleSubmit}>
                    <FormStateToRedux form="user"/>
                    <CardBody>
                    <Grid container>
                      <GridItem xs={12} sm={12} md={5}>
                        <Field
                          name="Company"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                                labelText="Company"
                                id="company-disabled"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  disabled: false,
                                  ...input
                                }}
                              />
                          )}
                        </Field>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <Field
                          name="username"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Username"
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
                          name="email"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Email address"
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
                    <Grid container>
                      <GridItem xs={12} sm={12} md={6}>
                        <Field
                          name="firstName"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="First Name"
                              id="first-name"
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
                      <GridItem xs={12} sm={12} md={6}>
                        <Field
                          name="lastName"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Last Name"
                              id="last-name"
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
                    <Grid container>
                      <GridItem xs={12} sm={12} md={4}>
                        <Field
                          name="city"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="City"
                              id="city"
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
                          name="country"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Country"
                              id="country"
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
                          name="postalCode"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Postal Code"
                              id="postal-code"
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
                    <Grid container>
                      <GridItem xs={12} sm={12} md={12}>
                        <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                        <Field
                          name="info"
                          validate={required}
                          type="text"
                        >
                          {({ input }) => (
                            <CustomInput
                              labelText="Info"
                              id="about-me"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                ...input,
                                rows: 5,
                                multiline: true
                              }}
                            />
                          )}
                        </Field>
                      </GridItem>
                    </Grid>
                    </CardBody>
                    <CardFooter>
                      <Button color="primary" type="submit" disabled={submitting}>Update Profile</Button>
                    </CardFooter>
                    <FormStateFromRedux form="user" />
                  </form>
                )}
              />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}> Laszlo Hyperloud</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(dashboardStyle)(UserProfile);
