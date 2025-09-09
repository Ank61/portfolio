"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import close from "../images/close.svg";
import Image from "next/image";
import Link from "next/link";
import phoneado from "../images/pphones.png";
import partyra from "../images/partya.png";

export default function ProjectsSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const projects = [
    {
      id: 5,
      title: "Phoneado",
      description:
        "Backup communication app offering calls, messages, video chat, and 'Find My Phone' so you can connect from any device when your main phone is unavailable. Contributed on backend services.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS"],
      demoLink: "https://apps.apple.com/in/app/p-phones/id1635148075",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.phoneado.android",
      githubLink: null,
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/2b/3c/4d/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q.png/460x0w.webp",
    },
    {
      id: 6,
      title: "Partyra",
      description:
        "AI-powered event and social discovery app with video-first previews, social integrations, tickets and live stories. Worked on backend APIs and integrations.",
      technologies: ["Node.js", "NestJS", "MongoDB", "Stripe", "Firebase"],
      demoLink: "https://apps.apple.com/in/app/partyra/id1626994483",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.partyra.android",
      githubLink: null,
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/2b/3c/4d/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q/2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q.png/460x0w.webp",
    },
    {
      id: 1,
      title: "Real-Time Chat Application",
      description:
        "A modern chat application with real-time messaging, media sharing, and AI-powered features. Built with Next.js, Socket.io, and MongoDB.",
      technologies: [
        "Next.js",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
        "OpenAI API",
      ],
      demoLink: "https://chat-demo.com",
      githubLink: "https://github.com/username/chat-app",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure payment processing using Stripe integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      demoLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/username/ecommerce",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Socket.io"],
      demoLink: "https://tasks-demo.com",
      githubLink: "https://github.com/username/task-manager",
    },
    {
      id: 4,
      title: "AI-Powered Content Generator",
      description:
        "An AI tool that generates creative content, blog posts, and social media updates using OpenAI's GPT model.",
      technologies: [
        "Next.js",
        "OpenAI API",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      demoLink: "https://content-gen-demo.com",
      githubLink: "https://github.com/username/content-generator",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
      onClick={() => setSelectedId(null)}
    >
      <div>
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-3 gap-y-2">
          {projects.map((project) => (
            <motion.div
              id="project"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="mt-3 cursor-pointer p-6 rounded-lg bg-white border border-gray-100"
            >
              {project.image ? (
                <div className="mb-3 h-28 md:h-32 flex items-center justify-center">
                  <Image
                    src={project.id === 5 ? phoneado : partyra}
                    alt={`${project.title} image`}
                    width={300}
                    height={300}
                    className="h-24 md:h-28 w-auto object-contain rounded-md"
                  />
                </div>
              ) : null}
              <div className="text-lg mb-2 font-medium text-gray-900">
                {project.title}
              </div>
              <div className="text-sm font-normal text-gray-500 mb-4">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  href={project.demoLink}
                  className="text-sm text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.demoLink?.includes("apps.apple.com")
                    ? "App Store →"
                    : "Live Demo →"}
                </Link>
                {project.playStoreLink ? (
                  <Link
                    href={project.playStoreLink}
                    className="text-sm text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Store →
                  </Link>
                ) : null}
                {project.githubLink ? (
                  <Link
                    href={project.githubLink}
                    className="text-sm text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ))}
          {isLargeScreen ? (
            <AnimatePresence>
              {selectedId &&
                projects
                  .filter((project) => project.id === selectedId)
                  .map((project) => (
                    <motion.div
                      id="project"
                      key={project.id}
                      animate={{
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                        scale: 1.02,
                      }}
                      layoutId={selectedId}
                      className="absolute top-[29%] left-[9%] shadow-lg p-8 bg-white rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <motion.h2 className="text-xl font-medium">
                          {project.title}
                        </motion.h2>
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="border p-1 rounded-lg hover:bg-slate-100"
                        >
                          <Image
                            src={close}
                            width={15}
                            height={15}
                            alt="close"
                          />
                        </motion.button>
                      </div>
                      {project.image ? (
                        <div className="mb-4 flex items-center justify-center">
                          <Image
                            src={
                              project.id === 5
                                ? phoneado
                                : project.id === 6
                                ? partyra
                                : project.image
                            }
                            alt={`${project.title} image`}
                            width={640}
                            height={360}
                            className="max-h-64 w-auto object-contain rounded-md"
                          />
                        </div>
                      ) : null}
                      <motion.p className="text-gray-600 mb-6">
                        {project.description}
                      </motion.p>
                      <motion.div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                      <div className="flex gap-4">
                        <Link
                          href={project.demoLink}
                          className="bg-gray-900 hover:bg-gray-700 text-sm text-white px-4 py-2 rounded-md transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.demoLink?.includes("apps.apple.com")
                            ? "View on App Store"
                            : "View Demo"}
                        </Link>

                        {project.githubLink ? (
                          <Link
                            href={project.githubLink}
                            className="bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 px-4 py-2 rounded-md transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Code
                          </Link>
                        ) : null}
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
