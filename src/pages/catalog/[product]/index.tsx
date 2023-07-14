import { getProducts } from "@/services/catalog/getProducts";
import { Product } from "@/types/Product.type";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next/types";

type Data = {
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

const DynamicProductWithNoSSR = dynamic(() => import("@/components/ProductPage/Product"), {
  ssr: false,
});

export const getStaticPaths: GetStaticPaths= async () => {
    const path = await getProducts()
    const paths = path.map((prod: Data) => ({params: { product: `${prod.id}` }}))
    return {
        paths,
        fallback:'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: { params: {product: string}}) => {
    const req = await fetch(`https://admin.scenit-russia.ru/api/products/${params.product}?populate=images`, {next: {revalidate: 60}})
    const res: Product = await req.json()
    return {
        props: {
            res
        },
        revalidate: 60
    }
}

export default function R({res}) {
  return (
    <div>
      <DynamicProductWithNoSSR res={res}/>
    </div>
  );
}