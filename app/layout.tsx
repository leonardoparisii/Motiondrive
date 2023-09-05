import AuthProvider from '@/components/AuthProvider'
import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the bests car in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        
      <body className='relative'>
        <AuthProvider>
            <Navbar />
            {children}
            <Footer />
        </AuthProvider>
        </body>
    </html>
  )
}
