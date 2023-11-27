"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import { Bar, Doughnut } from "react-chartjs-2"
import { useEffect, useState } from "react"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { Product, ProductsState } from "@/types"
import { useDispatch } from "react-redux"
import { setProducts } from "@/redux/features/products-slice"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export default function DashBoardPage() {
  const dispatch = useDispatch<AppDispatch>()

  const products = useAppSelector((state) => state.ProductsReducer.products)

  const getCategories = (products: Product[]) => {
    const categories = new Set<string>()

    products.forEach((product) => {
      categories.add(product.category)
    })
    return Array.from(categories)
  }
  const getAverageRatings = (products: Product[]): Record<string, number> => {
    const categoryRatings: Record<string, { sum: number; count: number }> = {}

    products.forEach((product) => {
      const { category, rating } = product

      if (!categoryRatings[category])
        categoryRatings[category] = { sum: 0, count: 0 }
      categoryRatings[category].sum += rating
      categoryRatings[category].count += 1
    })

    const averageRatings: Record<string, number> = {}

    Object.keys(categoryRatings).forEach((category) => {
      const { sum, count } = categoryRatings[category]
      averageRatings[category] = sum / count
    })

    return averageRatings
  }

  const countProductsByCategory = (products: Product[]): number[] => {
    const productCounts: Record<string, number> = {}

    products.forEach((product) => {
      const { category } = product
      if (!productCounts[category]) productCounts[category] = 1
      else productCounts[category] += 1
    })
    const counts: number[] = Object.values(productCounts)
    return counts
  }

  const labels = getCategories(products)

  const ratings = getAverageRatings(products)

  const categoryCount = countProductsByCategory(products)

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Overall average rating of products",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
  }
  const gaugeOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Number of products by category",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Rating",
        data: ratings,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  const gaugeData = {
    labels,
    datasets: [
      {
        label: "Stock",
        data: categoryCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        circumference: 180,
        rotation: -90,
      },
    ],
  }

  return (
    <>
      <div className="h-auto">
        <span className="font-bold text-4xl">Products Dashboard</span>
        <div className="flex items-center justify-center flex-col h-screen">
          <div className="grid place-items-center w-full flex-1 h-1/2 py-6">
            <div className="w-3/4 h-full">
              {/* Doughnut chart is used for gauge chart  */}
              <Doughnut options={gaugeOptions} data={gaugeData} />
            </div>
          </div>
          <div className="grid place-items-center w-full flex-1 h-1/2 py-6">
            <div className="w-3/4 h-full">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
