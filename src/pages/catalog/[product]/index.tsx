import { getProducts } from "@/services/catalog/getProducts";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next/types";

const DynamicProductWithNoSSR = dynamic(() => import("./Product"), {
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
    const req = await fetch(`https://admin.sport-nutrition-premium.ru/api/products/${params.product}?populate=images`, {next: {revalidate: 60}})
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