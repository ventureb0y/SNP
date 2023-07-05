import Image from 'next/image'
import styles from './MiniCatalog.module.scss'
import Link from 'next/link'
import { routes } from '@/routes/routes'
import { api } from '@/routes/api'
import { ImArrowRight2 } from 'react-icons/im'
import { Product } from '@/types/Product.type'


const MiniCatalog = ({catalog_title, catalog_description, products}: {catalog_title: string, catalog_description: string, products: Product[]}) => {
    const prodArr: Product[] = products.slice(0, 8)
    const math = (x: number, y: number) => {
       const z = (1 - x / y).toFixed(2)
       return (Number(z) * 100)
    } 

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <div>
                    <h5 className={styles.catalog__title}>
                        {catalog_title}
                    </h5>
                    <span className={styles.catalog__desc}>
                        {catalog_description}
                    </span>
                    <Link href={routes.catalog} className={styles.catalog__link}>В КАТАЛОГ
                        <ImArrowRight2 className={styles.catalog__link_icon}/>
                    </Link>
                </div>
                <div className={styles.catalog__catalog}>
                    {
                        prodArr.map((e) => 
                            <div key={e.id} className={styles.catalog__catalog__product}>
                                <div className={styles.catalog__catalog__product_image}>
                                    {e.attributes.price < e.attributes.old_price && 
                                    <span className={styles.catalog__catalog__product_discount}> -{math(e.attributes.price, e.attributes.old_price)}%</span>}
                                    <Image className={styles.catalog__catalog__product_image_image} fill alt={e.attributes.name} src={api.getImage(e.attributes.images.data[0].attributes.url)}/>
                                </div>
                                    <div>
                                        <span className={styles.catalog__catalog__product_price}>{Intl.NumberFormat("ru", {style: "currency", currency: "RUB", maximumFractionDigits: 0}).format(e.attributes.price)}</span>
                                        <span className={styles.catalog__catalog__product_oldprice}>{Intl.NumberFormat("ru", {style: "currency", currency: "RUB", maximumFractionDigits: 0}).format(e.attributes.old_price)}</span>
                                    </div>
                                    <h4 className={styles.catalog__catalog__product_name}>{e.attributes.name}</h4>
                                <Link href={routes.product(e.id)} className={styles.catalog__catalog__product_link}>КУПИТЬ
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MiniCatalog