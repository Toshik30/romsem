import React from 'react'
import styles from './style.module.scss'
export const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerWrapper}>
                <div className={styles.contactsHeader}>
                    <strong>Наш телефон</strong>
                    <a href="tel:+" className='orange-color'>+996 705 188 955</a>
                    <a href="tel:+" className='orange-color'>+937 999 228 000</a>
                    <div className={styles.workTime}>
                        <span className={styles.workTime_icon}></span>
                        <span className='gray-color'>работаем с 10:00 до 00:00</span>
                    </div>
                </div>
                <div className={styles.navigateHeader}>
                    <div className={styles.userLocation}>
                        <span className='gray-color'>Город:</span>
                        <p>Новая Каховка</p>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.reviews}>
                            <p>Отзывы</p>
                        </div>
                        <div className={styles.payment}>
                            <p>Доставка и оплата</p>
                        </div>
                        <div className={styles.search}>
                            <span className={styles.search_icon}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
