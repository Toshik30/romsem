import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="containerWrapper">
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_nav}>
                    <Link to=''>О компании</Link>
                    <Link to=''>Доставка и оплата</Link>
                    <Link to=''>Лента материалов</Link>
                    <Link to=''>Политика возврата</Link>
                </div>
                <div className={styles.footer_socialMedia}>
                    <strong>Введите номер</strong>
                    <input type="phone" placeholder='+380 (__) ___ __ __'  />
                    <span>Выберите удобный мессенджер для общения</span>
                    <div className={styles.footer_socialMedia_icons}>
                        <span className={styles.icon_viber}></span>
                        <span className={styles.icon_telegram}></span>
                        <span  className={styles.icon_instargam}></span>
                    </div>
                </div>
                <div className={styles.footer_contacts}>
                    <a href="/" >Тел: +996 705 188 955 </a>
                    <a href="/">Тел: +996 555 188 955</a>
                    <a href="/">Адрес:Бакаева 126</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
