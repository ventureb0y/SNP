import Link from 'next/link'
import styles from './Delivery.module.scss'
import * as earth from '@../../../public/earth.png'
import Image from 'next/image'
import { routes } from '@/routes/routes'
import { ImArrowRight2 } from 'react-icons/im'

const Delivery = () => {
    return (
        <section className={styles.delivery}>
            <div className={styles.delivery__container}>
                <h5 className={styles.delivery__title}>ДОСТАВКА ПО ВСЕЙ РОССИИ!</h5>
                <span className={styles.delivery__text}>Время ожидания до 2 недель</span>
                <span className={styles.delivery__text}>Гарантия сохранности товара</span>
                <Link href={routes.catalog} className={styles.delivery__link}>ЗАКАЗАТЬ
                    <ImArrowRight2 className={styles.delivery__link_icon}/>
                </Link>
            </div>
            <Image alt='earth' src={earth} className={styles.delivery__earth}/>
        </section>
    )
}

export default Delivery