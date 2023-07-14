import Header from '@/components/Header/Header'
import styles from './Payment.module.scss'
import Footer from '@/components/Footer/Footer'
import { ImArrowRight2 } from 'react-icons/im'
import useDeliveryStore from '@/store/cart/deliveryStore'
import useCartStore from '@/store/cart/cartStore'
import Link from 'next/dist/client/link'
import { api } from '@/routes/api'

const Payment = () => {
    const sendData = (e) => {
        e.preventDefault()
    
        const data = {
            deliveryType: e.target.delivery.value,
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address?.value || 'Самовывоз'
        } 
        console.log(data, price)
        
    }
    const [deliveryType, setDeliveryType] = useDeliveryStore(state => [state.deliveryType, state.setDeliveryType])
    const price = useCartStore(state => state.price)
    return (
        <>
            <Header/>
                <section className={styles.payment}>
                    <div className={styles.payment__container}>
                        <form onSubmit={(e) => {sendData(e)}} className={styles.payment__form}>
                        <h3 className={styles.payment__title}>
                            Выберите вариант получения заказа
                        </h3>
                        <div className={styles.payment__radiobox}>
                            <input onClick={(e) => {setDeliveryType((e.target as HTMLInputElement).value)}} name='delivery' value={'Самовывоз'} className={styles.payment__radio} type="radio" />
                            <label>Самовывоз</label>
                        </div>
                        <div className={styles.payment__radiobox}>
                            <input onClick={(e) => {setDeliveryType((e.target as HTMLInputElement).value)}} name='delivery' value={'Доставка CDEK'} className={styles.payment__radio} type="radio" />
                            <label>Доставка CDEK</label>
                        </div>
                        <div className={styles.payment__radiobox}>
                            <input onClick={(e) => {setDeliveryType((e.target as HTMLInputElement).value)}} name='delivery' value={'Доставка ПОЧТОЙ РОССИИ'} className={styles.payment__radio} type="radio" />
                            <label>Доставка ПОЧТОЙ РОССИИ</label>
                        </div>
                        <h3 className={styles.payment__title2}>
                            Заполните необходимые данные
                        </h3>
                            <input name='name' required className={styles.payment__input} type="text" placeholder='ФИО'/>
                            <input name='email' required className={styles.payment__input} type="email" placeholder='EMAIL'/>
                            <input name='phone' required className={styles.payment__input} type="text" placeholder='НОМЕР ТЕЛЕФОНА'/>
                            {deliveryType !== 'Самовывоз' && <input name='address' required className={styles.payment__input} type="text" placeholder='АДРЕС ДОСТАВКИ ИЛИ ПУНКТА ВЫДАЧИ'/>}
                            <div className={styles.payment__checkbox}>
                                <input required name='check' type="checkbox" className={styles.payment__check}/>
                                <label htmlFor="check">Я согласен(на) с <Link className={styles.payment__checkbox_link} target='_blank' href={api.getPolicy}>условиями обработки</Link> персональных данных</label>
                            </div>
                            <button type='submit' className={styles.payment__button}>ОТПРАВИТЬ
                                <ImArrowRight2 className={styles.payment__button_icon}/>
                            </button>
                        </form>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Payment