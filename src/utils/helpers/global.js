import { useEffect, useState } from "react";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tag, notification } from "antd";
import { userRoles } from "../../constants/app.constants";

export const pushToLink = (history, link, state = {}) => {
  history.push({ pathname: link, state });
};

export const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState(getWindowDimension());

  useEffect(() => {
    const handleDimensionChange = () => setDimensions(getWindowDimension());

    window.addEventListener("resize", handleDimensionChange);
    return () => window.removeEventListener("resize", handleDimensionChange);
  });
  return dimensions;
};

export const getStatus = (status) => {
  switch (status) {
    case 0:
      return (
        <Tag icon={<ClockCircleOutlined />} color="warning">
          Pending
        </Tag>
      );
    case 1:
      return (
        <Tag icon={<SyncOutlined spin />} color="processing">
          Running
        </Tag>
      );
    case 2:
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Executed
        </Tag>
      );
    case 3:
      return (
        <Tag icon={<CloseCircleOutlined />} color="error">
          Error
        </Tag>
      );
  }
};

export const openNotification = (message = "", description = "") => {
  notification.open({
    message,
    description,
    type: "info",
    style: { width: "300px", fontSize: "12px" },
  });
};

export const isAdmin = () => {
  return getUserRole() === "Admin";
};

export const getUserRole = () => {
  if (localStorage.getItem("user")) {
    return userRoles[JSON.parse(localStorage.getItem("user")).roleId];
  }
};

export const resObject = (type, operation, message, data) => {
  return {
    content: {
      type,
      operation,
      message,
      data,
    },
  };
};
