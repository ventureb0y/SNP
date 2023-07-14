import Link from 'next/link'
import styles from './Footer.module.scss'
import { routes } from '@/routes/routes'
import { api } from '@/routes/api'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                    <ul className={styles.footer__menu}>
                        <li>
                            <Link href={routes.main} className={styles.footer__menu_link}>Главная</Link>
                        </li>
                        <li >
                            <Link href={routes.catalog} className={styles.footer__menu_link}>Каталог</Link>
                        </li>
                        <li >
                            <Link href={routes.contacts} className={styles.footer__menu_link}>Контакты</Link>
                        </li>
                        <li >
                            <Link href={routes.cart} className={styles.footer__menu_link}>Корзина</Link>
                        </li>
                    </ul>
                    <div className={styles.footer__data}>
                    <Link className={styles.footer__pk} target='_blank' href={api.getOferta}>Договор оферты</Link>
                        <Link className={styles.footer__pk} target='_blank' href={api.getPolicy}>Политика конфиденциальности</Link>
                        <span className={styles.footer__copyright}>© 2023, Scenit Russia</span>
                    </div>
                <iframe className={styles.footer__map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5904877678304!2d38.978028576496!3d45.03323796208968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f97a497ad25%3A0x358b01c53f355890!2z0YPQuy4g0JTQu9C40L3QvdCw0Y8sIDE1NCwg0JrRgNCw0YHQvdC-0LTQsNGALCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUwMDAw!5e0!3m2!1sru!2sru!4v1687357395824!5m2!1sru!2sru" loading="lazy" ></iframe>
            </div>
        </footer>
    )
}

export default Footer