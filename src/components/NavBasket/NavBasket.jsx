import React from 'react'
import styles from './style.module.scss'
export const NavBasket = () => {
  return (
    <div className={styles.navBasket}>
        <div className={styles.basketBlock}>
            <h3>Ваша корзина пуста.</h3>
            <span className="gray-color">Добавьте же скорее что-нибудь!</span>
            <span className={styles.promoution}>Бесплатная доставка от 228 грн</span>
        </div>
        <div className={styles.usLocation}>
            <div className={styles.map}></div>
            <span className={styles.map_icon}></span>
            <h3>Укажите адрес</h3>
            <span className="gray-color">И узнайте время доставки</span>
        </div>
    </div>
  )
}
