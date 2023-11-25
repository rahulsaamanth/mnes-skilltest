import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductsState } from "@/types"

const initialProductsState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 0,
}

export const ProductsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsState>) => {
      state.products = action.payload.products
      state.total = action.payload.total
      state.skip = action.payload.skip
      state.limit = action.payload.limit
    },
  },
})

export const { setProducts } = ProductsSlice.actions

export default ProductsSlice.reducer
