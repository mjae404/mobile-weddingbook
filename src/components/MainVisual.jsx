import React, { useState, useEffect } from 'react';
import styles from "../styles/components/MainVisual.module.scss";

function MainVisual() {
    const totalImages = 209;
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.pageYOffset;
            const newImageIndex = determineImageIndex(yOffset);
            setCurrentImageIndex(newImageIndex);

            setIsFixed(yOffset < 5000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const determineImageIndex = (scrollY) => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const percentageScrolled = (scrollY / maxScroll) * 100;
        const newIndex = Math.floor((percentageScrolled / 100) * totalImages) + 1;

        return newIndex;
    };

    const imageUrl = `./images/wedding/wedding-${String(currentImageIndex).padStart(4, '0')}.jpg`;

    return (
        <>
            <div className={`${styles['visual-image-area']} ${isFixed ? styles.fixed : ''}`}>
                <img
                    src={imageUrl}
                    alt="Dynamic"
                />
                <div className={styles['scroll-btn']}>
                    <div className={styles['scroll-btn-link']}>
                        <span className={styles['mouse']}>
                            <span></span>
                        </span>
                    </div>
                    <p className={styles['scroll-btn-text']}>scroll me</p>
                </div>
            </div>
            <div className={styles['visual-area']}>
                <div className={styles['visual-text-area']}>
                    <strong className={styles['visual-title']}>Minjee & Woongbin</strong>
                    <p className={styles['visual-sub-title']}>We are getting married</p>
                    <div className={styles['visual-wedding-info-text']}>
                        <span className={styles['visual-wedding-info-date']}>2024. 04. 13. SAT 12:00 PM</span>
                        <span className={styles['visual-wedding-info-place']}>컨벤션 헤리츠 5층 프로메사홀</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainVisual;
