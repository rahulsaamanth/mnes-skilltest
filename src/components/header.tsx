"use client"

import React from "react"

import Link from "next/link"
import { useRouter, useSelectedLayoutSegment } from "next/navigation"

import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { logOut } from "@/redux/features/auth-slice"

const Header = () => {
  const { username, isAuth } = useAppSelector(
    (state) => state.authReducer.value
  )

  const dispatch = useDispatch<AppDispatch>()
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  const router = useRouter()

  const handleLogout = () => {
    dispatch(logOut())
    router.replace("/")
  }

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="md:hidden">
            <span className="font-bold text-xl flex">Logo</span>
          </Link>
        </div>
        {isAuth && (
          <>
            <div className="flex items-center gap-4 w-full justify-center">
              <span>welcome</span>

              <span>
                <Icon icon="uil:user" />
              </span>
              <span>{username}</span>
            </div>
          </>
        )}
        <div className="hidden md:block">
          <button
            onClick={handleLogout}
            className="h-8 w-auto rounded-md px-2 bg-zinc-300 flex items-center justify-center text-center"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
