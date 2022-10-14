import { useState } from 'react'
import styles from './style.module.scss'
export const AboutUs = () => {
  const [showDetail, setShowDetail] = useState(false)
  const handleShowDetail = () => {
    setShowDetail(!showDetail)
  }
  return (
    <div className={`${styles.aboutUs } gray-color`}>
    <h3 className=''>Заказать суши в Новой Каховке</h3>
    <p> Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Каховке с доставкой на дом или в офис.</p>
    <ul>В нашем меню более 20 видов суши:
      
      <li>Классические с сырым лососем, тунцом, окунем.</li>
      <li>Экзотические с тигровой креветкой, морским гребешком.</li>
      <li>Пикантные с копченым лососем, угрем.</li>
    </ul>
    <div className={!showDetail ? styles.blure : styles.blure + ' ' + styles.active}>
      <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь</p>
    </div>
    <span 
      className={`${!showDetail ? styles.moreDetailesBtn : styles.moreDetailesBtn + ' ' + styles.active} orange-color`}
      onClick={handleShowDetail}
    >Подробнее</span>
  </div>
  )
}
