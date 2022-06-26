import { Grid, Paper } from '@mui/material';
import React from 'react';
import styles from './styles/PaperCard.module.css';

const PaperCard = props => {
  const size = props.size ? Number(props.size) : 4;
  const elevation = props.elevation || 0;
  return (
    <Grid item xs={size} className={styles.gridPaperCard}>
      <Paper className={styles.paperCard} elevation={elevation}>
        {props.children}
      </Paper>
    </Grid>
  );
};

export default PaperCard;
