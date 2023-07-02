import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useCartStore = create(persist((set, get) => ({
    products: [],
    quantity: [],
    price: 0,
    discount: 0,
    amount: 0,

    getCart: () => ({
    }),

    increaseProduct: (id) => {
        get().quantity.map((q) => {
            if (q.id == Number(id)) {
                set((state) => ({
                    quantity: [...state.quantity.filter((q) => (q.id !== Number(id))), {
                        id: Number(id),
                        quantity: q.quantity + 1
                    }]
                }))
            }
        })
    },

    decreaseProduct: (id) => {
        get().quantity.map((q) => {
            if (q.quantity > 1) {
                if (q.id == Number(id)) {
                    set((state) => ({
                        quantity: [...state.quantity.filter((q) => (q.id !== Number(id))), {
                            id: Number(id),
                            quantity: q.quantity - 1
                        }]
                    }))
                }
            }
        })
    },

    addProduct: (product) => {
        set((state) => ({
            products: [...state.products, { 
                id: product.id,
                name: product.attributes.name,
                price: product.attributes.price,
                oldprice: product.attributes.old_price,
                dies: product.attributes.dies?.split(', '),
                images: product.attributes.images.data,
            }
            ]
        }))            
        
            set((state) => ({
                quantity: [...state.quantity, {
                    id: product.id,
                    quantity: 1
                }]
            }))
    },

    removeProduct: (id) => {
        set((state) => ({
            products: [...state.products.filter((p) => (p.id !== Number(id)))],
            quantity: [...state.quantity.filter((q) => (q.id !== Number(id)))]
        }))
    },

    setPrice: () => {
        var price = 0
        get().products.map((p) => {
            get().quantity.map((q) => {

                if (p.id == q.id) {
                    price = price + (p.oldprice * q.quantity)
                }
            })
        })

        set({price: price})
    },

    setDiscount: () => {
        var discount = 0
        get().products.map((p) => {
            get().quantity.map((q) => {

                if (p.id == q.id) {
                    discount = discount + ((p.oldprice - p.price) * q.quantity)
                }
            })
        })

        set({discount: discount})
    },

    setAmount: () => {
        var amount = 0
            get().quantity.map((q) => {
                amount = amount + q.quantity
            })

        set({amount: amount})
    }

    }),
    {
        name: "cart-storage",
        getStorage: () => sessionStorage
    })
)

export default useCartStore