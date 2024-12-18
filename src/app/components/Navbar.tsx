"use client";
// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#1E2538" }} className="text-white">
      <div style={{justifyContent:'end'}} className="flex font-bold text-slate-300  p-2 sm:p-4">
        <div className="flex flex-wrap items-center space-x-2">
          <h4 className="flex items-center text-sm sm:text-base">
            <BsFillTelephoneFill className="mt-0.5 ms-2 me-1.5 text-2xl" /> +92-3106733754
          </h4>
          <h4 className="flex items-center text-sm sm:text-base">
            <HiOutlineMail className="mt-1 me-1.5 text-2xl"  /> huzaifaqadir10@gmail.com
          </h4>
          <div className="flex ps-0 space-x-2 text-xl mt-1">
            <FaFacebookSquare className="mt-0.5" />
            <FaInstagram className="mt-0.5" />
            <FaXTwitter className="mt-0.5" />
            <h4>اَلْعَرَبِيَّةُ</h4>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:mx-auto items-center justify-between h-16">
          <Image className="lg:pb-12 mb-4" src={'/navbar-logo.png'} alt="Navbar-logo" width={150} height={45} />
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold"></Link>
          </div>

          <div className="hidden md:flex md:text-center d-hover xl:text-xl font-bold lg:text-base md:text-sm space-x-4 items-center">
            <Link style={{ display: "flex" }} href="/" className="hover:bg-gray-700 d-hover px-3 py-2 rounded-md ">
              Our Services 
            </Link>
            <Link style={{ display: "flex" }} href="/about" className="hover:bg-gray-700 d-hover px-3 py-2 rounded-md">
              About MEFIC 
            </Link>
            <Link style={{ display: "flex" }} href="/services" className="hover:bg-gray-700 d-hover px-3 py-2 rounded-md">
              Media Center 
            </Link>
            <Link style={{ display: "flex" }} href="/contact" className="hover:bg-gray-700 d-hover px-3 py-2 rounded-md">
              Careers 
            </Link>
            <Button title="Book a Consultant" className="ms-0.5 rounded p-2 me-0.5" style={{ backgroundColor: "#E95A0C" }} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center font-bold bg-gray-700 p-4 space-y-4">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">Our Services</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">About MEFIC</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-600">Media Center</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">Career</Link>
          <Button title="Book a Consultant" className="p-2 rounded-md border-0 mb-2 ms-2" style={{ backgroundColor: "#E95A0C" }} />
        </div>
      )}
    </nav>
  );
}
