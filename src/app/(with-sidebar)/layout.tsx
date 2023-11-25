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
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <ReduxProvider>
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <MarginWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
