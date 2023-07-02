import { api } from "@/routes/api"

export const getBrands = async () => {
    const reqBrands = await fetch(api.getBrands, {next: {revalidate: 300}})
    const brands = await reqBrands.json()
    return brands.data
}