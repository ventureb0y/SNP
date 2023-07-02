import Image from 'next/image'
import styles from './Reviews.module.scss'
import * as avatar from '@/../../public/Avatar.png'
import * as star from '@/../../public/rev_star.png'

const reviewsData = [
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
    {
        avatar: avatar,
        name: 'Иван Петров',
        stars: 5,
        text: 'Регулярно покупаю витамины для себя и своей семьи. Всем рекомендую данный магазин!'
    },
]

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.reviews__container}>
                <h5 className={styles.reviews__title}>ОТЗЫВЫ</h5>
                <div className={styles.reviews__cardbox}>
                    {reviewsData.map((e) => 
                    <div className={styles.reviews__card}>
                        <Image alt={e.name} src={e.avatar}/>
                        <span className={styles.reviews__card_name}>
                            {e.name}
                        </span>
                        <span className={styles.reviews__card_stars}>
                            {Array.from(Array(e.stars).keys()).map(() => <Image alt='star' src={star} className={styles.reviews__card_stars_star}/>)}
                        </span>
                            {e.text} 
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Reviews