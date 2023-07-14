export const routes = {
    main:'/',
    catalog: '/catalog',
    contacts: '/contacts',
    cart: '/cart',
    product: (id: number) => {return `/catalog/${id}`},
    signin: '/auth/signin',
    signup: '/auth/signup',
    payment: '/payment',
    pk: '/docs/pk.pdf',
    oferta: '/docs/oferta.pdf',

}