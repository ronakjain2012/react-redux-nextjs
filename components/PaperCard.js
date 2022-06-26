import { Grid, Paper } from '@mui/material';
import React from 'react';
import styles from './styles/PaperCard.module.css';

const PaperCard = props => {
  const size = props.size ? Number(props.size) : 4;
  const elevation = props.elevation || 0;
  const fontColor = props.fontColor || 'var(--sub-6)';
  const backgroundColor = props.backgroundColor || 'var(--background)';
  return (
    <Grid item xs={size} className={styles.gridPaperCard}>
      <Paper
        className={styles.paperCard}
        elevation={elevation}
        sx={{ backgroundColor: backgroundColor, color: fontColor }}>
        {props.children}
      </Paper>
    </Grid>
  );
};

export default PaperCard;
