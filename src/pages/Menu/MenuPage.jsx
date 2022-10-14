import styles from './style.module.scss'
import { useSelector } from 'react-redux'

export const MenuPage = () => {
    const toRender = useSelector(state => state.menu.menu).filter((item) => item !== String(item))
    console.log(toRender)
    return (
        <div className={styles.menu}>
            <div className="containerWrapper">
                <div className={styles.menuList}>
                {toRender.map((item, index) => (
                    <div key={index} className={styles.menuList_item}>
                        <img src={item.image} alt="" />
                        <p className={styles.name}>{item.name}</p>
                        <div className={styles.information}>
                            <span className={styles.cost}>{item.cost} &#8372; </span>
                            <span className={styles.size}> / {item.size}</span>
                        </div>
                        <span className={styles.addInBasket}></span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
