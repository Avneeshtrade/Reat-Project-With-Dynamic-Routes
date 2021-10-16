import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
    <CssBaseline />
    <Typography variant="h4" align="center" component="h1" gutterBottom>
      🏁 Login Form
    </Typography>
    <form noValidate>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <Input type='text' placeholder='username'/>
          </Grid>
          <Grid item xs={6}>
            <Input type='password' placeholder='password'/>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup>
              <Button onClick={handleSubmit}>Login</Button>
              <Button style={{position:'absolute',left:'30vw'}}>Reset</Button>
            </ButtonGroup>
          </Grid>

        </Grid>
      </Paper>
    </form>
  </div>
};

export default Login;
