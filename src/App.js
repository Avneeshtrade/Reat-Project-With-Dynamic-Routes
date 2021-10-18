import React, { Suspense } from "react";
import "./App.css";
import {
  HashRouter,
  // Redirect,
  // Route,
  // Switch,
} from "react-router-dom";
import AppLayout from "./containers/Layout";
// import { LoginConstant } from "./constants/token.contants";


const Spinner = () => (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

//Importing Components
// const Login = React.lazy(() => import("./components/Login"));
// const Home = React.lazy(() => import("./components/Home"));
// const PageNotFound = React.lazy(() =>
//   import("./components/PageNotFound/PageNotFound")
// );

function App(props) {
 
  return (
    <HashRouter>
      <Suspense fallback={<Spinner />}>    
          <AppLayout {...props} />
      </Suspense>
    </HashRouter>
  );
}

export default App;
