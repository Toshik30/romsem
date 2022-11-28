import React, {useState} from 'react'
import styles from './style.module.scss'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useDispatch } from 'react-redux'
import { paymentCard } from '../../reducers/slices/paymentSlice'

const CreditCard = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [focus, setFocus] = useState('')

    let DDYY = expiry?.match(/.{1,2}/g)?.toString()
    let DD = Number(DDYY?.split(',')[0])
    let YY = Number(DDYY?.split(',')[1])

    const isValidNumber = number === '' || (Number(number - number) === 0 && number.length >= 14)
    const isValidName =  name === '' || (name.length >= 0 &&  name.length >= 6)
    const isValidDate = expiry === '' || (DD <= 12 && YY >= 22)
    const isValidCvv = cvv === '' || (cvv.length !== 0 && cvv.length === 3 )

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`You card number is : ' ${number}`)
    }
    return (
        <div className={styles.cardsWrapper}>
            <Cards
                className='customCards'
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvv}
                focused={focus}
            />
            <form  className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={isValidNumber ? styles.input : styles.input + ' error'} 
                    type="tel" 
                    name='number'
                    required
                    minLength={14}
                    maxLength={16}
                    placeholder='Card Number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input
                    className={isValidName ? styles.input : styles.input + ' error'} 
                    type="text" 
                    name='name'
                    minLength={6}
                    placeholder='Name'
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <div className={styles.inputBlock}>
                    <input
                        className={isValidDate  ? styles.input : styles.input + ' error' } 
                        type="text" 
                        name='expiry' 
                        placeholder='MM/YY'
                        required
                        value={expiry}
                        minLength={4}
                        maxLength={4}
                        onChange={e => setExpiry(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                    <input
                        className={isValidCvv ?  styles.input : styles.input + ' error'} 
                        type="tel" 
                        name='cvc'
                        required
                        minLength={3}
                        maxLength={3}
                        placeholder='CVV'
                        value={cvv}
                        onChange={e => setCvv(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Оплатить" 
                    disabled={!isValidNumber || !isValidName || !isValidDate || !isValidCvv  }
                    className={styles.input} 
                    onClick={() => dispatch(paymentCard([number, name, expiry, cvv]))}
                />
            </form>
        </div>
    )
}

export default CreditCard