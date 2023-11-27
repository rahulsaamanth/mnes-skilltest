import { Icon } from "@iconify/react"

import { SideNavItem } from "./types"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon icon="ic:outline-dashboard" width="24" height="24" />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <Icon icon="eos-icons:products" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/products" },
      { title: "Smartphones", path: "/products/smartphones" },
      { title: "Laptops", path: "/products/laptops" },
    ],
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Account", path: "/settings/account" },
      { title: "Privacy", path: "/settings/privacy" },
    ],
  },
  {
    title: "Help",
    path: "/help",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    title: "Logout",
    path: "/",
    icon: <Icon icon="icon-park:logout" width="24" height="24" />,
  },
]
