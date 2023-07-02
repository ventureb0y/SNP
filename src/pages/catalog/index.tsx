import Catalog from "@/components/Catalog/Catalog"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { getBrands } from "@/services/catalog/getBrands"
import { getProductTypes } from "@/services/catalog/getProductTypes"
import { getProducts } from "@/services/catalog/getProducts"
import { GetStaticProps } from "next"


const Catalogg = (props) => {
  
  return (
    <>
        <Header/>
        <Catalog data={props}/>
        <Footer/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts()
  const brands = await getBrands()
  const types = await getProductTypes()
  return{
      props: {
          products,
          brands,
          types
      },
      revalidate: 300
  }
}

export default Catalogg