"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import close from "../images/close.svg";
import Image from "next/image";
import md from "../images/md.svg";
import next from "../images/next.svg";
import node from "../images/node.svg";
import stripe from "../images/stripe.svg";
import supabase from "../images/supabase.svg";
import js from "../images/js.svg";
import Link from "next/link";

export default function AboutSection() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
      onClick={() => setSelectedId(null)}
    >
      <div>
        <p className="text-gray-500 text-[16px] font-normal">
          Full-Stack Software Engineer | Expert in React.js, Next.js, NestJS,
          and TypeScript | Architecting Scalable SaaS Solutions, Real-Time
          Applications, and Secure Cloud Deployments on AWS and Azure with
          Docker
        </p>
      </div>
      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-4">
            <div className="flex flex-row items-center gap-2">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Senior Software Engineer
              </div>
              <div className="inline-block ml-2  text-xs rounded-full px-1 py-0  text-gray-500">
                Present
              </div>
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              Zimble Code
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Software Engineer
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              Talentlegia Technologies
            </div>
          </li>
        </ol>
      </div>
      <div class="mt-16">
        <h1 class="font-medium text-gray-900 mb-4 text-lg">Skills</h1>
        <div class="space-y-6">
          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">Frontend</h2>
            <div class="flex flex-wrap gap-2">
              {['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Redux / Zustand', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Shadcn', 'Chakra UI', 'Azure Web Apps'].map((skill) => (
                <span key={skill} class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">Backend</h2>
            <div class="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'RESTful APIs', 'Mongoose', 'GraphQL', 'NestJS', 'Prisma ORM', 'Socket.io', 'Redis', 'Azure Serverless Functions', 'Azure Container Storage'].map((skill) => (
                <span key={skill} class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">DevOps & Database</h2>
            <div class="flex flex-wrap gap-2">
              {['Docker', 'Azure CI/CD', 'Github Actions', 'MySQL', 'MongoDB', 'Azure Table Storage'].map((skill) => (
                <span key={skill} class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
