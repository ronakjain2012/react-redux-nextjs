import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { getApiState } from '../redux/selectors';

class ApiLayout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container maxWidth='100%'>
        <Paper style={{ margin: '10px', borderRadius: '10px' }}>
          <Grid container>
            <Grid item className='padding10'>
              <pre>{JSON.stringify(this.props.apiLog, null, 2)}</pre>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default connect(state => ({ apiLog: getApiState(state) }))(ApiLayout);
