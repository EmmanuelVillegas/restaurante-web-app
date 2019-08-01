import React from 'react';
import { Form, Field } from 'react-final-form';

// Material UI
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';

// Atoms
import FFTextField from '../../../components/Atoms/FFTextField';

import styles from './styles';

const SignUpForm = ({ onSubmit }) => {
  const classes = styles();
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = 'Requerido';
        }
        if (!values.lastName) {
          errors.lastName = 'Requerido';
        }
        if (!values.email) {
          errors.email = 'Requerido';
        }
        if (!values.password) {
          errors.password = 'Requerido';
        }
        if (!values.confirm) {
          errors.confirm = 'Requerido';
        } else if (values.confirm !== values.password) {
          errors.confirm = 'Las contraseñas no coinciden';
        }

        return errors;
      }}
      render={({ handleSubmit, submitting, pristine, invalid }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Field
            type="text"
            name="firstName"
            label="Nombre"
            variant="outlined"
            fullWidth
            required
            component={FFTextField}
            className={classes.input}
          />
          <Field
            type="text"
            name="lastName"
            label="Apellido"
            variant="outlined"
            fullWidth
            required
            component={FFTextField}
            className={classes.input}
          />
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
          <Field
            type="password"
            name="confirm"
            label="Confirmar contraseña"
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
              label="Acepto los terminos y condiciones"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting || pristine || invalid}
            className={classes.button}>
            REGISTRARSE
          </Button>
        </form>
      )}
    />
  );
};

export default SignUpForm;
