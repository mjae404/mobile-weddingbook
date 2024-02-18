import React from "react";
import styles from "../styles/components/GuestBook.module.scss";

export default function GuestBookComment({contents}) {
    return (
        <li className={styles['guestbook-item']}>
            <p className={styles['guestbook-text']}>{contents.message}</p>
            <div className={styles['guestbook-details-container']}>
                <span className={styles['guestbook-writer']}>{contents.name}</span>
                <span className={styles['guestbook-date']}>{contents.timestamp}</span>
            </div>
        </li>
    );
}