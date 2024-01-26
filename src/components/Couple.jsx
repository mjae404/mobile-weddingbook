import React from "react";
import styles from "../styles/components/Couple.module.scss";
import bride from "../assets/images/bride.jpg";
import groom from "../assets/images/groom.jpg";

function Couple() {
    return (
        <>
            <div className={styles['couple-area']}>
                <div className={styles['couple-person-area']}>
                    <span className={styles['couple-parents']}>박정호 · 한영애의 장남</span>
                    <strong className={styles['couple-name']}>웅빈</strong>
                    <img src={groom} alt="" className={styles['couple-image']} />
                </div>
                <div className={styles['couple-person-area']}>
                    <span className={styles['couple-parents']}>김광진 · 장경미의 장녀</span>
                    <strong className={styles['couple-name']}>민지</strong>
                    <img src={bride} alt="" className={styles['couple-image']} />
                </div>
            </div>
            <p className={styles['couple-text-area']}>
                소중한 분들을 모시고<br/>
                어느 봄날에 결혼합니다.<br/><br/>
                부디 함께 하시어<br/>
                축복해주시면 감사하겠습니다.
            </p>
        </>
    );
}

export default Couple;
