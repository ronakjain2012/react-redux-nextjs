import { IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserIdentity } from '../redux/reducers/user/user';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const InputMain = props => {
  const dispatch = useDispatch();
  const [userValue, setUserValue] = React.useState('');

  const e_userValue = e => {
    setUserValue(e.target.value);
    dispatch(setUserIdentity(e.target.value));
  };

  return (
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
        onChange={e_userValue}
        value={userValue}
      />
      <IconButton type='button' aria-label='search'>
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default InputMain;
