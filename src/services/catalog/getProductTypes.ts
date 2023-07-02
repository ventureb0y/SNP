import { api } from "@/routes/api"

export const getProductTypes = async () => {
    const reqTypes = await fetch(api.getProductTypes, {next: {revalidate: 300}})
    const types = await reqTypes.json()
    return types.data
}