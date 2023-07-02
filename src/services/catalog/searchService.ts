import { api } from "@/routes/api"


export const searchRequest = async (formData) => {
    formData.preventDefault()
    const req = await fetch(api.getProducts, {
        body: JSON.stringify({

        }), 
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    })    
}