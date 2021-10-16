import React from "react";
import styles from "./header.module.css";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown, Space } from "antd";


const AppHeader = (props) => {
 
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.header}>
      <h1 style={{ color: "white" }}>My Demo Project</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Space direction="vertical" wrap>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button
              style={{ color: "white", fontSize: "20px" }}
              icon={<PoweroffOutlined />}
              type="link"
            />
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};

export default AppHeader;
