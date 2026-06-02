"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Instagram, Phone, Mail, ChevronLeft, ChevronRight, ShoppingCart, Clock, Award } from "lucide-react"
import { useState } from "react"

const products: Record<string, {
  name: string
  image: string
  images?: string[]
  description: string
  fullDescription: string
  specs: { label: string; value: string }[]
  minOrder: string
  productionTime: string
  certificate: string
}> = {
  "hair-tape": {
    name: "Hair Tape Extension",
    image: "/hair-tape.jpg",
    images: ["/hair-tape.jpg", "/hair-collection.jpg"],
    description: "Premium tape-in hair extensions for seamless blending",
    fullDescription: " Hair Tape Extensions are one of our best-selling products, designed to deliver long, voluminous, and natural-looking hair in minutes. Made from 100% authentic Indonesian human hair, they ensure a smooth, tangle-free finish with no shedding and no nits. Available in a wide range of colors, lengths, and textures, our tape-ins can be fully customized to match your exact needs using advanced coloring technology. With exceptional strength, durability, and a seamless blend, EMA Tape-In Extensions are the perfect choice for professionals seeking quality and reliability.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Single Drawn, Double Drawn" },
      { label: "Size", value: "10\" - 28\"" },
      { label: "Raw Material", value: "100% Human Remy Hair" },
    ]
  },
  "hair-i-tip": {
    name: "Hair I-TIP Extension",
    image: "/hair-i-tip.avif",
    images: ["/hair-i-tip.avif", "/hair-collection.jpg"],
    description: "Individual strand extensions for precise application",
    fullDescription: "EMA I-Tip Hair Extensions offer the ultimate in precision and versatility. Each strand is tipped with a keratin bond that fuses seamlessly with your natural hair using a micro-ring or heat application method. Made from 100% Indonesian human hair, these extensions provide a natural look and feel that lasts for months. Perfect for adding volume, length, or highlights without damage to your natural hair.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Single Drawn, Double Drawn" },
      { label: "Size", value: "12\" - 30\"" },
      { label: "Raw Material", value: "100% Human Remy Hair" },
    ]
  },
  "hair-weft": {
    name: "Hair Weft Extension",
    image: "/hair-weft.webp",
    images: ["/hair-weft.webp", "/hair-collection.jpg"],
    description: "Machine-sewn weft for quick full-head application",
    fullDescription: "EMA Weft Hair Extensions are crafted with precision-sewn tracks that lay flat against the scalp for a natural, comfortable fit. Our wefts are made from 100% Indonesian human hair with intact cuticles aligned in the same direction, ensuring tangle-free, silky smooth hair that blends seamlessly with your own. Available in various widths and lengths, our wefts are perfect for sew-in, clip-in, or micro-link applications.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Single Drawn, Double Drawn" },
      { label: "Size", value: "10\" - 28\"" },
      { label: "Raw Material", value: "100% Human Remy Hair" },
    ]
  },
  "hair-bulk": {
    name: "Hair Bulk",
    image: "/hair-bulk.webp",
    images: ["/hair-bulk.webp", "/hair-collection.jpg"],
    description: "Raw bulk hair for braiding and custom extensions",
    fullDescription: "EMA Bulk Hair is premium raw hair without any weft attachment, perfect for braiding, custom extension creation, and professional styling. Sourced directly from Indonesian donors, our bulk hair maintains its natural texture and cuticle alignment. Each bundle is carefully sorted and processed to ensure consistent quality. Ideal for salons and stylists who prefer to create their own custom hair pieces.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Single Drawn, Double Drawn" },
      { label: "Size", value: "8\" - 32\"" },
      { label: "Raw Material", value: "100% Virgin Human Hair" },
    ]
  },
  "clip-in": {
    name: "Clip-In Extension",
    image: "/hair-collection.jpg",
    images: ["/hair-collection.jpg", "/hair-weft.webp"],
    description: "Easy-to-use clip-in sets for instant transformation",
    fullDescription: "EMA Clip-In Hair Extensions are the perfect solution for instant length and volume without commitment. Each set features premium quality clips attached to machine-sewn wefts made from 100% Indonesian human hair. Easy to apply and remove, our clip-ins are perfect for special occasions or everyday wear. The clips are designed to grip securely without damaging your natural hair.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Double Drawn" },
      { label: "Size", value: "14\" - 24\"" },
      { label: "Raw Material", value: "100% Human Remy Hair" },
    ]
  },
  "keratin-tip": {
    name: "Keratin Tip Extension",
    image: "/hair-i-tip.avif",
    images: ["/hair-i-tip.avif", "/hair-tape.jpg"],
    description: "Fusion bonded extensions for long-lasting wear",
    fullDescription: "EMA Keratin Tip Extensions use advanced fusion bonding technology for a secure, long-lasting hold. Each strand is tipped with high-quality keratin that bonds to your natural hair using heat application. Made from 100% Indonesian human hair, these extensions provide the most natural look and can last up to 6 months with proper care. Perfect for clients seeking a semi-permanent solution.",
    minOrder: "1 / KG",
    productionTime: "7 Days",
    certificate: "High Quality",
    specs: [
      { label: "Hair Quality", value: "100% Cuticle Aligned" },
      { label: "Hair Ratio", value: "Single Drawn, Double Drawn" },
      { label: "Size", value: "12\" - 28\"" },
      { label: "Raw Material", value: "100% Human Remy Hair" },
    ]
  },
}

