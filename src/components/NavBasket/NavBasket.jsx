import React from 'react'
import Basket from '../Basket/Basket'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closePopup, openPopup } from '../../reducers/slices/menuSlice'
import CreditCard from '../CreditCard/CreditCard'
import { useState } from 'react'
export const NavBasket = () => {
  const dispatch = useDispatch()
  const userBasket = useSelector(state => state.menu.basket)
  const popupIsOpen = useSelector(state => state.menu.popupIsOpen)
  const [isMethodPayment, setMethodPayment] = useState(false)
  return (
    <div>
    <div className={styles.navBasket}>
        <div className={styles.basketBlock}>
            <h3>{userBasket.length === 0 ? 'Ваша корзина пуста' : 'Ваша корзина'}</h3>
            <Basket/>
            {userBasket.length === 0? <span className="gray-color">Добавьте же скорее что-нибудь!</span> : <></>}
            <span className={styles.promoution} onClick={() => dispatch(openPopup(popupIsOpen))}>
              {userBasket?.map(({cost}) => cost)?.reduce((acc,num) => acc + num, 0) >= 228 ? 
              <span className={styles.approve}>У вас бесплатная доставка</span>: 
              'Бесплатная доставка от 228 грн'
              }
            </span>
        </div>
        <div className={styles.usLocation}>
            <div className={styles.map}></div>
            <span className={styles.map_icon}></span>
            <h3>Укажите адрес</h3>
            <span className="gray-color">И узнайте время доставки</span>
        </div>
    </div>
        {popupIsOpen ? 
        <div className={styles.popup}>
          <div className={popupIsOpen ? styles.popupBlock + ' active' : styles.popupBlock}>
            <span className={styles.closePopup} onClick={() => dispatch(closePopup(popupIsOpen))}></span>
            <h1>Оплата и доставка</h1>
            <div className={styles.methodPayment}>
              <span 
                className={!isMethodPayment ? styles.methodPayment__button : styles.methodPayment__button + ' ' + styles.active }
                onClick={() => setMethodPayment(!isMethodPayment)}
              > Наличные
              </span>
              <span 
                className={!isMethodPayment ? styles.methodPayment__button + ' ' + styles.active : styles.methodPayment__button}
                onClick={() => setMethodPayment(!isMethodPayment)}
              >Карта
              </span>
            </div>
            {!isMethodPayment ? <CreditCard/> : <div>NALICHKA</div>}
            <h2>К оплате : {userBasket?.map(({cost}) => cost)?.reduce((acc,num) => acc + num, 0)}  ₴ </h2>
          </div>
        </div> 
        : 
        <></>
        }
    </div>
  )
}
