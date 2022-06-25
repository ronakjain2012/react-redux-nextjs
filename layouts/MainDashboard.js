import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/MainDashboard.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PaperCard from '../components/PaperCard';
class MainDashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid container className={styles.content}>
        <Grid item md={12}>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 'var(--radius-1)',
              marginBottom: '10px',
            }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              fullWidth={true}
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type='button' aria-label='search'>
              <SearchOutlinedIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
            <PaperCard size='4'>ddasdasadsdas 2122121</PaperCard>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({}))(MainDashboard);
