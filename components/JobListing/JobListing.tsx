"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaSearch, FaBuilding, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export const JobListingPage = () => {
  const [searchJob, setSearchJob] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const job = {
    id: 1,
    title: 'Java Full Stack Developer',
    company: 'Oracle',
    location: 'Hyderabad/ Secunderabad, Pune, Bangalore/ Bengaluru',
    logo: '🔗'
  };
  
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












      <main className="container mx-auto px-8 py-8">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-2 text-blue-600">Ready to switch a career?</h2>
          <p className="text-xl text-gray-800 mb-6">Let&apos;s get started!</p>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Job here.."
                className="pl-10"
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by company"
                className="pl-10"
                value={searchCompany}
                onChange={(e) => setSearchCompany(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by location"
                className="pl-10"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <Button className="w-[300px] px-3 py-1.5 text-sm">Search</Button>

          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
            <div className="flex-1 flex items-center space-x-2">
              <span>Sort by:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="salary">Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <span>Type:</span>
              <Select defaultValue="full-time">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <span>Level:</span>
              <Select defaultValue="senior">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="mid">Mid-level</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="ghost" className="text-blue-600 w-full sm:w-auto">Clear All</Button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="group hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-white">{job.title}</h3>
                  <span className="text-gray-400 group-hover:text-blue-200">Now</span>
                </div>
                <p className="text-gray-600 group-hover:text-blue-100 mb-4">{job.location}</p>
                <p className="text-sm text-gray-500 group-hover:text-blue-100 mb-4">
                  This is a job description for a Java Full Stack Developer position at Oracle.
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{job.logo}</span>
                  <span className="font-semibold group-hover:text-white">{job.company}</span>
                </div>
                <Link href="/Job">
                  <Button variant="outline" className="w-full group-hover:bg-white group-hover:text-blue-600">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
        
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
};