import React from 'react';

// Material UI
import { Card, Typography, Button } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import styles from './styles';

const AllTables = ({ data }) => {
  const classes = styles();
  const [state, setState] = React.useState({
    checkedA: false,
    happy: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subtitle2" color="primary">
          FILTRAR POR
        </Typography>
        <Button className={classes.headerButtonReset}>Limpiar</Button>
      </div>
      <div className={classes.filtersContainer}>
        {data.map((item, index) => (
          <FormControlLabel
            classes={{
              root: classes.formControlLabel
            }}
            key={index}
            control={
              <Checkbox
                checked={state[item.label] ? state[item.label] : false}
                onChange={handleChange(item.label)}
                value={item.label}
                color="primary"
              />
            }
            label={
              <div className={classes.filterOption}>
                <Typography variant="body1" color="textPrimary" align="left">
                  {item.label}
                </Typography>
                <Typography variant="body1" color="textPrimary" align="left">
                  {item.quantity}
                </Typography>
              </div>
            }
          />
        ))}
      </div>
    </Card>
  );
};

export default AllTables;
