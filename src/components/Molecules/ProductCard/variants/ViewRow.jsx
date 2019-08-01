import React from 'react';

// Material UI
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';

// Atoms
import { DropdownMenu } from '../../../../components/Atoms';

import styles from './styles';

const ProductCardViewRow = () => {
  const classes = styles();
  return (
    <Card>
      <CardContent className={classes.contentRow}>
        <Typography
          variant="subtitle2"
          color="textPrimary"
          className={classes.priceRow}>
          $ 25.000.00
        </Typography>
        <DropdownMenu
          label="Opciones"
          className={classes.options}
          options={[
            {
              label: 'Ver'
            },
            {
              label: 'Editar'
            },
            {
              label: 'Eliminar'
            }
          ]}
        />
        <Avatar className={classes.avatarRow}>
          <img
            src="https://img.icons8.com/color/48/000000/hot-dog.png"
            alt="img"
          />
        </Avatar>
        <div className={classes.textContent}>
          <Typography
            variant="body1"
            color="textPrimary"
            align="left"
            className={classes.title}>
            Example text
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            align="left"
            paragraph
            className={classes.description}>
            Comida rapida
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardViewRow;
