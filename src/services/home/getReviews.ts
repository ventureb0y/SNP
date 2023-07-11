import { api } from "@/routes/api"

export const getReviews = async () => {
    const req = await fetch(api.getReviews+ '?populate=avatar', { 
        next: {revalidate: 300},
    })
    const res = await req.json()
    return res.data
}