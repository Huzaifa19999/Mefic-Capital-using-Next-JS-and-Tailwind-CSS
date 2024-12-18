import Image from "next/image";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#2D3C65] text-white py-10 lg:text-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 px-4 sm:px-16">
          {/* Logo and Contact Information */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image
              height={100}
              width={150}
              src={'/navbar-logo.png'}
              alt="Footer-logo"
              className="mx-auto lg:mx-0"
            />
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4">
              <h5 className="flex items-center justify-center lg:justify-start text-sm sm:text-lg mb-2 lg:mb-0">
                <BsFillTelephoneFill className="mr-2" /> +92-3106733754
              </h5>
              <h5 className="flex items-center justify-center lg:justify-start text-sm sm:text-lg">
                <HiOutlineMail className="mr-2" /> huzaifaqadir10@gmail.com
              </h5>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-4 sm:flex-row justify-around lg:justify-end space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Solutions Section */}
            <div className="text-center sm:text-left">
              <ul className="space-y-2">
                <li className="text-xl font-bold">Solutions</li>
                <li>Assets Management</li>
                <li>Private Equity & IB</li>
                <li>Real Estate Investments</li>
              </ul>
            </div>

            {/* Helpful Links Section */}
            <div className="text-center sm:text-left">
              <ul className="space-y-2">
                <li className="text-xl font-bold">Helpful Links</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="text-center sm:text-left">
              <ul className="space-y-2">
                <li className="text-xl font-bold">Follow Us</li>
                <div className="flex justify-center sm:justify-start space-x-4 text-2xl">
                  <li>
                    <FaFacebookSquare />
                  </li>
                  <li>
                    <FaInstagramSquare />
                  </li>
                  <li>
                    <FaTwitterSquare />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
