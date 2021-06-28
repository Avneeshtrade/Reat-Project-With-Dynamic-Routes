import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
// import menuList from "./menuList";
import styles from "./sidebar.module.css";
import { pushToLink } from "../../utils/helpers/global";
import { useHistory } from "react-router-dom";
import routes from "../routes";
// import { getUserRole } from "../../utils/helpers/global";

const Sidebar = (props) => {
  const history = useHistory();
  const { collapsed, onCollapse } = props;
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const content = routes.Admin;
  const handleItemChange = (link) => {
    pushToLink(history, link);
  };

  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={styles.sidebar}
      collapsedWidth={0}
      style={{ height: "100vh" }}
    >
      <Menu
        theme={"dark"}
        mode="inline"
      >
        {content && content.length &&  content.map((item) => {
            return item.children && !!item.children.length ? (
              <SubMenu key={item.key} icon={item.icon} title={item.title}>
                {item.children.map((i) => (
                  <Menu.Item
                    key={i.key}
                    icon={i.icon}
                    onClick={() => handleItemChange(i.path)}
                  >
                    {i.content}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={() => handleItemChange(item.path)}
              >
                {item.content}
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
