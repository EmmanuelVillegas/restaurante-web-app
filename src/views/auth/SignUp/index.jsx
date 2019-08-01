import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { Paper, Typography, Link } from '@material-ui/core';

// Assets
import logo from '../../../assets/images/restaurant.png';

// Actions
import * as actions from '../../../store/auth/actions';

// Atoms
import FormSubmitLoader from '../../../components/Atoms/FormSubmitLoader';

import styles from './styles';
import SignUpForm from './form';

const SignUpView = ({ signUp, loading, error }) => {
  const classes = styles();

  const onSubmit = async values => {
    console.log(values);
    await signUp(values);
  };

  return (
    <main className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <FormSubmitLoader loading={loading} />
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="h6" align="center" className={classes.logoText}>
          RESTAURANT APP
        </Typography>
        <Typography variant="h6" align="center" className={classes.title}>
          NUEVA CUENTA
        </Typography>
        <SignUpForm onSubmit={onSubmit} />
        <div className={classes.register}>
          <Typography variant="subtitle2" component="span">
            ¿Ya tienes una cuenta?
          </Typography>
          <Link variant="subtitle2" component={RouterLink} to="/sign-in">
            Iniciar sesión
          </Link>
        </div>
      </Paper>
    </main>
  );
};

const mapStateToProps = ({ auth: { loading, error } }) => ({
  loading,
  error
});

const mapDispatchToProps = {
  signUp: actions.signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpView);
