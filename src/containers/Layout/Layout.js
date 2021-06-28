import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import AppHeader from "../Header/Header";
import styles from "./layout.module.css";
import { useDimensions } from "../../utils/helpers/global";
import AppContent from "../Content/Content";

const AppLayout = (props) => {
  const { Header, Content } = Layout;
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

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Header className={styles.header} style={{ padding: 0 }}>
        <AppHeader
          collapsed={collapsed}
          onCollapse={onCollapse}
          toggle={toggle}
        />
      </Header>
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
    </Layout>
  );
};

export default AppLayout;
