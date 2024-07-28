"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { FaSearch, FaBuilding, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';


const InfoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    
      
      <div className="bg-gray-100 min-h-screen p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto bg-white p-4 md:p-8 rounded-lg shadow-md"
        >
          <section id="company" className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">About Us</h2>
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8 flex justify-center">
              <div className="w-full md:w-3/4">
                <ul className="space-y-4">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <CardContent>
                      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Welcome to JobConnect</h2>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        JobConnect is the premier job search platform dedicated to bridging the gap between talented job seekers and top employers.
                      </p>
                      
                      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-4">
                        <li>Operating in over 5 countries and supporting multiple languages.</li>
                        <li>Personalized recommendations and advanced search filters to help you find the perfect job.</li>
                        <li>Collaborations with leading companies and educational institutions for diverse opportunities.</li>
                        <li>24/7 support and continuous platform improvements based on user feedback.</li>
                        <li>Expanding services and introducing new features to meet evolving market needs.</li>
                      </ul>
                      <p className="text-sm md:text-base text-gray-700">
                        Join thousands of users who trust JobConnect for their career advancement. Together, we can help you find your dream job and create a better future.
                      </p>
                    </CardContent>
                  </motion.li>
                </ul>
              </div>
            </div>
          </section>

          <section id="features" className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">Features</h2>
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8 flex justify-center">
              <div className="w-full md:w-3/4">
                <ul className="space-y-4">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <CardContent>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        JobConnect offers a suite of powerful features designed to enhance your job search experience.
                      </p>
                      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-4">
                        <li>Filter jobs by location, industry, salary, and more.</li>
                        <li>Receive tailored suggestions based on your skills and preferences.</li>
                        <li>Keep track of all your job applications.</li>
                        <li>Understand market trends and negotiate better offers.</li>
                        <li>Get advice on job search strategies and career development.</li>
                      </ul>
                      <p className="text-sm md:text-base text-gray-700">
                        Whether you&apos;re a recent graduate or an experienced professional, JobConnect has the tools you need to succeed in your career.
                      </p>
                    </CardContent>
                  </motion.li>
                </ul>
              </div>
            </div>
          </section>

          <section id="news" className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">News</h2>
            <div className="container mx-auto px-2 md:px-4 py-4 md:py-8 flex justify-center">
              <div className="w-full md:w-3/4">
                <ul className="space-y-4">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-4">
                        <li>Insights into job sectors and industry developments.</li>
                        <li>In-depth looks at various job markets.</li>
                        <li>Official announcements and achievements.</li>
                        <li>Information on regulations affecting job seekers and employers.</li>
                        <li>Our impact and initiatives.</li>
                        <li>Work-life balance, freelancing, and career development tips.</li>
                      </ul>
                      <p className="text-sm md:text-base text-gray-700 mt-4">
                        Join us in our mission to connect people with opportunities and create a more inclusive job market. With JobConnect, you&apos;ll always be in the know.
                      </p>
                    </CardContent>
                  </motion.li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
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
      </div>
     
    </div>
  );
};

export default InfoPage;