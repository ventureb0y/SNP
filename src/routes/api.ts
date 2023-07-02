const main = 'http://127.0.0.1:1337'

export const api = {
    signin: main + '/api/auth/local',
    signup: main + '/api/auth/local/register',
    getMe: main + '/api/users/me',

    getHomeInfo: main + '/api/home-page',

    getBrands: main + '/api/brands',
    getProductTypes: main + '/api/product-types',
    getProducts: main + '/api/products',
    getImage: (url: string) => {return main + url},
}