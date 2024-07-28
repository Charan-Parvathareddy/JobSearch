
"use client";
import React, { useState } from 'react';

import { FaSearch, FaBuilding, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

import { motion } from 'framer-motion';


export function Login() {
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

    <div className="h-screen w-full flex items-center justify-center bg-white/[0.96] antialiased bg-grid-black/[0.02] relative overflow-hidden p-4">
    


      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Login</CardTitle>
          <CardDescription className="text-sm md:text-base">
            Enter your credentials below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm md:text-base">UserName</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-sm md:text-base">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/Dashboard"> {/* Link to the dashboard page */}
            <Button className="w-full">Sign in</Button>
          </Link>
        </CardFooter>
      </Card>
      
    </div>
    
    </div>
  )
}
