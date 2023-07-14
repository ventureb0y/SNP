import Header from '@/components/Header/Header'
import styles from './Contacts.module.scss'
import Footer from '@/components/Footer/Footer'

const Contacts = () => {
    return (
        <>
        <Header/>
            <section className={styles.contacts}>
                <div className={styles.contacts__container}>
                    <h3 className={styles.contacts__title}>Контакты</h3>
                    <ul className={styles.contacts__contacts}>
                        <li>
                            <span>Номер телефона: </span>
                            <span>+0 (000) 000-00-00</span>
                        </li>
                        <li>
                            <span>Email: </span>
                            <span>Example@mail.com</span>
                        </li>
                    </ul>
                    <h3 className={styles.contacts__title}>Данные о компании</h3>
                    <ul className={styles.contacts__contacts}>
                        <li>
                            <span>ИП Псрдиян Андрей Оганович</span>
                        </li>
                        <li>
                            <span>ИНН: </span>
                            <span>612202779072</span>
                        </li>
                        <li>
                            <span>Огрнип: </span>
                            <span>322619600049351</span>
                        </li>
                    </ul>
                </div>
            </section>
        <Footer/>
        </>
    )
}

export default Contacts