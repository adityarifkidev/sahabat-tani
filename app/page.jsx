"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  ChevronRight,
  Award,
  Calendar,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <a href="#hero" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/logo.png"
                  alt="Sahabat Tani Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="font-bold text-xl text-gray-800">Sahabat Tani</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
                About Us
              </a>
              <a href="#products" className="text-gray-600 hover:text-orange-500 transition-colors">
                Produk
              </a>
              <a href="#gallery" className="text-gray-600 hover:text-orange-500 transition-colors">
                Galeri
              </a>
              <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                Kontak
              </a>
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/6281217172544?text=Halo%20Sahabat%20Tani%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileMenu}></div>

              {/* Mobile Menu */}
              <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50 md:hidden">
                <nav className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="#about"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                    >
                      About Us
                    </a>
                    <a
                      href="#products"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                    >
                      Produk
                    </a>
                    <a
                      href="#gallery"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                    >
                      Galeri
                    </a>
                    <a
                      href="#faq"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                    >
                      FAQ
                    </a>
                    <a
                      href="#contact"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100"
                    >
                      Kontak
                    </a>

                    {/* Mobile Contact Button */}
                    <div className="pt-4">
                      <a
                        href="https://wa.me/6281217172544?text=Halo%20Sahabat%20Tani%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="block"
                      >
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          <Phone className="w-4 h-4 mr-2" />
                          Hubungi Kami
                        </Button>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">Terpercaya Sejak 1985</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                SAHABAT TANI
                <span className="block text-4xl lg:text-6xl">MADIUN</span>
              </h1>
              <p className="text-xl mb-4 text-white/90">Cari Mesin Murah & Berkualitas?</p>
              <p className="text-lg mb-8 text-white/80">
                Punya Solusinya! Melayani konsumen dengan sepenuh hati dengan pelayanan terbaik.
              </p>
              
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero1.jpg"
                  alt="Sahabat Tani Madiun - Toko Alat Pertanian"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.8/5.0</div>
              <p className="text-gray-600">Rating Kepuasan Konsumen Tokopedia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.7/5.0</div>
              <p className="text-gray-600">Rating Kepuasan Konsumen Shopee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1.8 Ribu</div>
              <p className="text-gray-600">Produk Terjual</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">39 Tahun</div>
              <p className="text-gray-600">Terpercaya Melayani Konsumen</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-600 mb-4">Tentang Kami</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Mendukung Petani dengan
                <span className="text-orange-500"> Peralatan Berkualitas</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Selamat datang di Sahabat Tani, toko alat pertanian terpercaya yang telah berdiri sejak 1985. Senantiasa
                melayani konsumen dengan sepenuh hati dengan pelayanan terbaik. Menerima pemesanan untuk segala jenis
                kebutuhan alat pertanian, mulai dari supplier teknik, mesin diesel, mesin konstruksi, dan masih banyak
                lagi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sahabat Tani Madiun telah membangun reputasi yang kokoh sebagai penyedia solusi terbaik untuk kebutuhan
                alat pertanian modern. Dengan pengalaman puluhan tahun, kami menyediakan berbagai alat pertanian yang
                lengkap dan mutakhir.
              </p>
            </div>

            <div className="relative">
              <div className="bg-orange-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Kualitas Terjamin</h4>
                      <p className="text-white/80 text-sm">Semua produk telah teruji kualitas dan daya tahannya</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Harga Kompetitif</h4>
                      <p className="text-white/80 text-sm">Dapatkan harga terbaik untuk semua kebutuhan Anda</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Layanan Purna Jual</h4>
                      <p className="text-white/80 text-sm">Dukungan teknis dan maintenance berkala</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Produk Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Semua Jenis Mesin Ada di Sahabat Tani Madiun
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Harga Murah, Kualitas Ga Murahan - Temukan berbagai alat pertanian berkualitas tinggi untuk mendukung
              produktivitas Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Mesin Diesel",
              "Generator",
              "Alat Teknik",
              "Power Tools",
              "Traktor",
              "Pompa Air",
              "Mesin Potong",
              "Alat Konstruksi",
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <span className="text-2xl group-hover:text-white">🔧</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {product}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Galeri</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Lihat Koleksi Produk Kami</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Gallery ${item}`}
                      width={400}
                      height={300}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Produk Berkualitas</h3>
                    <p className="text-gray-600 text-sm">Alat pertanian modern dan terpercaya</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">FAQ</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Pertanyaan yang sering diajukan tentang produk dan layanan kami
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  {
                    question: "Apakah produk bergaransi?",
                    answer: "Ya, semua produk kami bergaransi resmi dari distributor.",
                  },
                  {
                    question: "Bagaimana cara pemesanan?",
                    answer: "Anda bisa memesan melalui WhatsApp, telepon, atau datang langsung ke toko.",
                  },
                  {
                    question: "Apakah ada layanan antar?",
                    answer: "Ya, kami menyediakan layanan antar untuk wilayah Madiun dan sekitarnya.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-orange-100 text-orange-600 mb-4">Lokasi</Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Kunjungi Toko Kami</h2>
              <div className="bg-gray-200 rounded-2xl h-64 mb-6 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Jl. Urip Sumoharjo No.52, Mangkujayan</p>
                <p>Kec. Mangkujayan, Kota Madiun, Jawa Timur 63172</p>
              </div>
            </div>

            <div>
              <Badge className="bg-orange-100 text-orange-600 mb-4">Kontak Informasi</Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Toko Sahabat Tani</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                    <p className="text-gray-600">07:30 - 16:30</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">082143498308 - 081217172544</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://wa.me/6281217172544?text=Halo%20Sahabat%20Tani%2C%20saya%20ingin%20bertanya%20tentang%20produk%20alat%20pertanian%20yang%20tersedia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Sahabat Tani Logo"
                  width={50}
                  height={40}
                  className=""
                />
                <span className="font-bold text-xl pb-5">TOKO SAHABAT TANI</span>
              </div>
              <p className="text-white/80 mb-4">
                Toko alat pertanian terpercaya sejak 1985. Melayani dengan sepenuh hati untuk kebutuhan pertanian Anda.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
              <p className="text-white/80 mb-2">Jl. Urip Sumoharjo No.52</p>
              <p className="text-white/80 mb-4">Kota Madiun, Jawa Timur 63172</p>
              <p className="text-white/80">Phone: 081217172544</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/sahabattanimadiun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sahabattanimadiun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@sahabattanimadiun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">MARKETPLACE</h3>
              <div className="space-y-3">
                <a
                  href="https://www.tokopedia.com/sahabattanimadiun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <Image
                      src="/images/tokopedia.png"
                      alt="Tokopedia"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span>Tokopedia</span>
                </a>
                <a
                  href="https://shopee.co.id/sahabattanimadiun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <Image
                      src="/images/shopee.png"
                      alt="Shopee"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span>Shopee</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">Copyright © 2024 by Toko Sahabat Tani</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
