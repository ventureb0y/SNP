import { api } from "@/routes/api"

export const getHomeInfo = async () => {
    const req = await fetch(api.getHomeInfo + '?populate=brand_images', { 
        next: {revalidate: 300},
    })
    const res = await req.json()
    return res.data
}