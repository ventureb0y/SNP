'use server'
import { cookies } from "next/headers"

const setServerCookies = async (accessToken: string) => {
    cookies().set('accessToken', accessToken, {maxAge: 60*60*24})
}

export default setServerCookies