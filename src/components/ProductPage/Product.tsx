import Header from '@/components/Header/Header'
import styles from './ProductPage.module.scss'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '@/routes/api'
import useCartStore from '@/store/cart/cartStore'
import { FaTrash } from 'react-icons/fa'
import { setPriceStyle } from '@/utils/stylePrice'

type Product = {
    data: {
        id: number,
        attributes: {
            name: string,
            price: number,
            old_price: number,
            description: string,
            dies: string,
            images: {
                data: [
                    {
                        attributes: {
                            url: string
                        }
                    }
                ]
            }
        }
    }
}

const ProductPage = ({ res }) => {
    const [img, setImage] = useState('')
    const { data }: Product = res
    const { id } = data
    const { name, price, old_price, description, dies, images } = data.attributes
    const url = images.data[0].attributes.url
    const image_link = api.getImage(url)
    const die = dies ? dies.split(', ') : ''
    const [quantity, addProduct] = useCartStore((state) => [state.quantity, state.addProduct])
    const [increaseProduct, decreaseProduct, removeProduct] = useCartStore((state) => [state.increaseProduct, state.decreaseProduct, state.removeProduct])
    const quant = quantity.filter((q) => q.id === id)
    useEffect(() => {
        setImage(image_link)
    }, [image_link])
    
    return (
        <>
            <Header/>
                <section className={styles.product}>
                    <div className={styles.product__container}>
                        <div className={styles.product__gallery}>
                        {images.data.length > 0 ? <div className={styles.product__gallery_images}>
                                {images.data.map((e) => 
                                <div key={e.attributes.url} onClick={() => {setImage(api.getImage(e.attributes.url))}} className={styles.product__gallery_images_imagebox}>
                                    <Image alt='XD' fill src={api.getImage(e.attributes.url)} className={styles.product__gallery_images_imagebox_image}/> 
                                </div>
                                )}
                            </div> : ''}
                            <div className={styles.product__gallery_imagebox}>
                                <Image alt='XD' fill src={img} className={styles.product__gallery_image}/>
                            </div>
                        </div>
                        <div className={styles.product__info}>
                            <h1 className={styles.product__info_title}>
                                {name}
                            </h1>
                            <p className={styles.product__info_desc}>
                                {description}
                            </p>
                            <div className={styles.product__info_chars}>
                                <ul className={styles.product__info_char}>
                                    <li className={styles.product__info_char_line}>Страна производства:</li>
                                    <li className={styles.product__info_char_line}>Упаковка:</li>
                                    <li className={styles.product__info_char_line}>Комплектация: </li>
                                    <li className={styles.product__info_char_line}>Габариты:</li>
                                    <li className={styles.product__info_char_line}>Форма вещества:</li>
                                </ul>
                                <ul className={styles.product__info_char}>
                                    <li className={styles.product__info_char_line}>Страна производства:</li>
                                    <li className={styles.product__info_char_line}>Упаковка:</li>
                                    <li className={styles.product__info_char_line}>Комплектация: </li>
                                    <li className={styles.product__info_char_line}>Габариты:</li>
                                    <li className={styles.product__info_char_line}>Форма вещества:</li>
                                </ul>
                            </div>
                            <ul className={styles.product__info_dies}>
                                {die != '' ? die.map((e) => <li key={e} className={styles.product__info_dies_die}>{e}</li>) : ''}
                            </ul>
                            <span className={styles.product__info_price}>{setPriceStyle(price)}</span>
                            <span className={styles.product__info_oldprice}>{setPriceStyle(old_price)}</span>
                            {quant[0] === undefined ? 
                            <button onClick={() => {addProduct(data)}} className={styles.product__info_button}>В КОРЗИНУ</button> 
                            :
                            <div className={styles.product__info_buttons}>
                                <ul className={styles.product__info_buttons}>
                                        <li onClick={(e) => {removeProduct(Number((e.target as HTMLInputElement).id))}} id={String(id)} className={styles.product__info_buttons_remove}>
                                            <span className={styles.product__info_buttons_remove_text}>
                                                УДАЛИТЬ
                                            </span>
                                            <FaTrash className={styles.product__info_buttons_remove_icon}/>
                                        </li>
                                        <li onClick={(e) => {decreaseProduct(Number((e.target as HTMLInputElement).id))}} id={String(id)} className={styles.product__info_buttons_x}>-</li>
                                        <li className={styles.product__info_buttons_amount}>{quantity.filter((q) => q.id === id)[0].quantity} шт</li>
                                        <li onClick={(e) => {increaseProduct(Number((e.target as HTMLInputElement).id))}} id={String(id)} className={styles.product__info_buttons_x}>+</li>
                                </ul>
                            </div>
                            }
                            </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default ProductPage