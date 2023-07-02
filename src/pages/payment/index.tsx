import Header from '@/components/Header/Header'
import styles from './Payment.module.scss'
import Footer from '@/components/Footer/Footer'

const Payment = () => {
    return (
        <>
            <Header/>
                <section className={styles.payment}>
                    <div className={styles.payment__container}>
        
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Payment