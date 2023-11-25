export type SideNavItem = {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export type MenuItemWithSubMenuProps = {
  item: SideNavItem
  toggleOpen: () => void
}

export type InitialState = {
  value: AuthState
}

export type AuthState = {
  isAuth: boolean
  username: string
}

export type ProductsState = {
  products: Product[]
  total: number
  skip: number
  limit: number
}
export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
