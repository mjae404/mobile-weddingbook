import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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
import gallery15 from "../assets/images/gallery15.jpg";
import gallery16 from "../assets/images/gallery16.jpg";
import gallery18 from "../assets/images/gallery18.jpg";

function Gallery() {
    const galleryArray = [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery16, gallery08, gallery09, gallery10, gallery11, gallery18, gallery15, gallery12];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [showSwiper, setShowSwiper] = useState(false);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(null); // New state to keep track of selected slide index

    const handleShowSwiper = (index) => {
        setSelectedSlideIndex(index); // Set the selected slide index
        setShowSwiper(true);
    };

    const handleHideSwiper = () => {
        setShowSwiper(false);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        if (showSwiper) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    }, [showSwiper]);

    return (
        <div className={styles['gallery-area']}>
            <h2 className="section-title">갤러리</h2>
            <div className={`${styles['gallery-slide-container']} ${showSwiper ? styles['active'] : ''}`}>
                <div className={styles['gallery-slide-dimmed']} onClick={handleHideSwiper}></div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Navigation, Thumbs]}
                    className={styles['gallery-slide-list']}
                    initialSlide={selectedSlideIndex}
                >
                    {galleryArray.map((image, index) => (
                        <SwiperSlide className={styles['gallery-slide-item']} key={index}>
                            <img src={image} alt="" className={styles['gallery-slide-image']}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button type="button" className={styles['gallery-slide-close-button']} onClick={handleHideSwiper}>
                    <span className="blind">닫기</span>
                </button>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={15}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles['gallery-list']}
            >
                {galleryArray.map((image, index) => (
                    <SwiperSlide className={styles['gallery-item']} key={index} onClick={() => handleShowSwiper(index)}>
                        <img src={image} alt="" className={styles['gallery-image']}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;
