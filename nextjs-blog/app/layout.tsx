
import './ui/global.css'

import CartPage from './homePage/categories'
import  AllProducts from './categorypage/page'
import Categories from './homePage/categories'
import SlideCategories from './homePage/slidecarouss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

        <body>
          {children}
         </body>
      </html>
    )
  }