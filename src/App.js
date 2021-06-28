import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginActionTypes } from "../src/redux/actionTypes";
import AppLayout from "./containers/Layout";
// import jwtDecode from "jwt-decode";
// import { socket } from "./utils/service";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

//Importing Components
const Login = React.lazy(() => import("./components/Login"));
const Home = React.lazy(() => import("./components/Home"));
const PageNotFound = React.lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);

function App() {
  const [isLogin,setIsLogin] = useState(true)
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
            <Route
            path="/controlroom"
            name="controlroom"
            render={props=><AppLayout {...props} />}
          />
          <Route path="/pagenotfound" component={PageNotFound} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
