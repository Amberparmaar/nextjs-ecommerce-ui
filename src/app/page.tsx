"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Components/button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* NAVBAR */}
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3" aria-label="Homepage">
              <Image
                src="/assets/Vector.png"
                alt="brand logo"
                width={22}
                height={22}
              />
              <span className="font-extrabold text-xl md:text-2xl leading-none">
                FASHION
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ul className="flex items-center space-x-6" role="menubar">
                <li><a href="#" className="font-medium hover:text-yellow-400 cursor-pointer transition-colors duration-300">CATEGORIES</a></li>
                <li><a href="#" className="font-medium hover:text-yellow-400 cursor-pointer transition-colors duration-300">FASHION</a></li>
                <li><a href="#" className="font-medium hover:text-yellow-400 cursor-pointer transition-colors duration-300">FAVOURITE</a></li>
                <li><a href="#" className="font-medium hover:text-yellow-400 cursor-pointer transition-colors duration-300">LIFESTYLE</a></li>
              </ul>
              <Button />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div id="mobile-menu" className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
            <div className="pt-2 pb-4 space-y-1">
              <a href="#" className="block px-3 py-2 text-base">CATEGORIES</a>
              <a href="#" className="block px-3 py-2 text-base">FASHION</a>
              <a href="#" className="block px-3 py-2 text-base">FAVOURITE</a>
              <a href="#" className="block px-3 py-2 text-base">LIFESTYLE</a>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-24 sm:pt-28 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* HERO SECTION */}
        <section className="bg-[#EFEAEA] flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 sm:p-10 md:p-20 mt-6 rounded-b-2xl">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              LET'S <br /> EXPLORE <br />
              <span className="bg-[#EBD96B] px-1">UNIQUE</span> <br /> CLOTHES.
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-prose mx-auto md:mx-0">
              Live for Influential and Innovative fashion!
            </p>
            <div className="flex justify-center md:justify-start">
              <Button />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/hero.png"
              alt="Model wearing clothes"
              width={900}
              height={900}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 50vw"
              className="w-[90%] sm:w-[75%] md:w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* BRANDS SECTION */}
        <div className="w-full my-8">
          <Image
            src="/assets/Brands.png"
            alt="Brand logos"
            width={1920}
            height={300}
            sizes="100vw"
            className="w-full h-auto max-h-40 object-contain"
          />
        </div>

        {/* NEW ARRIVALS */}
        <section className="my-6">
          <h2 className="font-extrabold text-2xl mb-4"><span className="bg-amber-200">NEW</span> ARRIVALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/assets/hoodie.png", title: "Hoodies & Sweatshirt" },
              { src: "/assets/coats.png", title: "Coats & Parkas" },
              { src: "/assets/tees.png", title: "Tees & T-Shirt" },
            ].map((item) => (
              <article
                key={item.title}
                className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={600}
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">Explore Now!</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROMO SECTION */}
        <section className="bg-[#E0C340] flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 sm:p-10 md:p-20 my-12 rounded-2xl">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/assets/shots.png"
              alt="product shots"
              width={600}
              height={600}
              className="w-[80%] md:w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-3 px-4">
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="bg-white px-1">PAYDAY</span> <br /> SALE NOW
            </h2>
            <p>Spend minimal $100 get 30% off — voucher code for your next purchase</p>
            <p className="text-sm">1 June - 10 June 2021</p>
            <p className="text-sm">*Terms & Conditions apply</p>
            <div className="flex justify-center md:justify-start">
              <Button />
            </div>
          </div>
        </section>
        {/* 2 cards */}
<section><h1>Young's Favourite</h1></section>
        {/* DOWNLOAD APP SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-20 my-10 text-center md:text-left">
          <div>
            <h1 className="font-extrabold text-3xl">
              DOWNLOAD APP & <br /> GET THE VOUCHER!
            </h1>
            <p className="text-gray-500 mt-4">
              Get 30% off for first transaction using <br />
              Rondovision mobile app for now.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
              <Image src="/assets/appstore.png" alt="App Store" width={120} height={120} className="w-28 sm:w-32 h-auto" />
              <Image src="/assets/googleplay.png" alt="Google Play" width={120} height={120} className="w-28 sm:w-32 h-auto" />
            </div>
          </div>
          <div>
            <Image
              src="/assets/Mobile app.png"
              alt="mobile app"
              width={350}
              height={350}
              className="w-60 sm:w-72 md:w-80 h-auto"
            />
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-[#E5C643] text-white w-full py-14 px-6 md:px-20 my-12 text-center space-y-4 rounded-2xl">
          <h1 className="text-3xl font-extrabold">
            JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
          </h1>
          <p>Type your email down below and be young wild generation</p>
          <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Add your email here"
                required
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 shadow-md"
              >
                Send
              </button>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-10 px-6 sm:px-10 md:px-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap">
            {/* Brand Section */}
            <div className="space-y-3 max-w-xs mx-auto md:mx-0">
              <h2 className="font-extrabold text-2xl tracking-wide">FASHION</h2>
              <p className="text-sm text-gray-300">
                Complete your style with awesome <br /> clothes from us.
              </p>
              <div className="flex justify-center md:justify-start gap-3 mt-3">
                <FacebookIcon className="text-yellow-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <InstagramIcon className="text-yellow-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <TwitterIcon className="text-yellow-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <LinkedInIcon className="text-yellow-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li className="hover:text-yellow-400 cursor-pointer">About</li>
                <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-yellow-400 cursor-pointer">Support</li>
                <li className="hover:text-yellow-400 cursor-pointer">Careers</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li className="hover:text-yellow-400 cursor-pointer">Share Location</li>
                <li className="hover:text-yellow-400 cursor-pointer">Orders Tracking</li>
                <li className="hover:text-yellow-400 cursor-pointer">Size Guide</li>
                <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li className="hover:text-yellow-400 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
            © 2025 Fashion Store. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}



