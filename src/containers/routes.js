import React from "react";
import {DashboardOutlined,HistoryOutlined,KeyOutlined} from "@ant-design/icons";

const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Login = React.lazy(() => import("../components/Login"));
const Home = React.lazy(() => import("../components/Home"));


const Tab2 = (props) =>{
  return <h1>tab2 Page Here</h1>
}
//Defining User Role Based Routes
const routes = {
  Admin: [
    {
      key: 1,
      path: "/controlroom/dashboard",
      content: "Dashboard",
      icon: <DashboardOutlined />,
      title:"dashboard",
      exact: true,
      component: Dashboard,
    },
    {
      key: 2,
      path: "/controlroom/Tab1",
      content: "Tab1",
      title:"tab1",
      icon: <KeyOutlined />,
      exact: true,
      component: Login,
    },
    {
      key: 3,
      path: "/controlroom/home",
      content: "Home",
      title:"Home",
      icon: <KeyOutlined />,
      exact: true,
      component: Home,
    }
  ]
};

export default routes;
