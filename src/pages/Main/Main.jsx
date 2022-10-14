import React from 'react'
import { Link } from 'react-router-dom'
import { AboutUs } from '../../components/AboutUs/AboutUs'
import { SwiperBg } from '../../components/swipers/SwiperBg'
import { SwiperNewPosition } from '../../components/swipers/SwiperNewPosition'
import styles from './style.module.scss'
import { data } from '../../data/data'
export const Main = () => {
  console.log(data.rolls)
  return (
    <div>
      <SwiperBg />
      <div className={styles.mostPopular}>
          <div className={styles.mostPopular_wrapper}>
              <Link to=''><span>Чикен</span></Link>
              <Link to=''><span>С угрем</span></Link>
              <Link to=''><span>Корн дог</span></Link>
              <Link to=''><span>Пицца</span></Link>
              <Link to=''><span>Акции</span></Link>
          </div>
      </div>
      <SwiperNewPosition/>
      <AboutUs />
    </div>
  )
}
