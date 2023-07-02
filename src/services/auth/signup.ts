import { api } from "@/routes/api"

export const SignUpUser = async (email: string, password: string) => {
    const IsSignedUp = await fetch(api.signup, 
        {
            body: JSON.stringify({
                username: email,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            cache: 'no-store' 
        }
    )
    const res = await IsSignedUp.json()
    return res
}