import styles from './style.module.scss'
import { menu } from './data'
import logo from './../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../reducers/slices/menuSlice'
export const NavBar = () => {    
    const dispatch = useDispatch()
    
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                <h2>Romsem</h2>
            </div>
            <ul>
                {menu.map((item, index) => (
                    <NavLink 
                        key={index} 
                        className={({ isActive }) => (isActive ? `${styles.li} ${styles.active}` : styles.li)} 
                        to={item.path}
                        onClick={() => dispatch(setMenu(item.path))}
                    >
                        <img src={item.icon} alt='icon' />
                        <span >{item.name}</span>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}
