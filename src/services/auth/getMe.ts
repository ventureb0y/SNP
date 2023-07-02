import { api } from "@/routes/api"


export const getMe = async (accessToken: string) => {
    const req = await fetch (api.getMe, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + accessToken
        },
    })
    const res = req.json()
    return res
}