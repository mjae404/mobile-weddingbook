import React from "react";
import styles from "../styles/components/GuestBook.module.scss";

export default function GuestBookComment({contents, handleDeletePopup}) {
    return (
        <li className={styles['guestbook-item']}>
            <p className={styles['guestbook-text']}>{contents.message}</p>
            <div className={styles['guestbook-details-container']}>
                <span className={styles['guestbook-writer']}>{contents.name}</span>
                <span className={styles['guestbook-date']}>{contents.timestamp}</span>
            </div>
            <div className={styles['guestbook-delete-container']}>
                <button type="button" className={styles['guestbook-delete-button']} onClick={handleDeletePopup}>
                    <span className="blind">삭제</span>
                </button>
            </div>
        </li>
    );
}