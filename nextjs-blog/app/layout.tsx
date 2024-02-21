
import './ui/global.css'
import CartPage from './home/page'
import  AllProducts from './cards/page'
import BrowseBy from './cards/page'
import SlideCategories from './files/page'
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

        <body>
          {/* <SlideCategories/> */}
          {children}
         </body>
      </html>
    )
  }