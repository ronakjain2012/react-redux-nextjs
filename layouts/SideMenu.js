import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import styles from './styles/SideMenu.module.css';
import Link from 'next/link';

class SideMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav aria-label='secondary mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton className={styles.listButton}>
              <ListItemIcon className={styles.listIcon}>
                <CottageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component='a'
              href='#simple-list'
              className={styles.listButton}>
              <ListItemIcon className={styles.listIcon}>
                <EmojiFoodBeverageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Scripts' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component='a'
              href='#simple-list'
              className={styles.listButton}>
              <ListItemIcon className={styles.listIcon}>
                <FactoryOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='CRM' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Link href='/apilogs'>
              <ListItemButton
                component='a'
                href='/apilogs'
                className={styles.listButton}>
                <ListItemIcon className={styles.listIcon}>
                  <CategoryOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='APIs' className={styles.listButton} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    );
  }
}

export default connect(state => ({}))(SideMenu);
