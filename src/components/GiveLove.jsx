import React, { useState } from "react";
import styles from "../styles/components/GiveLove.module.scss";

function GiveLove() {
    const [isActive, setIsActive] = useState(false);

    const toggleContainer = () => {
        setIsActive(!isActive);
    };

    const handleCopyClick = (accountNumber) => {
        const tempInput = document.createElement('input');
        tempInput.value = accountNumber;
        document.body.appendChild(tempInput);
        tempInput.select();

        try {
            document.execCommand('copy');
            alert('계좌번호가 클립보드에 복사되었습니다!');
        } catch (err) {
            console.error('클립보드 복사에 실패했습니다.', err);
        } finally {
            document.body.removeChild(tempInput);
        }
    };

    return (
        <div className={styles['give-love-area']}>
            <h2 className="section-title">마음 전하실 곳</h2>
            <button
                type="button"
                className={styles['give-love-button']}
                onClick={toggleContainer}
            >계좌번호 확인하기</button>
            <div className={`${styles['give-love-container']} ${isActive ? styles['active'] : ''}`}>
                <div className={styles['give-love-title-container']}>
                    <span className={styles['give-love-title']}>신랑측 계좌번호</span>
                </div>
                <ul className={styles['give-love-list']}>
                    <li className={styles['give-love-item']}>
                        <span className={styles['give-love-account-number']}>신한 110-210-596841 박웅빈</span>
                        <button type="button" className={styles['give-love-account-copy-button']} onClick={() => handleCopyClick('신한 110-210-596841 박웅빈')}>복사하기</button>
                    </li>
                    <li className={styles['give-love-item']}>
                        <span className={styles['give-love-account-number']}>우리 1005-3029-89751 박정호</span>
                        <button type="button" className={styles['give-love-account-copy-button']} onClick={() => handleCopyClick('우리 1005-3029-89751 박정호')}>복사하기</button>
                    </li>
                </ul>
                <div className={styles['give-love-title-container']}>
                    <span className={styles['give-love-title']}>신부측 계좌번호</span>
                </div>
                <ul className={styles['give-love-list']}>
                    <li className={styles['give-love-item']}>
                        <span className={styles['give-love-account-number']}>국민 818502-04-184174 김민지</span>
                        <button type="button" className={styles['give-love-account-copy-button']} onClick={() => handleCopyClick('국민 818502-04-184174 김민지')}>복사하기</button>
                    </li>
                    <li className={styles['give-love-item']}>
                        <span className={styles['give-love-account-number']}>농협 134-12-157404 김광진</span>
                        <button type="button" className={styles['give-love-account-copy-button']} onClick={() => handleCopyClick('농협 134-12-157404 김광진')}>복사하기</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GiveLove;
