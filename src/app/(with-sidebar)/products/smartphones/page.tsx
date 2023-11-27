"use client"

import { useAppSelector } from "@/redux/store"
import React from "react"
import { DataTable } from "../data-table"
import { columns } from "../columns"

const SmartphonesPage = () => {
  const products = useAppSelector((state) => state.ProductsReducer.products)

  const smartphones = products.filter(
    (product) => product.category === "smartphones"
  )

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Products</h1>
        <DataTable columns={columns} data={smartphones} />
      </div>
    </section>
  )
}

export default SmartphonesPage
