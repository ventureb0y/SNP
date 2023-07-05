import Advantages from "@/components/Index Page/Advantages/Advantages"
import Delivery from "@/components/Index Page/Delivery/Delivery"
import Feedback from "@/components/Index Page/Feedback/Feedback"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MainSection from "@/components/Index Page/Main Section/MainSection"
import MiniCatalog from "@/components/Index Page/Our Choice/MiniCatalog"
import Partners from "@/components/Index Page/Partners/Partners"
import Reviews from "@/components/Index Page/Reviews/Reviews"
import { Rubik } from 'next/font/google'
import { getProducts } from "@/services/catalog/getProducts"
import { getHomeInfo } from "@/services/home/getHomeInfo"

const rubik = Rubik({ subsets: ['latin'] })


const Home = ({res, home}) => {
  return (  
    <div className={rubik.className}>
        <Header/>
        <MainSection props={{
          main_title: home.attributes.main_title,
          main_description: home.attributes.main_description
        }}/>
        <Partners props={home.attributes.brand_images}/>
        <Advantages advantages_title={home.attributes.advantages_title}/>
        <Delivery/>
        <Reviews/>
        <MiniCatalog catalog_title={home.attributes.catalog_title} catalog_description={home.attributes.catalog_description} products={res}/>
        <Feedback feedback_title={home.attributes.feedback_title} feedback_description={home.attributes.feedback_description}/>
        <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await getProducts()
  const home = await getHomeInfo()
  return {
      props: {
          res,
          home
      },
      revalidate: 300
  }
}

export default Home
