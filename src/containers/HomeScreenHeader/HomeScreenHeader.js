import React from 'react';
import styles from './homeScreenHeader.module.css';
import {
    PoweroffOutlined,
} from '@ant-design/icons';
import {
    Button,
} from "antd";


const HomeScreenHeader = (props) => {
    return (
        <div className={styles.header} >
            <h1 style={{ color: "white" }}>My Demo Project</h1>
            <Button style={{ color: "white", fontSize: "15px" }} icon={<PoweroffOutlined />} type="link"
                onClick={() => props.history.push("/login")} >
                Login
            </Button>
        </div>
    )
}


export default HomeScreenHeader;