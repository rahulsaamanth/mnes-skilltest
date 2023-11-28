"use client"

import { AppDispatch, useAppSelector } from "@/redux/store"
import React, { useEffect } from "react"
import { DataTable } from "../data-table"
import { columns } from "../columns"
import { useDispatch } from "react-redux"
import { ProductsState } from "@/types"
import { setProducts } from "@/redux/features/products-slice"

const LaptopsPage = () => {
  const products = useAppSelector((state) => state.ProductsReducer.products)

  const laptops = products.filter((product) => product.category === "laptops")

  const dispatch = useDispatch<AppDispatch>()
  // fetching api multiple time due to production issues

  useEffect(() => {
    async function requestData() {
      const url = "https://dummyjson.com/products"
      const response = await fetch(url)
      const data: ProductsState = await response.json()

      dispatch(setProducts(data))
    }
    try {
      requestData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Laptops</h1>
        <DataTable columns={columns} data={laptops} />
      </div>
    </section>
  )
}

export default LaptopsPage
