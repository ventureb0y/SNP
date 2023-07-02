import { create } from 'zustand'

import { getProducts } from '@/services/catalog/getProducts'
import { getBrands } from '@/services/catalog/getBrands'
import { getProductTypes } from '@/services/catalog/getProductTypes'

const useCatalogStore = create((set, get) => ({
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
    const prod = get().prodData.filter((prod) => prod.attributes.name.toLowerCase().includes(search.toLowerCase()))
    const brandedprod: [] = []
    const typedprod: [] = []

    if (brands.length != 0) {
      brands.map((b) => {
        prod.map((prod) => prod.attributes.brand.data.attributes.brand_name === b ? brandedprod.push(prod) : '')
      })
    }
    else {
      prod.map((prod) => brandedprod.push(prod))
    }

    if (types.length != 0) {
      types.map((t) => {
        brandedprod.map((p) => p.attributes.product_type.data.attributes.product_type === t ? typedprod.push(p) : '')
      })
    }
    else {
      brandedprod.map((p) => typedprod.push(p))
    }
  
  set({ products: typedprod})
  }
  
}))

export default useCatalogStore