import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { connect } from 'react-redux';
import Head from 'next/head';
import CardTable from '../components/CardTable';
import InputMain from '../components/InputMain';
import styles from '../styles/Home.module.css';
import { getIdentityUser, getUser } from '../redux/reducers/user/user';
import { getIdentityUsers } from '../redux/selectors';

function Home({ items }) {
  const user = useSelector(state => state.user.user);
  const api = useSelector(state => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getIdentityUser());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container maxWidth="100%" className={styles.container}>
          {user && <h1>{user.firstName}, APIs and Store Working</h1>}
          <Paper style={{ marginTop: '2px', borderRadius: '10px' }}>
            <InputMain />
          </Paper>
          <Divider />
          <Grid container>
            <Grid item md={12} xs={12} className={styles.tables}>
              <CardTable name="Users" data={items}></CardTable>
            </Grid>
            <Grid item md={6} xs={12} className={styles.tables}>
              {/* <CardTable></CardTable> */}
            </Grid>
          </Grid>
          <Grid>{JSON.stringify(api)}</Grid>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    items: getIdentityUsers(state),
  };
};

export default connect(mapStateToProps)(Home);
