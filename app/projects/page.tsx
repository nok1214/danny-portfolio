'use client';

import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Metaversus',
    image: '/metaversus.png',
    description:
      'A sleek and interactive user interface for exploring the Metaverse. Built with React, this project utilizes the framer-motion library to bring fluid animations and transitions to life, providing users with an immersive experience.',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveSite: 'https://project-metaversus.tech/',
    githubCode: 'https://github.com/nok1214/project-metaversus',
  },
  {
    name: 'AI Image',
    image: '/project-ai.png',
    description:
      'A React-based application that allows users to customize shirts with various design elements, AI-generated images, and color preferences.',
    technologies: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'cloudinary',
      'express.js',
      'mongoose',
      'nodemon',
      'Three.js',
      'openai',
    ],
    liveSite: 'https://project-ai-image.tech/',
    githubCode: 'https://github.com/nok1214/project-AI-Image',
  },
  {
    name: 'Business UI Design',
    image: '/project-business-template.png',
    description: 'Mordern Business UI/UX design',
    technologies: ['React.js', 'Tailwind CSS'],
    liveSite: 'https://project-business-template.tech/',
    githubCode: 'https://github.com/nok1214/business_template',
  },
  {
    name: 'Restautant UI Design',
    image: '/project-fine-dinning.png',
    description: 'Mordern restaurant UI/UX design',
    technologies: ['React.js', 'React Icon'],
    liveSite: 'https://project-finedinning.tech/',
    githubCode: 'https://github.com/nok1214/fine_dining_template',
  },
  {
    name: 'GPT3 UI',
    image: '/project-gpt3.png',
    description: 'GPT-3 with modern UI/UX design',
    technologies: ['React.js', 'CSS'],
    liveSite: 'https://project-gpt3.tech/',
    githubCode: 'https://github.com/nok1214/project-gpt3',
  },
  {
    name: 'Coming Soon',
    image: '/Comingsoon.png',
    description: 'Stay tuned for exciting new projects',
    technologies: [],
    liveSite: '',
    githubCode: '',
  },
];

export default function Example() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen p-4 mx-auto">
        <motion.div
          className="grid w-full grid-cols gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16"
          variants={stagger}
        >
          {projects.map((project) => (
            <motion.div
              key={project.githubCode}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card>
                <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                  <div className="flex flex-col items-center justify-center space-y-4 w-full">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="rounded-[20px] max-w-full h-auto md:w-[520px] md:h-[340px]"
                      layoutId={project.name}
                    />
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
                      {project.name}
                    </h2>
                    <p className="text-lg leading-relaxed shadow-md p-4 rounded-lg text-white bg-zinc-800 bg-opacity-20 transition-transform transform hover:scale-105">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-zinc-600 px-2 py-1 rounded-md text-sm text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex text-zinc-300 gap-20 py-4 text-2xl">
                    <motion.a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-class px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Site
                    </motion.a>
                    <motion.a
                      href={project.githubCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-class px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white shadow-md transition-all duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub Code
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
