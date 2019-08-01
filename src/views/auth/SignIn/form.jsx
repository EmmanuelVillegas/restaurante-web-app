import React from 'react';
import { Form, Field } from 'react-final-form';

// Material UI
import { Button, FormControlLabel, Checkbox, Link } from '@material-ui/core';

// Atoms
import FFTextField from '../../../components/Atoms/FFTextField';

import styles from './styles';

const SignInForm = ({ onSubmit }) => {
  const classes = styles();
  const [rememberMe, setRememberMe] = React.useState(false);
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Requerido';
        }
        if (!values.password) {
          errors.password = 'Requerido';
        }

        return errors;
      }}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Field
            type="email"
            name="email"
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            required
            component={FFTextField}
            className={classes.input}
          />
          <Field
            type="password"
            name="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
            required
            component={FFTextField}
            className={classes.input}
          />
          <div className={classes.options}>
            <FormControlLabel
              classes={{
                root: classes.checkboxContainer,
                label: classes.checkboxLabel
              }}
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  value="rememberMe"
                  color="primary"
                />
              }
              label="Recordarme"
            />
            <Link href="#" variant="subtitle2">
              ¿Olvido su contraseña?
            </Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting || pristine || invalid}
            className={classes.button}>
            ENTRAR
          </Button>
        </form>
      )}
    />
  );
};

export default SignInForm;
