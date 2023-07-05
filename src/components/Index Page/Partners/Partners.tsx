import Image from 'next/image'
import styles from './Partners.module.scss'
import { api } from '@/routes/api'


const Partners = ({props}) => {

    return (
        <section className={styles.partners}>
            <div className={styles.partners__container}>
                {props.data.map((e) => <div key={e.id} className={styles.partners__image}><Image fill key={`${e.id}`} alt={`${e.id}`} className={styles.partners__image_image} src={api.getImage(e.attributes.url)}/></div>)}
            </div>
        </section>
    )
}

export default Partners