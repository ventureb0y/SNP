import { create } from 'zustand'

import { getProducts } from '@/services/catalog/getProducts'
import { getBrands } from '@/services/catalog/getBrands'
import { getProductTypes } from '@/services/catalog/getProductTypes'

type Product = {
  id: number,
  attributes: {
      name: string,
      price: number,
      old_price: number,
      description: string,
      dies: string,
      images: {
          data: [
              {
                  attributes: {
                      url: string
                  }
              }
          ]
      }
      brand: {
        data: {
          attributes: {
            brand_name: string
          }
        }
      }
      product_type: {
        data: {
          attributes: {
            product_type: string
          }
        }
      }
}
}



interface CatalogState {
  products: Product[],
  prodData: [],
  brands: [],
  product_types: [],
  search: string,
  brand: [],

  setSearch: (by: string) => void,
  getProducts: () => void,
  getBrands: () => void,
  getProductTypes: () => void,
  startSearch: (search, brands, types) => void
}

const useCatalogStore = create<CatalogState>((set, get) => ({
  products: [],
  prodData: [],
  brands: [],
  product_types: [],
  search: '',
  brand: [],

  setSearch: (e: string) => set({search: e}),
  getProducts: async () => set({ prodData: await getProducts(), products: await getProducts()}),
  getBrands: async () => set({ brands: await getBrands() }),
  getProductTypes: async () => set({ product_types: await getProductTypes() }),
  startSearch: (search, brands, types) => {
    const prod = get().prodData.filter((prod: Product) => prod.attributes.name.toLowerCase().includes(search.toLowerCase()))
    const brandedprod: Product[] = []
    const typedprod: Product[] = []

    if (brands.length != 0) {
      brands.map((b) => {
        prod.map((prod: Product) => prod.attributes.brand.data.attributes.brand_name === b ? brandedprod.push(prod) : '')
      })
    }
    else {
      prod.map((prod) => brandedprod.push(prod))
    }

    if (types.length != 0) {
      types.map((t) => {
        brandedprod.map((p: Product) => p.attributes.product_type.data.attributes.product_type === t ? typedprod.push(p) : '')
      })
    }
    else {
      brandedprod.map((p) => typedprod.push(p))
    }
  
  set({ products: typedprod})
  }
  
}))

export default useCatalogStore