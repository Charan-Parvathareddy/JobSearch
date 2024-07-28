"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaSearch, FaBuilding, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';


const Job = () => {
  const [showModal, setShowModal] = useState(false);

  const job = {
    title: 'Java Full Stack Developer',
    company: 'Oracle',
    rating: 3.8,
    reviews: 4632,
    experience: '3 - 5 years',
    salary: 'Not Disclosed',
    location: 'Hyderabad/ Secunderabad, Pune, Bangalore/ Bengaluru',
    posted: '5 days ago',
    openings: 15,
    applicants: 487,
    description: `With tremendous market success in our Cloud Applications, especially in ERP Cloud, Higher Ed institutions have expressed unprecedented interest in embarking a cloud adoption journey with Oracle. Student Information Systems, a critical functional area to complete in our SaaS footprint for Higher Ed, is one top investment priority for Oracle. With over 800+ institutions using Campus Solutions today, our charter is to strike the balance of accelerating the delivery of Student Cloud while continue to deliver value for existing Campus Solutions customers. We leverage an agile development methodology (scrum) to facilitate the development of our products. Our development practices include empowered scrum teams, continuous build and integration, weekly sprint reviews, and a heavy emphasis on testing early and often.

You should be able to work independently, mentor others and be a highly contributing member of an agile team. She/he has excellent organizational, planning and time management skills, with a successful track record of managing multiple priorities in a fast paced environment.

We are looking for a hands-on senior engineer with a passion for developing our Student Cloud solution.`,
    responsibilities: [
      'Delivering large-scale projects on-time with high quality.',
      'Guiding developers in day-to-day design and coding tasks',
      'Design, Development and implementation of projects.',
      'Working closely with Product Architects, Product Managers, Quality Assurance, and other development teams.',
      'UI development of the application using HTML, JavaScript, ES6 , JQuery, AJAX etc.',
      'Participating in code reviews',
      'Engaging actively in developing technical designs',
      'Keeping abreast of the latest technologies (including Oracle technologies) and assimilating them into the product suites',
      'Pro-actively mentoring and keeping track of team mates progress',
      'Ensuring compliance with development methodology and technical process'
    ],
    requirements: [
      'Well rounded full stack developer with exposure to all layers of application development. Advanced UI development skills using js frameworks is preferred.',
      'Excellent product development skills - designing, coding, and debugging skills in JavaScript',
      'Experience of database design/modelling, knowledge of RDBMS concepts is required',
      'Experience of 5-12 yrs. in product development is required.',
      'Fusion Applications Development experience preferred.',
      'Experience with cloud platforms, cloud technologies/deployments',
      'Experience in Java technologies like JSP, Servlets, Web services, REST etc.',
      'Experience developing web applications using at least one popular web framework (JSF, GWT, Spring MVC)',
      'Experience developing web UIs using JavaScript libraries and/or frameworks (jQuery, JavaScript, Angular, React etc)',
      'Thorough understanding of OO principles',
      'Experience in higher education product/domain or Fusion Tech Stack (Jdeveloper, TypeScript, OJET, ADF) will be preferred'
    ],
    additionalSkills: [
      'Excellent analysis and prioritization skills',
      'Self-starter, able to deliver projects on time meeting high quality standards',
      'Aggressive, ability to find solutions',
      'Multi-tasking',
      'Effective communication skills (written and spoken) and strong problem solving skills'
    ],
    role: 'Full Stack Developer',
    industryType: 'Software Product',
    department: 'Engineering - Software & QA',
    employmentType: 'Full Time, Permanent',
    roleCategory: 'Software Development',
    education: 'UG: B.Tech/B.E. in Any Specialization',
    keySkills: [
      'Rest',
      'Api',
      'Development',
      'JavaScript',
      'Web Framework',
      'Java',
      'Fullstack'
    ]
  };

  const handleApply = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowModal(true), 500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <Card className="mb-8">
              <CardHeader>
                <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                <div className="flex flex-col md:flex-row items-center text-gray-600">
                  <Image
                    src="/oracle-logo.png"
                    alt={job.company}
                    width={72}
                    height={72}
                    className="mr-2 mb-2 md:mb-0"
                  />
                  <div className="flex flex-col md:flex-row items-center">
                    <span>{job.company}</span>
                    <span className="hidden md:inline mx-2">•</span>
                    <span>{job.rating} ★</span>
                    <span className="hidden md:inline mx-2">•</span>
                    <span>{job.reviews} Reviews</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <strong>Experience:</strong> {job.experience}
                  </div>
                  <div>
                    <strong>Salary:</strong> {job.salary}
                  </div>
                  <div>
                    <strong>Location:</strong> {job.location}
                  </div>
                  <div>
                    <strong>Posted:</strong> {job.posted}
                  </div>
                  <div>
                    <strong>Openings:</strong> {job.openings}
                  </div>
                  <div>
                    <strong>Applicants:</strong> {job.applicants}
                  </div>
                </div>
                <div className="mb-4">
                  <strong>Job Description</strong>
                  <p className="text-sm md:text-base">{job.description}</p>
                </div>
                <div className="mb-4">
                  <strong>Responsibilities</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong>Job Requirements</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong>Additional Skills</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.additionalSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 text-sm md:text-base">
                  <strong>Role:</strong> <p>{job.role}</p>
                  <strong>Industry Type:</strong> <p>{job.industryType}</p>
                  <strong>Department:</strong> <p>{job.department}</p>
                  <strong>Employment Type:</strong> <p>{job.employmentType}</p>
                  <strong>Role Category:</strong> <p>{job.roleCategory}</p>
                  <strong>Education:</strong> <p>{job.education}</p>
                  <strong>Key Skills:</strong>
                  <ul className="list-disc pl-5">
                    {job.keySkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleApply} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-xl md:text-2xl font-bold">Contact Us</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaPhone className="mr-2 text-blue-500" />
                  <span>+91 9999999999</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-blue-500" />
                  <Link href='/contact'>
                    <span>careers@jobsearch.com</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2 text-blue-500" />
              <span>+91 9999999999</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2 text-blue-500" />
              <Link href='/contact'>
                <span>careers@jobsearch.com</span>
              </Link>
            </div>
            <Button onClick={handleCloseModal} className="w-full">Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;