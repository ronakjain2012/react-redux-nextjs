import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/MainDashboard.module.css';
import PaperCard from '../components/PaperCard';
import InputMain from '../components/InputMain';
import { getIdentityUser, getUser, GET_IDENTITY_USERS } from '../redux/reducers/user/user';
import CardTable from '../components/CardTable';
import { getIdentityUsers } from '../redux/selectors';

class MainDashboard extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.initDispatch();
  }

  render() {
    return (
      <Grid container className={styles.content}>
        <Grid item md={12}>
          <InputMain />
          {this.props.user && <h1>{this.props.user.firstName}, APIs and Store Working</h1>}
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <PaperCard
              size='4'
              backgroundColor='var(--background)'
              fontColor='var(--sub-6)'>
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
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container>
            <PaperCard
              size='12'
              elevation={0}
              backgroundColor='var(--background-7)'
              fontColor='var(--sub-6)'
              styles={{padding:'0px !important'}}>
              <CardTable
                name='Users'
                data={this.props.users}
                for={GET_IDENTITY_USERS}></CardTable>
            </PaperCard>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    users: getIdentityUsers(state),
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => ({
  initDispatch: _ => {
    dispatch(getUser());
    dispatch(getIdentityUser());
  },
});
export default connect(mapStateToProps,mapDispatchToProps)(MainDashboard);
