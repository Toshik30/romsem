import React from 'react'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromBasket } from '../../reducers/slices/menuSlice'

const Basket = () => {
    const userBasket = useSelector(state => state.menu.basket)
    console.log(userBasket)
    const dispatch = useDispatch()
    const sum = userBasket.map((item) => item.cost ).reduce((acc,num) => acc + num, 0)
    return (
        <div className={styles.userBasket}>
          {userBasket.map(({cost,name, discount}, index) => (
            <div key={cost + name + index}>
                <p>{name}</p>
                <p>{cost - discount} ₴ </p>
                <span className={styles.deleteItem} onClick={() => dispatch(deleteFromBasket(index))}></span>
            </div>
          ))}
          <strong className='orange-color'>Сумма : {sum}  ₴ </strong>
        </div>
    )
}

export default Basket