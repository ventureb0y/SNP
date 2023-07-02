import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next/types";

const DynamicProductWithNoSSR = dynamic(() => import("./Product"), {
  ssr: false,
});

export const getStaticPaths: GetStaticPaths= async () => {
    const data = await fetch('http://127.0.0.1:1337/api/products', {next: {revalidate: 300}})
    const path = await data.json()
    const paths = path.data.map((prod: Data) => ({params: { product: `${prod.id}` }}))
    return {
        paths,
        fallback:'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: { params: {product: string}}) => {
    const req = await fetch(`http://127.0.0.7:1337/api/products/${params.product}?populate=images`, {next: {revalidate: 60}})
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