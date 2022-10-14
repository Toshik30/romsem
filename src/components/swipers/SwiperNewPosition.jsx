import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataPopularSets } from '../../data/slidesGoodsList';
import { Navigation,Autoplay } from 'swiper';
import styles from './style.module.scss'
export const SwiperNewPosition = () => {
  return (

    <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className={styles.swiperMorePopular}
        pagination={{
            clickable: true,
        }}
    >
        <div className="wrapper">
        {dataPopularSets.map((item,index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.swiperSlide_description}>
                    <img src={item.image} alt="slide" />
                    <strong>{item.name}</strong>
                    <span className='gray-color'>{item.size}</span>
                </div>
                <div className={styles.swiperSlide_nav}>
                    <h2>{item.price} &#8372;</h2>
                    <button className='primaryButton small'>Добавить</button>
                </div>
            </SwiperSlide>
        ))}
        </div>
    </Swiper>      
  )
}
