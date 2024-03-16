import React from "react";
import styles from "../styles/components/Location.module.scss";
import KakaoMap from "./KakaoMap";

function Location() {

    return (
        <div className={styles['location-area']}>
            <h2 className="section-title">오시는 길</h2>
            <KakaoMap />
            <ul className={styles['location-desc-list']}>
                <li className={styles['location-desc-item']}>
                    <strong>Address.</strong>
                    <span className={styles['point']}>도로명</span> 서울특별시 강남구 논현로 662 헤리츠타워<br/>
                    <span className={styles['point']}>지번</span> 서울특별시 강남구 논현동 215번지 헤리츠타워
                </li>
                <li className={styles['location-desc-item']}>
                    <strong>Subway.</strong>
                    지하철 7호선 학동역 3번출구 도보 60m<br/>
                    지하철 9호선 언주역 3번출구 도보 500m
                </li>
                <li className={styles['location-desc-item']}>
                    <strong>Bus.</strong>
                    <span className={styles['point']}>간선</span> 147번, 240번, 241번, 401번, 463번<br/>
                    <span className={styles['point']}>지선</span> 3412번, 3414번, 4211번, 6411번
                </li>
                <li className={styles['location-desc-item']}>
                    <strong>Car.</strong>
                    <p className={styles['location-desc-text']}><span className={styles['point']}>동호대교</span> 성수대교 남단에서 을지병원(구 안세병원) 사거리로 직진 → 학동역 방면으로 직진 → 학동역 사거리 30m</p>
                    <p className={styles['location-desc-text']}><span className={styles['point']}>한남대교</span> 한남대교 남단에서 강남대로를 따라 논현역 방면으로 직진 → 논현역 사거리에서 자회전 → 학동역 방면으로 직진 → 학동역 사거리를 지나서 바로 첫번째 골목으로 우회전 → 첫번째 작은 사거리에서 우회전 후 30m</p>
                    <p className={styles['location-desc-text']}><span className={styles['point']}>성수대교</span> 성수대교 남단에서 관세청 사거리 방면으로 직진 → 관세청사거리에서 우회전 → 학동역 사거리에서 U턴후 수협은행 건물 옆골목으로 우회전 → 첫번째 작은사거리에서 우회전 후 30m</p>
                    <p className={styles['location-desc-text']}><span className={styles['point']}>영동대교</span> 영동대교 남단에서 코엑스 방면으로 좌회전 → 직진 후 강남구청 방면으로 우회전 → 학동역 방면으로 직진 → 관세청 사거리 지나서 학동역 방면으로 직진 → 학동역 사거리에서 자회전 → 학동역 사거리 지나 30m</p>
                </li>
            </ul>
            <ul className={styles['location-map-list']}>
                <li className={styles['location-map-item']}>
                    <a className={`${styles['location-map-link']} ${styles.naver}`} href="https://naver.me/5izpc5VP" target="_blank" rel="noopener noreferrer">
                        <span className="blind">네이버 지도 바로가기</span>
                    </a>
                </li>
                <li className={styles['location-map-item']}>
                    <a className={`${styles['location-map-link']} ${styles.kakao}`} href="https://place.map.kakao.com/14971532" target="_blank" rel="noopener noreferrer">
                        <span className="blind">카카오 지도 바로가기</span>
                    </a>
                </li>
                <li className={styles['location-map-item']}>
                    <a className={`${styles['location-map-link']} ${styles.tmap}`} href="https://surl.tmobiapi.com/2a0ce0fb" target="_blank" rel="noopener noreferrer">
                        <span className="blind">티맵 지도 바로가기</span>
                    </a>
                </li>
                <li className={styles['location-map-item']}>
                    <a className={`${styles['location-map-link']} ${styles.google}`} href="https://maps.app.goo.gl/1dpLTnyAY3fSJDgF8" target="_blank" rel="noopener noreferrer">
                        <span className="blind">구글 지도 바로가기</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Location;
