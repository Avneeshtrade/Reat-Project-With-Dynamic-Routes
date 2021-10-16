import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "../routes";
// import { getUserRole } from "../../utils/helpers/global";

const AppContent = () => {
  const routeList = routes.Admin;
  return (
        <React.Fragment>
          <Switch>
            {
            routeList.map((route, index) => <Route
                    key={route.key}
                    path={route.path}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                    exact={route.exact}
                  />
                  )}
            <Route>
              <Redirect to="/pagenotfound" />
            </Route>
          </Switch>
        </React.Fragment>
  );
};

export default AppContent;
