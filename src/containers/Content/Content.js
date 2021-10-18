import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { LoginConstant } from "../../constants/token.contants";
import routes from "../routes";
// import { getUserRole } from "../../utils/helpers/global";

const AppContent = () => {
  const routeList = routes.Admin;
  const guest = routes.NaiveUser;
  const basename = process.env.PUBLIC_URL
  const [isLogin] = useState(localStorage.getItem(LoginConstant.tokenKey))
  return (
    <React.Fragment>
      {
        isLogin ? <Switch>
          {

            routeList.map((route, index) => <Route
              key={route.key}
              path={`${route.path}`}
              name={route.name}
              render={(props) => <route.component {...props} />}
              exact={route.exact}
            />
            )
          }
          <Route component={PageNotFound} />
        </Switch>
          : <Switch>
            {
              guest.map((route, index) => <Route
                key={route.key}
                path={`${route.path}`}
                name={route.name}
                render={(props) => <route.component {...props} />}
                exact={route.exact}
              />
              )
            }
            <Route render={()=><Redirect to='/controlroom/login' />} />
          </Switch>
      }

    </React.Fragment>
  );
};

export default AppContent;
