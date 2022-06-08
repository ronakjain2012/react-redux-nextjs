import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { Box, Container, Grid, Paper, Tab, Tabs } from '@mui/material';
import asTable from 'as-table';
import React from 'react';
import { connect } from 'react-redux';
import SimpleDTable from '../components/SimpleDTable';
import { getApiState } from '../redux/selectors';

class ApiLayout extends React.Component {
  constructor() {
    super();
    this.state = { value: '1' };
    // this.delta = this.delta.bind(this);
  }

  handleChange = (e, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  successTable = () => {
    const data = this.props.apiLog.successLogs;
    if (data[0] != undefined) {
      const col = Object.keys(data[0]);
      return <SimpleDTable cols={col} data={data}></SimpleDTable>;
    }
    return 'No Actions';
  };

  failedTable = () => {
    const data = this.props.apiLog.failLogs;
    if (data[0] != undefined) {
      const col = Object.keys(data[0]);
      return <SimpleDTable cols={col} data={data}></SimpleDTable>;
    }
    return 'No Actions';
  };

  render() {
    return (
      <Container maxWidth='100%'>
        <Paper style={{ margin: '10px', borderRadius: '10px' }}>
          <Grid container>
            <Grid item xs={12} className='padding10'>
              <TabContext value={this.state.value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={this.handleChange}
                    aria-label='API Logging Tabs'>
                    <Tab label='Success APIs' value='1' />
                    <Tab label='Failed APIs' value='2' />
                  </TabList>
                </Box>
                <TabPanel value='1'>{this.successTable()}</TabPanel>
                <TabPanel value='2'>{this.failedTable()}</TabPanel>
              </TabContext>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default connect(state => ({ apiLog: getApiState(state) }))(ApiLayout);
