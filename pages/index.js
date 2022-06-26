import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { connect } from 'react-redux';
import Head from 'next/head';
import CardTable from '../components/CardTable';
// import InputMain from '../components/InputMain';
import styles from '../styles/Home.module.css';
// import {
//   getIdentityUser,
//   getUser,
//   GET_IDENTITY_USERS,
// } from '../redux/reducers/user/user';
// import { getIdentityUsers } from '../redux/selectors';
// import ApiLayout from '../layouts/ApiLayout';
import SideMenu from '../layouts/SideMenu';
import Logo from '../components/Logo';
import MainDashboard from '../layouts/MainDashboard';

function Home({ items }) {
  // const user = useSelector(state => state.user.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  //   dispatch(getIdentityUser());
  // }, [dispatch]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Dashboard' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Grid container style={{ height: '100vh' }}>
          <Grid item md={2}>
            <div className={styles.sideMenuMain}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <Container className={styles.sideMenu}>
                <SideMenu />
              </Container>
            </div>
          </Grid>
          <Grid item md={10} className={styles.wrapper}>
            <div className={styles.subWrapper}>
              <MainDashboard></MainDashboard>
            </div>
          </Grid>
        </Grid>
        {/* <Container maxWidth='100%' className={styles.container}>
          {user && <h1>{user.firstName}, APIs and Store Working</h1>}
          <Paper style={{ marginTop: '2px', borderRadius: '10px' }}>
            <InputMain />
          </Paper>
          <Divider />
          <Grid container>
            <Grid item md={12} xs={12} className={styles.tables}>
              <CardTable
                name='Users'
                data={items}
                for={GET_IDENTITY_USERS}></CardTable>
            </Grid>
          </Grid>
        </Container>
        <ApiLayout></ApiLayout> */}
      </main>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps)(Home);
