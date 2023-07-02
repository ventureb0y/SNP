'use client'
import Header from '@/components/Header/Header'
import styles from './Cart.module.scss'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import useCartStore from '@/store/cart/cartStore'
import { routes } from '@/routes/routes'
import { FaTrash } from 'react-icons/fa';
import { setPriceStyle } from '@/utils/stylePrice'

const Cart = () => {

    useEffect(() => {
        trigger()
    }, [])

    const trigger = () => {
        setPrice()
        setDiscount()
        setAmount()
    }

    const [products, quantity] = useCartStore((state) => [state.products, state.quantity])
    const [price, setPrice] = useCartStore((state) => [state.price, state.setPrice])
    const [discount, setDiscount] = useCartStore((state) => [state.discount, state.setDiscount])
    const [amount, setAmount] = useCartStore((state) => [state.amount, state.setAmount])
    const [increaseProduct, decreaseProduct, removeProduct] = useCartStore((state) => [state.increaseProduct, state.decreaseProduct, state.removeProduct])

    return (
        <>
            <Header/>
                <section className={styles.cart}>
                    <div className={styles.cart__container}>
                        <div className={styles.cart__products}>
                            {products.length != 0 ? products.map((product) => (
                                <div className={styles.cart__product}>
                                <div className={styles.cart__product_image}>
                                    <Image className={styles.cart__product_image_image} alt='xd' fill src={`http://127.0.0.1:1337${product.images[0].attributes.url}`}/>
                                </div>
                                <div className={styles.cart__product_info}>
                                    <div>
                                        <h3 className={styles.cart__product_info_title}>{product.name}</h3>
                                        <ul className={styles.cart__product_info_dies}>
                                            {
                                                product.dies?.map((die) => (
                                                    <li>{die}</li>
                                                ))
                                            }
                                        </ul>
                                        <div className={styles.cart__product_info_pricebox}>
                                            <span className={styles.cart__product_info_pricebox_price}>{setPriceStyle(product.price)}</span>
                                            <span className={styles.cart__product_info_pricebox_oldprice}>{setPriceStyle(product.oldprice)}</span>
                                        </div>
                                    </div>
                                    <ul className={styles.cart__product_info_buttons}>
                                        <li onClick={(e) => {removeProduct(e.target.id), trigger()}} id={product.id} className={styles.cart__product_info_buttons_delete}>
                                            <span className={styles.cart__product_info_buttons_delete_text}>
                                                Удалить
                                            </span>
                                            <FaTrash className={styles.cart__product_info_buttons_delete_icon}/>
                                        </li>
                                        <li onClick={(e) => {decreaseProduct(e.target.id), trigger()}} id={product.id} className={styles.cart__product_info_buttons_x}>-</li>
                                        <li className={styles.cart__product_info_buttons_amount}>{quantity.filter((q) => q.id === product.id)[0].quantity} шт</li>
                                        <li onClick={(e) => {increaseProduct(e.target.id), trigger()}} id={product.id} className={styles.cart__product_info_buttons_x}>+</li>
                                    </ul>
                                </div>
                            </div>
                            )) : <h5 className={styles.cart__product_empty}>Ваша корзина пуста</h5>}
                        </div>
                        <div className={styles.cart__check}>
                            <h5 className={styles.cart__check_title}>Ваша корзина</h5>
                            <ul className={styles.cart__check_els}>
                                <li className={styles.cart__check_els_el}><span>Товары ({amount})</span><span>{setPriceStyle(price)}</span></li>
                                <li className={styles.cart__check_els_el}><span>Скидка</span><span className={styles.cart__check_els_el_discount}>- {setPriceStyle(discount)}</span></li>
                                <li className={styles.cart__check_els_price}><span>Общая стоимость:</span><span className={styles.cart__check_els_price_price}>{setPriceStyle(price - discount)}</span></li>
                            </ul>
                            <Link href={(price - discount) !== 0 ? routes.payment : routes.cart} className={styles.cart__check_button}>К ОФОРМЛЕНИЮ</Link>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default Cart