"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Ensure you have the Card component from Shadcn UI
import { Input } from '@/components/ui/input'; // Import Input component from Shadcn UI
import { Button } from '@/components/ui/button'; // Import Button component from Shadcn UI
import {motion} from 'framer-motion';
import Link from 'next/link';
import { FaSearch, FaBuilding, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
     <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-4 px-8 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link href="/">JobSearch</Link>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-gray-600">
            {['About', 'Contact', 'Login'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }}>
                  <Link href={item === 'About' ? '/info#company' : item === 'Contact' ? '/contact' : item === 'Login' ? '/Login': '#'}>
                    <span className="relative group">
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          <button className="md:hidden text-blue-600" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2 text-gray-600">
              {['About', 'Contact', 'Login'].map((item) => (
                <li key={item}>
                  <Link href={item === 'About' ? '/info#company' : item === 'Contact' ? '/contact' : item === 'Login' ? '/Login': '#'}>
                    <span className="block py-2 px-4 hover:bg-blue-100 rounded">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </motion.header>
    
    <main className="container mx-auto px-8 py-8">
    <section className="lg:py-24 py-16" id="contact">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <div className="grid md:grid-cols-12 items-center gap-[30px]">
          <div className="md:col-span-6">
            <img
              className="h-auto max-w-full"
              src="/contact.png" // Ensure you have the correct path to your image
              alt="Contact"
            />
          </div>
          <div className="md:col-span-6 bg-gray-50/50 p-6 rounded-md shadow">
            <h3 className="mb-6 text-2xl leading-normal">Get in touch!</h3>
            <form className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Your Email"
                    type="email"
                    className="mt-1 block w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  rows={4} // Adjust the rows as needed
                />
              </div>
              <Button type="submit" className="mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <motion.footer
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-blue-600 text-white p-6 sm:p-8 mt-12"
>
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">JobSearch</h2>
        <p className="max-w-md">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="lg:col-span-3">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/info#company">About Us</Link></li>
              <li><Link href="/info#features">Features</Link></li>
              <li><Link href="/info#news">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/info#faq">FAQ</Link></li>
              <li><Link href="/info#careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact">Feedback</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <div className="flex justify-center sm:justify-end space-x-4 mt-4">
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaInstagram className="text-2xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaFacebook className="text-2xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaTwitter className="text-2xl" />
        </motion.div>
      </div>
    </div>
  </div>
</motion.footer>
  </main>
    </div>
  );
}

export default Contact;
