'use client'
import { api } from '@/routes/api'
import ProductCard from '../Product Card/ProductCard'
import styles from './Catalog.module.scss'
import useCatalogStore from '@/store/catalog/catalogStore'
import { useEffect } from 'react'

const Catalog = ({data}) => {
    const [Products, getProd] = useCatalogStore(state => [state.products, state.getProducts])
    const Brands = data.brands
    const ProductTypes = data.types
    useEffect(() => {
        getProd()
    }, [])
    const sendData = (f) => {
        f.preventDefault()
        const name: string = f.target.search.value
        const brands: string [] = []
        const product_types: string [] = []

        Brands.map((e) => {
            if (f.target[e.attributes.brand_name].checked == true) {brands.push(f.target[e.attributes.brand_name].value)}
        })
        ProductTypes.map((e) => {
            if (f.target[e.attributes.product_type].checked == true) {product_types.push(f.target[e.attributes.product_type].value)}
        })
        startSearch(name, brands, product_types)
    }

    const [setSearch, startSearch] = useCatalogStore(state => [state.setSearch, state.startSearch])

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <form onSubmit={(e) => {sendData(e)}} className={styles.catalog__filters}>
                    <input onChange={(e) => {setSearch(e.target.value)}} name='search' placeholder='Найти...' type="text" className={styles.catalog__filters_search}/>
                    <div className={styles.catalog__filters_brands}>
                        <span className={styles.catalog__filters_title}>Бренды</span>
                            {Brands.map((e) => 
                              <div key={e.id} className={styles.catalog__filters_check}>
                                <input value={e.attributes.brand_name} name={e.attributes.brand_name} type="checkbox" className={styles.catalog__filters_checkbox}/><span>{e.attributes.brand_name}</span>
                             </div>
                            )}
                    </div>
                    <div className={styles.catalog__filters_types}>
                        <span className={styles.catalog__filters_title}>Тип продукта</span>
                        <div className={styles.catalog__filters_types_box}>
                            {ProductTypes.map((e) => 
                              <div key={e.id} className={styles.catalog__filters_check}>
                                <input key={e.attributes.id} value={e.attributes.product_type} name={e.attributes.product_type} type="checkbox" className={styles.catalog__filters_checkbox}/><label>{e.attributes.product_type}</label>
                             </div>
                            )}
                        </div>
                    </div>
                    <button type='submit'  className={styles.catalog__filters_button}>ПОИСК</button>
                </form>
                <div className={styles.catalog__cardbox}>
                    {Products ? Products.map((e) => <ProductCard key={e.id} id={e.id} name={e.attributes.name} price={e.attributes.price} old_price={e.attributes.old_price} image={api.getImage(e.attributes.images.data[0].attributes.url)}/>) : ''}
                </div>
            </div>
        </section>
    )
}

export default Catalog