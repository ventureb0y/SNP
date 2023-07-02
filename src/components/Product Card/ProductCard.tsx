import Link from 'next/link'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { routes } from '@/routes/routes'
import { setPriceStyle } from '@/utils/stylePrice'

type Props = {
    id: number
    image: string,
    name: string,
    price: number,
    old_price: number
}

const ProductCard = ({ id, image, name, price, old_price }: Props) => {
    return (
        <>
            <div key={name} className={styles.product}>
                <Link href={routes.product(id)} className={styles.product_image}>
                    { price < old_price ? 
                    <span className={styles.product_discount}> -{((1 - (price / old_price)).toFixed(2)) * 100}%</span> : ''}
                    <Image className={styles.product_image_image} alt={name} fill src={image}/>
                </Link>
                <div>
                    <span className={styles.product_price}>{setPriceStyle(price)}</span>
                    <span className={styles.product_oldprice}>{setPriceStyle(old_price)}</span>
                </div>
                <Link href={routes.product(id)} className={styles.product_name}>{name}</Link>
                <Link href={routes.product(id)} className={styles.product_link}>КУПИТЬ</Link>
            </div>
        </>
    )
}

export default ProductCard