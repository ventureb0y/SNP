import Image from 'next/image'
import styles from './Reviews.module.scss'
import * as star from '@/../../public/rev_star.png'
import { api } from '@/routes/api'

const Reviews = ({reviews}) => {
    return (
        <section className={styles.reviews}>
            <div className={styles.reviews__container}>
                <h5 className={styles.reviews__title}>ОТЗЫВЫ</h5>
                <div className={styles.reviews__cardbox}>
                    {reviews.map((e) => 
                    <div key={e.id} className={styles.reviews__card}>
                        <div className={styles.reviews__card_image}>
                            <Image fill alt={e.attributes.avatar.id} src={api.getImage(e.attributes.avatar.data.attributes.url)}/>
                        </div>
                        <span className={styles.reviews__card_name}>
                            {e.attributes.name}
                        </span>
                        <span className={styles.reviews__card_stars}>
                            {Array.from(Array(e.attributes.stars).keys()).map(() => <Image key={`${e.id}${e.stars}`} alt='star' src={star} className={styles.reviews__card_stars_star}/>)}
                        </span>
                            {e.attributes.description} 
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Reviews