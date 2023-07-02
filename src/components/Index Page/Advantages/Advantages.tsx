import Image from 'next/image'
import styles from './Advantages.module.scss'

import * as clock from '@/../../public/Clock.png'
import * as hand from '@/../../public/Hand.png'
import * as coin from '@/../../public/Coin.png'
import * as star from '@/../../public/Star.png'

const Content = [
    {
        image: clock,
        text: 'НА РЫНКЕ БОЛЕЕ 10 ЛЕТ'
    }, 
    {
        image: hand,
        text: 'НАМ ДОВЕРЯЮТ СОТНИ КЛИЕНТОВ'
    }, 
    {
        image: coin,
        text: 'СКИДКИ ДЛЯ ПОСТОЯННЫХ КЛИЕНТОВ'
    }, 
    {
        image: star,
        text: 'УНИКАЛЬНАЯ ПРЕМИУМ ПРОДУКЦИЯ'
    }
]



const Advantages = ({advantages_title}) => {
    return (
        <section className={styles.advantages}>
            <div className={styles.advantages__container}>
                <h5 className={styles.advantages__title}>
                    {advantages_title}
                </h5>
                {Content.map((e) => <div className={styles.advantages__card}><Image className={styles.advantages__card_image} alt={`${e.image}`} src={e.image}/><span>{e.text}</span></div>)}
            </div>
        </section>
    )
}

export default Advantages