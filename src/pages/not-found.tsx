import Header from '@/components/Header/Header'
import styles from './NotFound.module.scss'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import { routes } from '@/routes/routes'

const NotFound = async () => {
    return (
        <section className={styles.nf}>
            <Header/>
            <div className={styles.nf__container}>
                <span className={styles.nf__404}>404</span>
                <span className={styles.nf__text}>Упс! Кажется, что такой страницы не существует...</span>
                <div>
                    <Link href={routes.main} className={styles.nf__link}>НА ГЛАВНУЮ</Link>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default NotFound