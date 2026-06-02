"use client"

import { Menu, X, ArrowUp, Globe, Award, Handshake, Users, Phone, Instagram, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen bg-white text-[#111] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-[1000] w-full h-20 flex justify-between items-center px-4 md:px-12 bg-white border-b border-gray-100 shadow-sm">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-lg transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="font-bold text-xl md:text-2xl tracking-tight absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
          <span className="text-[#C41E3A]">EMA</span>HAIRSHOP
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            <li>
              <a href="#" className="text-sm font-semibold text-[#111] hover:text-[#C41E3A] transition-colors uppercase tracking-wide">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm font-semibold text-[#111] hover:text-[#C41E3A] transition-colors uppercase tracking-wide">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="text-sm font-semibold text-[#111] hover:text-[#C41E3A] transition-colors uppercase tracking-wide">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-semibold text-[#111] hover:text-[#C41E3A] transition-colors uppercase tracking-wide">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3 items-center">
          <a href="https://www.instagram.com/emahairshop/" className="hidden md:flex w-9 h-9 rounded-full bg-[#C41E3A] text-white items-center justify-center hover:bg-[#a01830] transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="http://wa.me/6285868872566" className="hidden md:flex w-9 h-9 rounded-full bg-[#25D366] text-white items-center justify-center hover:bg-[#1da851] transition-colors">
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
            <nav className="px-4 py-6">
              <ul className="flex flex-col gap-4 list-none">
                <li>
                  <a href="#" className="text-base font-semibold text-[#111] hover:text-[#C41E3A] transition-colors block py-2 uppercase">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-base font-semibold text-[#111] hover:text-[#C41E3A] transition-colors block py-2 uppercase">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-base font-semibold text-[#111] hover:text-[#C41E3A] transition-colors block py-2 uppercase">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-base font-semibold text-[#111] hover:text-[#C41E3A] transition-colors block py-2 uppercase">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Grid Banner Layout */}
      <section className="pt-24 px-4 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Main Large Banner */}
          <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            <img
              src="/hair-collection.jpg"
              alt="Hair Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-4 py-1.5 bg-[#C41E3A] text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
                100% Human Hair
              </span>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">Premium Hair Extensions</h2>
              <p className="text-white/80 text-sm mb-4 max-w-md">
                100% HUMAN HAIR
              </p>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-[#C41E3A] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#a01830] transition-colors"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right Side Small Banners */}
          <div className="flex flex-col gap-4">
            {/* Small Banner 1 */}
            <div className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group">
              <img
                src="/hair-weft.webp"
                alt="Hair Weft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-[#FFD700] text-black text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                  Best Seller
                </span>
                <h3 className="text-white text-lg font-bold">Hair Weft</h3>
              </div>
            </div>

            {/* Small Banner 2 */}
            <div className="relative h-[190px] md:h-[242px] rounded-2xl overflow-hidden group">
              <img
                src="/hair-tape.jpg"
                alt="Tape Extension"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-[#C41E3A] text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                  Popular
                </span>
                <h3 className="text-white text-lg font-bold">Tape In Extension</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Small Info Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#111] text-white rounded-xl p-6 flex items-center gap-4">
            <Globe className="w-10 h-10 text-[#C41E3A]" />
            <div>
              <h4 className="font-bold text-lg">Shipping Worldwide</h4>
              <p className="text-white/70 text-sm">Export to 15+ countries around the world</p>
            </div>
          </div>
          <div className="bg-[#C41E3A] text-white rounded-xl p-6 flex items-center gap-4">
            <Award className="w-10 h-10" />
            <div>
              <h4 className="font-bold text-lg">Top Supplier Indonesia</h4>
              <p className="text-white/90 text-sm">8+ years experience in hair extension industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-4 md:px-12 bg-gray-50 mt-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Badge 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">Export to 15+ Countries</h4>
              <p className="text-gray-600 text-sm">Worldwide shipping available</p>
            </div>

            {/* Badge 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">100% HUMAN HAIR</h4>
              <p className="text-gray-600 text-sm">Premium quality guaranteed</p>
            </div>

            {/* Badge 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">Commitment</h4>
              <p className="text-gray-600 text-sm">Quality and service excellence</p>
            </div>

            {/* Badge 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-1">Grow Together</h4>
              <p className="text-gray-600 text-sm">Partnership for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold uppercase tracking-wider rounded mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Search for Hair Extension <span className="text-[#C41E3A]">Supplier?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EMAHAIRSHOP is a leading manufacturer and exporter of 100% authentic Indonesian human hair. 
              With over 8 years of experience in the hair extension industry, we have built a reputation 
              for delivering premium quality products to clients worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our high-quality extensions are sourced from the finest donors and processed with advanced 
              technology. We offer a variety of colors, textures, and lengths to meet your customers needs. 
              Partner with us and grow your hair extension business with confidence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C41E3A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#a01830] transition-colors"
            >
              Contact Us Now
            </a>
          </div>
          <div className="relative">
            <img
              src="/hair-collection.jpg"
              alt="Hair Collection"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#C41E3A] text-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold">8+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold uppercase tracking-wider rounded mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Top Quality Product - <span className="text-[#C41E3A]">Hair Extension</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Link href="/product/hair-tape" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/hair-tape.jpg"
                  alt="Hair Tape"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C41E3A] text-white text-xs font-bold rounded">Popular</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Tape In Extension</h3>
                <p className="text-gray-600 text-sm mb-4">Premium quality tape hair extension, easy to apply and long lasting.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Learn More</span>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/product/hair-i-tip" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/hair-i-tip.avif"
                  alt="Hair I-Tip"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FFD700] text-black text-xs font-bold rounded">Best Seller</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">I-Tip / Keratin Extension</h3>
                <p className="text-gray-600 text-sm mb-4">High quality keratin tip extensions for seamless blending.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Learn More</span>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/product/hair-weft" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/hair-weft.webp"
                  alt="Hair Weft"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C41E3A] text-white text-xs font-bold rounded">Premium</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Weft Hair Extension</h3>
                <p className="text-gray-600 text-sm mb-4">Machine weft and hand-tied weft available in various colors.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Learn More</span>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/product/hair-bulk" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/hair-bulk.webp"
                  alt="Hair Bulk"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Bulk Hair</h3>
                <p className="text-gray-600 text-sm mb-4">Raw bulk hair for braiding and custom hair extension production.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Learn More</span>
              </div>
            </Link>

            {/* Product 5 */}
            <Link href="/product/clip-in" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/hair-clipin.jpg"
                  alt="Clip-In Hair Extension"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FFD700] text-black text-xs font-bold rounded">New</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Clip-In Extension</h3>
                <p className="text-gray-600 text-sm mb-4">Easy-to-use clip-in sets for instant transformation.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Learn More</span>
              </div>
            </Link>

            {/* Product 6 */}
            <a href="#contact" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#C41E3A] to-[#8B0000] flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="font-bold text-2xl mb-2">Custom Order</h3>
                  <p className="text-white/80 text-sm">Contact us for custom hair extension orders</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Custom Orders</h3>
                <p className="text-gray-600 text-sm mb-4">We accept custom orders for specific colors, lengths, and textures.</p>
                <span className="text-[#C41E3A] font-semibold text-sm hover:underline">Contact Us</span>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C41E3A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#a01830] transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold uppercase tracking-wider rounded mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your <span className="text-[#C41E3A]">Business?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="http://wa.me/6285868872566" className="bg-[#25D366] text-white rounded-2xl p-8 text-center hover:bg-[#1da851] transition-colors group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-white/80">Chat with us directly</p>
          </a>

          <a href="https://www.instagram.com/emahairshop/" className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-2xl p-8 text-center hover:opacity-90 transition-opacity group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Instagram</h3>
            <p className="text-white/80">Follow us @emahairshop</p>
          </a>

          <a href="mailto:emahairshop@gmail.com" className="bg-[#C41E3A] text-white rounded-2xl p-8 text-center hover:bg-[#a01830] transition-colors group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-white/80">emahairshop@gmail.com</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-16 pb-8 px-4 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="font-bold text-2xl tracking-tight mb-4">
                <span className="text-[#C41E3A]">EMA</span>HAIRSHOP
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium Indonesian human hair supplier. Quality products for your hair extension business.
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/emahairshop/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="http://wa.me/6285868872566" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-lg mb-6">Products</h4>
              <ul className="space-y-3">
                <li><Link href="/product/hair-tape" className="text-gray-400 hover:text-white transition-colors">Tape In Extension</Link></li>
                <li><Link href="/product/hair-i-tip" className="text-gray-400 hover:text-white transition-colors">I-Tip Extension</Link></li>
                <li><Link href="/product/hair-weft" className="text-gray-400 hover:text-white transition-colors">Weft Extension</Link></li>
                <li><Link href="/product/hair-bulk" className="text-gray-400 hover:text-white transition-colors">Bulk Hair</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Indonesia</li>
                <li>emahairshop@gmail.com</li>
                <li>WhatsApp: +62 85-8688-72-566</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 EMAHAIRSHOP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="http://wa.me/6285868872566"
        className="fixed bottom-24 right-6 z-[999] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1da851] transition-colors hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full bg-[#C41E3A] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#a01830] hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}
