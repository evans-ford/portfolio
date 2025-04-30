'use client';

import Image from "next/image";
import { FiGithub, FiExternalLink, FiFigma, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Project data with more detailed information
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and Stripe payment integration. Features product filtering, cart management, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/project1.jpg",
    links: [
      { icon: <FiGithub aria-label="GitHub repository" />, url: "#" },
      { icon: <FiExternalLink aria-label="Live demo" />, url: "#" },
      { icon: <FiFigma aria-label="Figma design" />, url: "#" }
    ],
    accentColor: "from-blue-500 to-teal-400"
  },
  {
    id: 2,
    title: "Portfolio Template",
    description: "A performant portfolio template with Three.js animations and responsive design. Includes dark mode, smooth transitions, and optimized asset loading.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/project2.jpg",
    links: [
      { icon: <FiGithub aria-label="GitHub repository" />, url: "#" },
      { icon: <FiExternalLink aria-label="Live demo" />, url: "#" }
    ],
    accentColor: "from-purple-500 to-pink-400"
  }
];

const socialLinks = [
  { icon: <FiGithub aria-label="GitHub profile" />, url: "#" },
  { icon: <FiLinkedin aria-label="LinkedIn profile" />, url: "#" },
  { icon: <FiTwitter aria-label="Twitter profile" />, url: "#" },
  { icon: <FiMail aria-label="Email contact" />, url: "mailto:contact@example.com" }
];

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8 md:p-12 font-sans selection:bg-blue-500/20"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: yBg }}
        className="fixed inset-0 -z-10 opacity-10 dark:opacity-5 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px]" />
      </motion.div>

      {/* Header */}
      {/* Sticky Header */}
     {/* Fixed Header */}
<header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 shadow-sm">
  <div className="container mx-auto px-6 flex justify-between items-center">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href="#" 
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 hover:opacity-80 transition-opacity"
        aria-label="Home"
      >
        Evans Atta Fordjour Jnr
      </a>
    </motion.div>
  
    <nav className="flex gap-6">
      {['Work', 'About', 'Contact'].map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          whileHover={{ y: -2 }}
          whileFocus={{ y: -2 }}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          {item}
        </motion.a>
      ))}
    </nav>
  </div>
</header>

      <main className="container mx-auto pt-16">
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-800 dark:text-white">I design and build</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                digital experiences
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Frontend developer and UI/UX designer with 5+ years of experience creating pixel-perfect, 
              accessible, and performant web applications. Passionate about blending design and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.05 }}
                className="inline-block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="work" className="mb-24 md:mb-32 pt-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Featured
            </span> Projects
          </h2>
          
          <div className="grid gap-12 md:gap-16">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
              >
                <div className="md:flex h-full">
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={project.id === 1}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>
                  <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      {project.links.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2 }}
                          whileFocus={{ y: -2 }}
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400 text-xl p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 md:mb-32 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Me</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate frontend developer with expertise in React, Next.js, and modern JavaScript frameworks. 
                  With a background in design, I bridge the gap between aesthetics and functionality.
                </p>
                <p>
                  My approach combines technical excellence with user-centered design principles to create 
                  applications that are both beautiful and performant.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, mentoring junior 
                  developers, or exploring new design trends.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Technologies I work with:</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Three.js', 'Framer Motion'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative h-64 md:h-96 rounded-xl overflow-hidden"
            >
              <Image
                src="/profile.jpg"
                alt="Portrait of Evans Atta Fordjour Jnr"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-10" />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-2">Let's work together</h2>
            <p className="mb-8 max-w-2xl opacity-90">
              Have a project in mind or want to discuss potential opportunities? 
              I'm currently available for freelance work and full-time positions.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ y: -2 }}
                whileFocus={{ y: -2 }}
                className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <FiMail /> Email Me
              </motion.a>
              <div className="flex gap-4 items-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileFocus={{ y: -2 }}
                    className="text-white hover:text-gray-200 text-xl p-1 rounded focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-300 py-8">
        <div className="container mx-auto">
          <div className="flex justify-center gap-6 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileFocus={{ y: -2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400 text-xl p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Evans Atta Fordjour Jnr. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-70">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}