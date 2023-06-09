import React from 'react';
import styles from '../styles/Header.module.css';
import {Link} from "react-router-dom";
import axiosInstance from "../apis/AxiosInstance";
const Header = () => {
    const login = () => {
        axiosInstance.get("").then(result => {
            console.log(result.data);
        })
    }
    return (
        <div className={styles.HeaderBox}>
            <div className={styles.Box}>
                <h2 className={styles.Logo}><Link to={"/"} className={styles.LinkTag}>MomsTouch</Link></h2>
            </div>
            <div className={styles.Box}>
                <h4 className={styles.Log}><Link to={"/log"} className={styles.LinkTag}>주문 이력 조회</Link> </h4>
                <h4 className={styles.Login}><a href={process.env.REACT_APP_BASE_URL + "/oauth2/authorization/google"}>Login</a></h4>
                <h4 className={styles.Order}><Link to={"/cart"} className={styles.LinkTag}>Cart</Link></h4>
            </div>
        </div>
    );
};

export default Header;