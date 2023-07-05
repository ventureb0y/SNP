import { api } from "@/routes/api"

export const getProducts = async () => {
    const req = await fetch(api.getProducts+`?populate=images&populate=brand&populate=product_type`)
    const res = await req.json()
    return res.data
}