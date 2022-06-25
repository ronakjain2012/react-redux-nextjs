import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/MainDashboard.module.css';
import { ManageSearch } from '@mui/icons-material';
class MainDashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid container className={styles.content}>
        <Grid item md={12}>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 'var(--radius-1)',
              marginBottom: '10px'
            }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              fullWidth={true}
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type='submit' aria-label='search'>
              <ManageSearch />
            </IconButton>
          </Paper>
        </Grid>
        
        <Grid item md={12}>
        assasasa
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({}))(MainDashboard);
