import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Kar Shopping',
  description: 'Discover your next car dream',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
