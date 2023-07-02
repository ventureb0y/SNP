import { api } from "@/routes/api"

export const SignInUser = async (email: string, password: string) => {
    const IsSignedUp = await fetch(api.signin, 
        {
            body: JSON.stringify({
                identifier: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        }
    )
    const res = await IsSignedUp.json()
    return res
}