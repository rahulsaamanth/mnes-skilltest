// Layout for all the pages in side home , with sidebar
import "../styles/globals.css"
import Header from "@/components/header"
import HeaderMobile from "@/components/header-mobile"
import MarginWidthWrapper from "@/components/margin-width-wrapper"
import PageWrapper from "@/components/page-wrapper"
import SideNav from "@/components/side-nav"
import { ReduxProvider } from "@/redux/provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReduxProvider>
        <div className="flex">
          <SideNav />
          <main className="flex-1 h-max">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </ReduxProvider>
    </>
  )
}