const shippingInfo = [
  { method: "DHL", available: "Yes" },
  { method: "EMS", available: "Yes" },
  { method: "FedEx", available: "Yes" },
]

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products[slug]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-[#C41E3A] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const images = product.images || [product.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-[#C41E3A]">EMA</span>
                <span className="text-gray-900">HAIRSHOP</span>
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#C41E3A] transition-colors">
                HOME
              </Link>
              <Link href="/#about" className="text-sm font-medium text-gray-700 hover:text-[#C41E3A] transition-colors">
                ABOUT US
              </Link>
              <Link href="/#products" className="text-sm font-medium text-[#C41E3A]">
                PRODUCTS
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-[#C41E3A] transition-colors">
                CONTACT US
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/emahairshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#C41E3A] rounded-md flex items-center justify-center text-white hover:bg-[#a01830] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="http://wa.me/6285868872566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366] rounded-md flex items-center justify-center text-white hover:bg-[#1fb855] transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Product Title Banner */}
      <div className="bg-[#C41E3A] py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center uppercase tracking-wide">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Image Gallery */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-[#C41E3A]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase tracking-wide">
          {product.name}
        </h2>

        {/* Order Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Minimum Order */}
          <div className="bg-[#6B8E6B] rounded-lg p-6 text-center text-white">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Minimum Order</h4>
            <p className="text-xl font-bold">{product.minOrder}</p>
          </div>

          {/* Production Time */}
          <div className="bg-[#6B8E6B] rounded-lg p-6 text-center text-white">
            <div className="flex justify-center mb-4">
              <Clock size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Production Time</h4>
            <p className="text-xl font-bold">{product.productionTime}</p>
          </div>

          {/* Certificate */}
          <div className="bg-[#6B8E6B] rounded-lg p-6 text-center text-white">
            <div className="flex justify-center mb-4">
              <Award size={40} strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Certificate</h4>
            <p className="text-xl font-bold">{product.certificate}</p>
          </div>
        </div>

        {/* Product Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 leading-relaxed text-center">
            {product.fullDescription.split("100%").map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && <strong>100%</strong>}
              </span>
            ))}
          </p>
        </div>

        {/* Specifications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-[#C41E3A] uppercase tracking-wide">
            Specifications Product
          </h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-3 font-semibold text-gray-700">Information</div>
              <div className="px-6 py-3 font-semibold text-gray-700">Description</div>
            </div>
            {product.specs.map((spec, index) => (
              <div key={index} className="grid grid-cols-2 border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-4 text-gray-600">{spec.label}</div>
                <div className="px-6 py-4 text-gray-800">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-[#C41E3A] uppercase tracking-wide">
            Shipping Information
          </h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-3 font-semibold text-gray-700">Information</div>
              <div className="px-6 py-3 font-semibold text-gray-700">Checklist Shipping</div>
            </div>
            {shippingInfo.map((info, index) => (
              <div key={index} className="grid grid-cols-2 border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-4 text-gray-600">{info.method}</div>
                <div className="px-6 py-4 text-gray-800">{info.available}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/#products"
            className="inline-block bg-[#C41E3A] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a01830] transition-colors"
          >
            All Products
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#C41E3A]">EMA</span>
                <span className="text-white">HAIRSHOP</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Enhance Your Look, Naturally. Explore Our Premium Hair Extensions.
              </p>
              <a
                href="http://wa.me/6285868872566"
                className="inline-block bg-[#C41E3A] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#a01830] transition-colors"
              >
                CONTACT US
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Access All Page</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Our Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/product/hair-tape" className="hover:text-white transition-colors">Hair Tape</Link></li>
                <li><Link href="/product/hair-i-tip" className="hover:text-white transition-colors">Hair I-TIP</Link></li>
                <li><Link href="/product/hair-weft" className="hover:text-white transition-colors">Hair Weft</Link></li>
                <li><Link href="/product/hair-bulk" className="hover:text-white transition-colors">Hair Bulk</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Instagram size={16} />
                  <span>Instagram</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>Email</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            Copyright 2025 VITEXHAIRCOMPANY. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="http://wa.me/6285868872566"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1fb855] transition-colors z-50 flex items-center gap-2"
      >
        <Phone size={24} />
        <span className="hidden md:inline font-medium">Contact us</span>
      </a>
    </div>
  )
}
