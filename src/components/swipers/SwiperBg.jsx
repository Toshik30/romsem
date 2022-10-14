import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { dataSets } from '../../data/promoutionBgSets';
import styles from './style.module.scss'

import 'swiper/css';
import "swiper/css/pagination";
export const SwiperBg = () => {
  return (
    <div>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            loop={true}
            pagination={{clickable: true}}
            modules={[Pagination, Autoplay]}
        >
            {dataSets.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.customSlide}>
                        <div className={styles.customSlide_description}>
                            <h2>{item.name}</h2>
                            <span className="orange-color">{item.size}</span>
                            {item.discount > 0 ? 
                            <strong className={styles.hotPrice}>
                                <p className={styles.oldPrice}>{item.cost} &#8372;</p>
                                <p className={styles.actualPrice}>{item.cost - item.discount} &#8372;</p>
                            </strong>  : <strong className={styles.actualPrice}>{item.cost}&#8372;</strong> }
                            <button className={`${styles.primaryButton}  primaryButton`}>Заказать</button>
                        </div>
                        <img src={item.image} alt="slide" />
                        
                    </div>
                </SwiperSlide>
            
            ))}
        </Swiper>
    </div>
  )
}
