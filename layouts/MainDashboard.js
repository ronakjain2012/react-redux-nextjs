
import { Container, Grid } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/MainDashboard.module.css';

class MainDashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid container className={styles.content}>
        <Grid item md={2}>
          as
        </Grid>
        <Grid item md={2}> sa </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({}))(MainDashboard);
