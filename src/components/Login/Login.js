import React, { useState } from "react";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { LoginConstant } from "../../constants/token.contants";
import { useHistory } from "react-router";
import { pushToLink } from "../../utils/helpers/global";

const Login = (props) => {
  const initialState = {username:'',password:'',isLoggedIn:false}
  const [state,setState] = useState(initialState)
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "https://reqres.in/api/login"
    const method = "POST"
   
    fetch(url,{
        method:method,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            email:state.username,
            password:state.password
        })
    }).then(r=>r.json()).then(json=>{
        const {token} = json
        if(token){
            setState(s=>({
                    ...s,
                    isLoggedIn:true
            }))
            localStorage.setItem(LoginConstant.tokenKey,token)
            window.location.href = `controlroom/home`;
        }
        else{
            setState(s=>({
                ...s,
                isLoggedIn:false
        }))
        }
            
    }).catch(err=>{
        console.log(err)
    })
    setState(s=>({...s,...initialState}))
  }
  const changeHandler = (e) =>{
      setState(s=>({
        ...s,
        [e.target.name]:e.target.value
      }))
  }
  return <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
    <CssBaseline />
    <Typography variant="h4" align="center" component="h1" gutterBottom>
      🏁 Login Form
    </Typography>
    <form>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <Input type='text' placeholder='username' name='username' onChange={changeHandler} value={state.username}/>
          </Grid>
          <Grid item xs={6}>
            <Input type='password' placeholder='password' name='password' value={state.password} onChange={changeHandler} />
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
