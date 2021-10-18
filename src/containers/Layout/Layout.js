import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import AppHeader from "../Header/Header";
import styles from "./layout.module.css";
import { useDimensions } from "../../utils/helpers/global";
import AppContent from "../Content/Content";

const AppLayout = (props) => {
  const {Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const { width } = useDimensions();
  useEffect(() => {
    if (width < 1040) {
      setCollapsed(true);
      setWindowWidth(width);
    } else {
      setWindowWidth(width);
      setCollapsed(false);
    }
  }, [width]);

  const onCollapse = useCallback(
    (collapsed) => {
      setCollapsed(collapsed);
    },
    [width, collapsed]
  );

  return (
      <Layout className="site-layout">
        <Sidebar collapsed={collapsed} onCollapse={onCollapse} {...props} />
        <Content
          style={{
            minHeight: "100vh",
            paddingTop: "64px",
            paddingLeft: collapsed
              ? windowWidth > 900
                ? "7%"
                : "10%"
              : windowWidth > 900
              ? "15%"
              : "23%",
          }}
        >
          <AppContent {...props} />
        </Content>
      </Layout>
  );
};

export default AppLayout;
