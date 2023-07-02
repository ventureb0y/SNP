import Link from 'next/link'
import styles from './MainSection.module.scss'
import { routes } from '@/routes/routes'
import { ImArrowRight2 } from 'react-icons/im'

const MainSection = ({props}) => {
    return (
        <section className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__offer}>
                    <h1 className={styles.main__offer_title}>
                        {props?.main_title}
                    </h1>
                    <h3 className={styles.main__offer_description}>
                        {props?.main_description}
                    </h3>
                    <Link href={routes.catalog} className={styles.main__offer_link}>
                        В КАТАЛОГ
                        <ImArrowRight2 className={styles.main__offer_link_icon}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MainSection