import React, { useEffect } from "react";
import { Layout } from "antd";
import HomeScreenHeader from "../../containers/HomeScreenHeader";
import { useDispatch, useSelector } from "react-redux";
import { loginActionTypes } from "../../redux/actionTypes";

const Home = (props) => {
  const { Header } = Layout;


  return (
    <h1>Home Page is here</h1>
  );
};

export default Home;
