import '../globals.css'
import { Navbar, Footer } from '@/components'
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: 'Motiondrive',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='relative'>
              <Navbar />
              {children}
              <Footer />
          </body>
      </html>
    </ClerkProvider>
  )
}
