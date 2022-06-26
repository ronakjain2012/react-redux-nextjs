import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/MainDashboard.module.css';
import PaperCard from '../components/PaperCard';
import InputMain from '../components/InputMain';
import Logo from '../components/Logo';
class MainDashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid container className={styles.content}>
        <Grid item md={12}>
          <InputMain />
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <PaperCard size='4'>
              <Typography gutterBottom variant='h6' component='div'>
                Users
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body1' component='div'>
                  Active
                </Typography>
                <Typography gutterBottom variant='body1' component='div'>
                  +75234
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body1' component='div'>
                  Dead
                </Typography>
                <Typography gutterBottom variant='body1' component='div'>
                  +435
                </Typography>
              </Box>
            </PaperCard>
            <PaperCard size='4'>as</PaperCard>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({}))(MainDashboard);
