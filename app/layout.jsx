import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sahabat Tani Madiun - Toko Alat Pertanian Terpercaya",
  description:
    "Toko alat pertanian terpercaya sejak 1985. Menyediakan berbagai mesin diesel, generator, alat teknik, dan peralatan pertanian berkualitas tinggi dengan harga terjangkau.",
  keywords: "alat pertanian, mesin diesel, generator, toko pertanian madiun, sahabat tani",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}