const main = 'https://admin.scenit-russia.ru'

export const api = {
    signin: main + '/api/auth/local',
    signup: main + '/api/auth/local/register',
    getMe: main + '/api/users/me',

    getHomeInfo: main + '/api/home-page',
    getReviews: main + '/api/reviews',

    getBrands: main + '/api/brands',
    getProductTypes: main + '/api/product-types',
    getProducts: main + '/api/products',
    getImage: (url: string) => {return main + url},

    getOferta: main + '/uploads/Dogovor_oferty_a5ba99afa5.pdf',
    getPolicy: main + '/uploads/Politika_v_otnoshenii_obrabotki_personalnyh_dannyh_39793fba55.pdf',
}