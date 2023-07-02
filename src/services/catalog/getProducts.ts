import { api } from "@/routes/api"

export const getProducts = async (name = '', brands = '', product_types= '') => {
    const req = await fetch(api.getProducts+`?populate=images&populate=brand&populate=product_type`, { 
        next: {revalidate: 300},
    })
    const res = await req.json()
    return res.data
}