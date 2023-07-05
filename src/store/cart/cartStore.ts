import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Product = {
    id: number,
    name: string,
    price: number,
    oldprice: number,
    dies: string[],
    images: {
            data: [
                {
                    attributes: {
                        url: string
                    }
                }
            ]
    }
}

type Quantuty = {
    id: number,
    quantity: number
}

interface CatalogState {
    products: Product[],
    quantity: Quantuty[],
    price: number,
    discount: number,
    amount: number,
  
    increaseProduct: (by: number) => void,
    decreaseProduct: (by: number) => void,
    addProduct: (Product) => void,
    removeProduct: (by: number) => void,
    setPrice: () => void,
    setDiscount: () => void,
    setAmount: () => void,
  }




const useCartStore = create<CatalogState>()(persist((set, get) => ({
    products: [],
    quantity: [],
    price: 0,
    discount: 0,
    amount: 0,

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
        set({
            products: [...get().products, { 
                id: product.id,
                name: product.attributes.name,
                price: product.attributes.price,
                oldprice: product.attributes.old_price,
                dies: product.attributes.dies?.split(', '),
                images: product.attributes.images.data,
            }
            ]
        })            
        
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
        storage: createJSONStorage(() => sessionStorage),
    })
)

export default useCartStore