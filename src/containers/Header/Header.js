import React, { useEffect } from "react";
import styles from "./header.module.css";
import images from "../../theme/image";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginActionTypes } from "../../redux/actionTypes";
import { setData } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { Emitter } from "../../utils/service";
import SOCKET_CONSTANTS from "../../constants/event.constant";
import { openNotification } from "../../utils/helpers/global";

const AppHeader = (props) => {
 
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          props.history.push("/");
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
