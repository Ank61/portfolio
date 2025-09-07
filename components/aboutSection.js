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
        <p className="text-gray-500 text-[16px] font-normal leading-relaxed">
          Full-Stack Software Engineer with{" "}
          <span className="text-gray-700 font-medium">3+ years</span> of
          experience building scalable web applications for
          <span className="text-gray-700 font-medium">
            {" "}
            fintech, e-commerce, and SaaS industries
          </span>
          . I've successfully delivered{" "}
          <span className="text-gray-700 font-medium">
            15+ production applications
          </span>{" "}
          serving thousands of users, with expertise in React.js, Next.js,
          NestJS, and TypeScript.
          <br />
          <br />
          Passionate about creating seamless user experiences and robust backend
          architectures, I specialize in real-time applications, secure cloud
          deployments on AWS and Azure, and performance optimization that has
          improved application load times by up to 40%. When I'm not coding,
          you'll find me exploring new technologies or contributing to
          open-source projects.
        </p>
      </div>
      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
        <ol className="relative border-s border-gray-200">
          <li className="mb-12 ms-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Senior Software Engineer
              </div>
              <div className="inline-block ml-2 text-xs rounded-full px-2 py-1 bg-green-100 text-green-700">
                2025 - Present
              </div>
            </div>
            <div className="mb-3 text-sm font-medium text-gray-600">
              Zimble Code
            </div>
            <div className="mb-4 text-sm text-gray-600 leading-relaxed">
              • Led development of 5+ enterprise SaaS applications serving
              10,000+ users
              <br />
              • Integrated payment gateways (Stripe, PayStack) processing $40K+
              transactions
              <br />• Implemented real-time features using Socket.io, improving
              user engagement by 60%
            </div>
          </li>
          <li className="mb-12 ms-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Software Engineer
              </div>
              <div className="inline-block ml-2 text-xs rounded-full px-2 py-1 bg-gray-100 text-gray-600">
                2022 - 2025
              </div>
            </div>
            <div className="mb-3 text-sm font-medium text-gray-600">
              Talentelgia Technologies
            </div>
            <div className="mb-4 text-sm text-gray-600 leading-relaxed">
              • Developed 8+ responsive web applications with 98% uptime
              <br />
              • Optimized database queries resulting in 40% faster page load
              times
              <br />• Collaborated with cross-functional teams to deliver
              projects 20% ahead of schedule
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
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React.js",
                "Redux / Zustand",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "Material-UI",
                "Shadcn",
                "Chakra UI",
                "Azure Web Apps",
              ].map((skill) => (
                <span
                  key={skill}
                  class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">Backend</h2>
            <div class="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Mongoose",
                "GraphQL",
                "NestJS",
                "Prisma ORM",
                "Socket.io",
                "Redis",
                "Azure Serverless Functions",
                "Azure Container Storage",
              ].map((skill) => (
                <span
                  key={skill}
                  class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">
              DevOps & Database
            </h2>
            <div class="flex flex-wrap gap-2">
              {[
                "Docker",
                "Azure CI/CD",
                "Github Actions",
                "MySQL",
                "MongoDB",
                "Azure Table Storage",
              ].map((skill) => (
                <span
                  key={skill}
                  class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:text-black transition-colors"
                >
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
