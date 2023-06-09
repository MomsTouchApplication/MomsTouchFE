import React from 'react';
import styles from '../styles/MenuList.module.css'



const MenuList = ({ items, shopId, click }) => {
    return (
        <ul className={styles.DivUl}>
            <p className={styles.PTag}>메뉴판</p>
            {items
                .filter(item => item.shopId === shopId)
                .map((menu, index) => {
                    return (
                        <li key={index} className={styles.DivLi} onClick={() => click(index)}>
                            <p className={styles.NameTag}>{menu.name}</p>
                            <p className={styles.PriceTag}>{menu.price}원</p>
                        </li>
                    );
                })}
        </ul>
    );
};

export default MenuList;