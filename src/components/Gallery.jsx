import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';

import styles from "../styles/components/Gallery.module.scss";
import gallery01 from "../assets/images/gallery01.jpg";
import gallery02 from "../assets/images/gallery02.jpg";
import gallery03 from "../assets/images/gallery03.jpg";
import gallery04 from "../assets/images/gallery04.jpg";
import gallery05 from "../assets/images/gallery05.jpg";
import gallery06 from "../assets/images/gallery06.jpg";
import gallery07 from "../assets/images/gallery07.jpg";
import gallery08 from "../assets/images/gallery08.jpg";
import gallery09 from "../assets/images/gallery09.jpg";
import gallery10 from "../assets/images/gallery10.jpg";
import gallery11 from "../assets/images/gallery11.jpg";
import gallery12 from "../assets/images/gallery12.jpg";
import gallery13 from "../assets/images/gallery13.jpg";
import gallery14 from "../assets/images/gallery14.jpg";
import gallery15 from "../assets/images/gallery15.jpg";
import gallery16 from "../assets/images/gallery16.jpg";
import gallery17 from "../assets/images/gallery17.jpg";
import gallery18 from "../assets/images/gallery18.jpg";

function Gallery() {
    const galleryArray = [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery16, gallery08, gallery09, gallery10, gallery11, gallery18, gallery12, gallery15, gallery14, gallery13, gallery17];

    const [buttonStates, setButtonStates] = useState(Array(galleryArray.length).fill(false));
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (buttonStates.some(state => state)) {
            document.body.classList.add('hidden');
        } else {
            document.body.classList.remove('hidden');
        }
    }, [buttonStates]);

    const handleButtonClick = (index) => {
        setButtonStates((prevButtonStates) => {
            const newButtonStates = [...prevButtonStates];
            newButtonStates[index] = !newButtonStates[index];
            return newButtonStates;
        });
        setActiveIndex(index);
    };

    const handleArrowButtonClick = (direction) => {
        setActiveIndex((prevIndex) => (prevIndex + direction + galleryArray.length) % galleryArray.length);
        setButtonStates((prevButtonStates) => {
            const newButtonStates = [...prevButtonStates];
            newButtonStates[activeIndex] = false;
            newButtonStates[(activeIndex + direction + galleryArray.length) % galleryArray.length] = true;
            return newButtonStates;
        });
    };

    const handleCloseButtonClick = (index) => {
        setButtonStates((prevButtonStates) => {
            const newButtonStates = [...prevButtonStates];
            newButtonStates[index] = false;
            return newButtonStates;
        });
    };

    return (
        <div className={styles['gallery-area']}>
            <h2 className="section-title">갤러리</h2>
            <ul className={styles['gallery-list']}>
                {galleryArray.map((image, index) => (
                    <li key={index} className={styles['gallery-item']}>
                        <button
                            type="button"
                            className={`${styles['gallery-button']} ${buttonStates[index] ? styles['active'] : ''}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            <img src={image} alt="" className={styles['gallery-image']} />
                        </button>
                        {buttonStates[index] &&
                            <div className={styles['gallery-active-image-area']}>
                                <div className={styles['gallery-active-image-dimmed']} onClick={() => handleCloseButtonClick(index)}></div>
                                <div className={styles['gallery-active-image-inner']}>
                                    <img src={image} alt="" className={styles['gallery-active-image']} />
                                    <button type="button" className={`${styles['gallery-active-image-arrow']} ${styles.prev}`} onClick={() => handleArrowButtonClick(-1)}>
                                        <span className="blind">이전</span>
                                    </button>
                                    <button type="button" className={`${styles['gallery-active-image-arrow']} ${styles.next}`} onClick={() => handleArrowButtonClick(1)}>
                                        <span className="blind">다음</span>
                                    </button>
                                    <button
                                        type="button"
                                        className={styles['gallery-active-image-close-button']}
                                        onClick={() => handleCloseButtonClick(index)}
                                    >
                                        <span className="blind">닫기 버튼</span>
                                    </button>
                                </div>
                            </div>
                        }
                    </li>
                ))}
            </ul>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                zoom={true}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className={styles['gallery-swiper']}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {galleryArray.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={`swiper-zoom-container ${styles['gallery-swiper-container']}`}>
                            <img src={image} alt="" className={styles['gallery-image']} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;
