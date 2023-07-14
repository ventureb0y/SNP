import Link from 'next/link'
import styles from './Header.module.scss'
import { routes } from '@/routes/routes'

const Header = () => {
    // const accessToken = await cookies().get('accessToken')?.value
    // const me = await getMe(accessToken)
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    Scenit
                </div>
                <ul className={styles.header__nav}>
                    <li className={styles.header__nav_link}>
                        <Link href={routes.main}>Главная</Link>
                    </li>
                    <li className={styles.header__nav_link}>
                        <Link href={routes.catalog}>Каталог</Link>
                    </li>
                    <li className={styles.header__nav_link}>
                        <Link href={routes.contacts}>Контакты</Link>
                    </li>
                    <li className={styles.header__nav_link}>
                        <Link href={routes.cart}>Корзина</Link>
                    </li>
                </ul>
                <div className={styles.header__phone}>+ 0 (000) 000-00-00</div>

                {/* {!me.error ? "" :
                <div className={styles.header__auth}>
                    <Link href={routes.signin} className={styles.header__auth_signin}>
                        ВОЙТИ
                    </Link>
                    <Link href={routes.signup} className={styles.header__auth_signup}>
                        ЗАРЕГЕСТРИРОВАТЬСЯ
                    </Link>
                </div>
                } */}
            </div>
        </header>
    )
}

export default Header