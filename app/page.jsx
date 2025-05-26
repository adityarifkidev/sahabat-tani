"use client"
import { useState, useEffect, useRef } from "react"
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

// Custom hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

// Animation wrapper component
function AnimatedSection({ children, className = "", delay = 0, animation = "fadeInUp" }) {
  const [ref, isVisible] = useScrollAnimation()

  const animationClasses = {
    fadeInUp: isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-8",
    fadeInLeft: isVisible ? "animate-fadeInLeft" : "opacity-0 -translate-x-8",
    fadeInRight: isVisible ? "animate-fadeInRight" : "opacity-0 translate-x-8",
    fadeIn: isVisible ? "animate-fadeIn" : "opacity-0",
    scaleIn: isVisible ? "animate-scaleIn" : "opacity-0 scale-95",
    slideInUp: isVisible ? "animate-slideInUp" : "opacity-0 translate-y-12",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

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
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <a
                href="#hero"
                className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 hover:scale-105"
              >
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
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
              >
                Produk
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
              >
                Galeri
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
              >
                Kontak
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/6281217172544?text=Halo%20Sahabat%20Tani%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fadeIn" onClick={closeMobileMenu}></div>

              {/* Mobile Menu */}
              <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50 md:hidden animate-slideInUp">
                <nav className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="#about"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100 hover:translate-x-2 transition-transform duration-300"
                    >
                      About Us
                    </a>
                    <a
                      href="#products"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100 hover:translate-x-2 transition-transform duration-300"
                    >
                      Produk
                    </a>
                    <a
                      href="#gallery"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100 hover:translate-x-2 transition-transform duration-300"
                    >
                      Galeri
                    </a>
                    <a
                      href="#faq"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100 hover:translate-x-2 transition-transform duration-300"
                    >
                      FAQ
                    </a>
                    <a
                      href="#contact"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-orange-500 transition-colors py-2 border-b border-gray-100 hover:translate-x-2 transition-transform duration-300"
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
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300">
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

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-4 hover:scale-105 transition-transform duration-300">
                Terpercaya Sejak 1985
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">SAHABAT TANI</span>
                <span className="block text-4xl lg:text-6xl hover:scale-105 transition-transform duration-300">
                  MADIUN
                </span>
              </h1>
              <p className="text-xl mb-4 text-white/90">Cari Mesin Murah & Berkualitas?</p>
              <p className="text-lg mb-8 text-white/80">
                Punya Solusinya! Melayani konsumen dengan sepenuh hati dengan pelayanan terbaik.
              </p>
              
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={300} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/hero1.jpg"
                  alt="Sahabat Tani Madiun - Toko Alat Pertanian"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Star, value: "4.8/5.0", label: "Rating Kepuasan Konsumen Tokopedia", delay: 0 },
                { icon: Award, value: "4.7/5.0", label: "Rating Kepuasan Konsumen Shopee", delay: 100 },
                { icon: ShoppingCart, value: "5 Ribu", label: "Produk Terjual", delay: 200 },
                { icon: Calendar, value: "39 Tahun", label: "Terpercaya Melayani Konsumen", delay: 300 },
              ].map((stat, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={stat.delay} className="text-center group">
                  <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
              Video
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Lihat Produk Kami dalam Aksi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Saksikan langsung kualitas dan performa alat pertanian yang kami jual melalui video demonstrasi
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                id: "QEtuIhrHgP8",
                title: "Demo Mesin Diesel Sahabat Tani",
              },
              {
                id: "d4OZ886iIk4",
                title: "Generator Set Berkualitas",
              },
              {
                id: "qseUHfM8ssU",
                title: "Alat Pertanian Modern",
              },
            ].map((video, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="aspect-[9/16]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" delay={400} className="text-center">
            <p className="text-gray-600 mb-4">Ingin melihat lebih banyak video produk kami?</p>
            <a href="https://www.youtube.com/@sahabattanimadiun/shorts" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Kunjungi Channel YouTube Kami
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
                Tentang Kami
              </Badge>
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Pelajari Lebih Lanjut
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200} className="relative">
              <div className="bg-orange-500 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Kualitas Terjamin", desc: "Semua produk telah teruji kualitas dan daya tahannya" },
                    { title: "Harga Kompetitif", desc: "Dapatkan harga terbaik untuk semua kebutuhan Anda" },
                    { title: "Layanan Purna Jual", desc: "Dukungan teknis dan maintenance berkala" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-white/80 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
              Produk Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Semua Jenis Mesin Ada di Sahabat Tani Madiun
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Harga Murah, Kualitas Ga Murahan - Temukan berbagai alat pertanian berkualitas tinggi untuk mendukung
              produktivitas Anda
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Chainshow",
                image: "/images/chainsow.png",
                icon: "🚜",
              },
              {
                name: "Cultivator",
                image: "/images/cultivator.jpg",
                icon: "⚡",
              },
              {
                name: "Mesin Penggerak",
                image: "/images/mesin penggerak.jpg",
                icon: "🔧",
              },
              {
                name: "Pemotong Rumput",
                image: "/images/pemotong rumput.jpg",
                icon: "🔨",
              },
              {
                name: "Genset",
                image: "/images/genset.jpg",
                icon: "🚜",
              },
              {
                name: "Sprayer",
                image: "/images/sprayer.jpg",
                icon: "💧",
              },
            ].map((product, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                <Card className="hover:shadow-xl transition-all duration-500 cursor-pointer group hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
              Galeri
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Lihat Koleksi Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dokumentasi produk-produk berkualitas yang tersedia di Sahabat Tani Madiun
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            {[
              {
                src: "/images/galeri1.jpg",
                alt: "Mesin Diesel Berkualitas",
                title: "Mesin Cultivator FIRMAN FTL820 Traktor Bajak Mini Firman FTL820",
                description:
                  "Ideal digunakan di sawah kecil, ladang pekarangan, kebun sayur, atau area yang sulit dijangkau",
              },
              {
                src: "/images/galeri2.jpg",
                alt: "Genset Matari MGP2900",
                title: "Genset Matari MGP2900",
                description:
                  "Genset Matari MGP2900 merupakan pilihan yang tepat bagi Anda yang membutuhkan sumber listrik cadangan untuk peralatan rumah tangga ringan.",
              },
              {
                src: "/images/galeri3.jpg",
                alt: "Alat Teknik Modern",
                title: "Mesin Dangir Dengir Jagung KENZA KZ28W Mesin Penggembur Tanah di Lahan Jagung",
                description: "Mesin Penggembur Tanah atau Dangir Jagung",
              },
              {
                src: "/images/galeri4.jpg",
                alt: "Power Tools Profesional",
                title: "STIHL Chainsaw MS 180 16 inch / mesin potong kayu MS180",
                description:
                  " adalah gergaji mesin ringan yang dirancang untuk penggunaan rumah tangga dan pemilik kebun. Dengan panjang batang 16 inci dan mesin 31,8 cc",
              },
              {
                src: "/images/galeri5.jpg",
                alt: "Traktor Pertanian",
                title: "Mesin Kompresor angin listrik silent TIGER TSF 25",
                description:
                  "Sangat cocok untuk pengerjaan pengecatan menggunakan spraygun, penggunaan paku tembak (air nailer), pompa ban mobil, dll",
              },
              {
                src: "/images/galeri6.jpg",
                alt: "Pompa Air Efisien",
                title: "Mesin Semprot Hama TASCO MD150 2TAK",
                description:
                  "ist blower TASCO MB 150 merupakan alat/mesin gendong atau punggung yang berfungsi untuk memecah cairan, larutan atau suspensi menjadi butiran-butiran cairan atau kabut.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" delay={600} className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ingin melihat produk lengkap dengan harga dan spesifikasi?</p>
            <a href="https://www.tokopedia.com/sahabattanimadiun" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 2C13.3 2 14 2.7 14 3.5V5H16C17.1 5 18 5.9 18 7V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V7C6 5.9 6.9 5 8 5H10V3.5C10 2.7 10.7 2 11.5 2H12.5M12 6.5C10.6 6.5 9.5 7.6 9.5 9S10.6 11.5 12 11.5 14.5 10.4 14.5 9 13.4 6.5 12 6.5M12 8C12.8 8 13.5 8.7 13.5 9.5S12.8 11 12 11 10.5 10.3 10.5 9.5 11.2 8 12 8M8 13.5H16V15H8V13.5M8 16H13V17.5H8V16Z" />
                </svg>
                Lihat Produk Lengkap di Tokopedia
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">FAQ</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Pertanyaan yang sering diajukan tentang produk dan layanan kami
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200} className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
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
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeInLeft">
              <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
                Lokasi
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Kunjungi Toko Kami</h2>
              <a
                href="https://maps.app.goo.gl/nFagmhdXWFYmYsr96"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg mb-6 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
              >
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.234!2d111.5234!3d-7.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be0c7c8b1234%3A0x5678901234abcdef!2sJl.%20Urip%20Sumoharjo%20No.52%2C%20Mangkujayan%2C%20Kec.%20Mangkujayan%2C%20Kota%20Madiun%2C%20Jawa%20Timur%2063172!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 pointer-events-none group-hover:pointer-events-auto"
                  ></iframe>

                  {/* Overlay with click instruction */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 px-4 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-800 font-medium">Klik untuk buka di Google Maps</span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="space-y-2 text-gray-600">
                <p>Jl. Urip Sumoharjo No.52, Mangkujayan</p>
                <p>Kec. Mangkujayan, Kota Madiun, Jawa Timur 63172</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Badge className="bg-orange-100 text-orange-600 mb-4 hover:scale-105 transition-transform duration-300">
                Kontak Informasi
              </Badge>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Toko Sahabat Tani</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-600">07:30 - 16:30</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      Phone
                    </h3>
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
                    <Button
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="group">
                <div className="flex items-center space-x-2 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image src="/images/logo.png" alt="Sahabat Tani Logo" width={50} height={40} className="" />
                  <span className="font-bold text-xl pb-5">TOKO SAHABAT TANI</span>
                </div>
                <p className="text-white/80 mb-4">
                  Toko alat pertanian terpercaya sejak 1985. Melayani dengan sepenuh hati untuk kebutuhan pertanian
                  Anda.
                </p>
              </div>

              <div className="group">
                <h3 className="font-bold text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  ADDRESS
                </h3>
                <p className="text-white/80 mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  Jl. Urip Sumoharjo No.52
                </p>
                <p className="text-white/80 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  Kota Madiun, Jawa Timur 63172
                </p>
                <p className="text-white/80 group-hover:translate-x-2 transition-transform duration-300">
                  Phone: 081217172544
                </p>
              </div>

              <div className="group">
                <h3 className="font-bold text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  FOLLOW US
                </h3>
                <div className="flex space-x-4 mb-4">
                  <a
                    href="https://www.facebook.com/sahabattanimadiun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/sahabattanimadiun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@sahabattanimadiun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group">
                <h3 className="font-bold text-lg mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  MARKETPLACE
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.tokopedia.com/sahabattanimadiun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
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
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
                      <Image src="/images/shopee.png" alt="Shopee" width={24} height={24} className="object-contain" />
                    </div>
                    <span>Shopee</span>
                  </a>
                  <a
                    href="https://vt.tiktok.com/ZShKRJbYu/?page=Mall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1 hover:scale-110 transition-transform duration-300">
                      <Image src="/images/tiktok.png" alt="tiktok" width={24} height={24} className="object-contain" />
                    </div>
                    <span>TikTok Shop</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-12 pt-8 text-center">
              <p className="text-white/60 hover:text-white/80 transition-colors duration-300">
                Copyright © 2024 by Toko Sahabat Tani
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
