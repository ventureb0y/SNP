export const routes = {
    main:'/',
    catalog: '/catalog',
    contacts: '/contacts',
    cart: '/cart',
    product: (id: number) => {return `/catalog/${id}`},
    signin: '/auth/signin',
    signup: '/auth/signup',
    payment: '/payment',

}