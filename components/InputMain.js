import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserIdentity } from "../redux/reducers/user/user";

const InputMain = (props) => {
  const dispatch = useDispatch();
  const [userValue, setUserValue] = React.useState("");

  const e_userValue = (e) => {
    setUserValue(e.target.value);
    dispatch(setUserIdentity(e.target.value));
  };

  return (
    <Grid container style={{'margin':'0px','padding':'9px'}}>
      <Grid item xs={12}>
        <TextField
          onChange={e_userValue}
          fullWidth
          label="Mobile/Email/UserID"
          id="outlined-start-adornment"
          value={userValue}
        />
      </Grid>
    </Grid>
  );
};

export default InputMain;
