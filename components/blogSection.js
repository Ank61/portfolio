"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import md from "../images/md.svg";
import next from "../images/next.svg";
import node from "../images/node.svg";
import react from "../images/react.svg";
import stripe from "../images/stripe.svg";
import supabase from "../images/supabase.svg";
import js from "../images/js.svg";
import close from "../images/close.svg";

export default function BlogSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Share");
  const [selectedId, setSelectedId] = useState(null);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

  const projects = [
    {
      id: 1,
      title: "Meditations App",
      description: "An app for organizing book notes and personal reflections.",
    },
    {
      id: 2,
      title: "Personal Blog",
      description:
        "A platform for sharing thoughts and insights on various topics.",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description:
        "Showcase your work and achievements in a visually appealing portfolio.",
    },
    {
      id: 4,
      title: "Quote Vault",
      description:
        "Curate and store your favorite quotes for inspiration and motivation.",
    },
  ];

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
    >
      <div class="mt-10 md:mt-10">
        <h1 class="font-medium text-gray-900 mb-2 text-lg">Projects</h1>
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-3 gap-y-2">
          {projects.map((project) => (
            <motion.div
              whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
              transition={{ duration: 0.3 }}
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer p-4 rounded-lg"
            >
              <div className="text-md font-medium text-gray-900">
                {project.title}
              </div>
              <div className="max-w-xs text-sm font-normal text-gray-500">
                {project.description}
              </div>
            </motion.div>
          ))}
          {/* {isLargeScreen ? ( */}
            <AnimatePresence>
              {selectedId &&
                projects
                  .filter((project) => project.id === selectedId)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      animate={{ boxShadow: "0px 5px 13px rgba(0, 0, 0, 0.4)" }}
                      layoutId={selectedId}
                      className="absolute top-[29%] left-[9%] shadow-lg p-6 bg-white rounded-md"
                    >
                      <div className="flex justify-between">
                        <motion.h2 className="text-xl font-medium">
                          {project.title}
                        </motion.h2>
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="border p-1 rounded-lg  hover:bg-slate-100"
                        >
                          <Image
                            src={close}
                            width={15}
                            height={15}
                            alt="close"
                          />
                        </motion.button>
                      </div>
                      <motion.h5 className="mt-2 text-sm">
                        {project.description}
                      </motion.h5>
                      <motion.h5 className="mt-5 text-sm font-bold">
                        Technologies Used
                      </motion.h5>
                      <motion.div className="flex justify-between items-center mx-5">
                        <Image src={js} height={50} width={50} alt="Tech" />
                        <Image src={react} height={50} width={50} alt="Tech" />
                        <Image src={next} height={50} width={50} alt="Tech" />
                        <Image src={md} height={120} width={120} alt="Tech" />
                      </motion.div>
                      <motion.div className="flex justify-between items-center mx-10">
                        <Image src={node} height={50} width={50} alt="Tech" />
                        <Image src={stripe} height={70} width={70} alt="Tech" />
                        <Image
                          src={supabase}
                          height={150}
                          width={150}
                          alt="supabase"
                        />
                      </motion.div>
                      <div className="flex justify-center items-center mx-auto mt-4">
                        <Link
                          className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80 mr-6"
                          href={"/"}
                        >
                          Demo
                        </Link>
                        <Link
                          className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80"
                          href={"/"}
                        >
                          Github
                        </Link>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          {/* ) : (
            <AnimatePresence>
              {selectedId &&
                projects
                  .filter((project) => project.id === selectedId)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      animate={{ boxShadow: "0px 5px 13px rgba(0, 0, 0, 0.4)" }}
                      layoutId={selectedId}
                      className="absolute top-[29%] left-[9%] shadow-lg p-6 bg-white rounded-md"
                    >
                      <div className="flex justify-between">
                        <motion.h2 className="text-xl font-medium">
                          {project.title}
                        </motion.h2>
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="border p-1 rounded-lg  hover:bg-slate-100"
                        >
                          <Image
                            src={close}
                            width={15}
                            height={15}
                            alt="close"
                          />
                        </motion.button>
                      </div>
                      <motion.h5 className="mt-2 text-sm">
                        {project.description}
                      </motion.h5>
                      <motion.h5 className="mt-5 text-sm font-bold">
                        Technologies Used
                      </motion.h5>
                      <motion.div className="flex justify-between items-center mx-5">
                        <Image src={js} height={50} width={50} alt="Tech" />
                        <Image src={react} height={50} width={50} alt="Tech" />
                        <Image src={next} height={50} width={50} alt="Tech" />
                        <Image src={md} height={120} width={120} alt="Tech" />
                      </motion.div>
                      <motion.div className="flex justify-between items-center mx-10">
                        <Image src={node} height={50} width={50} alt="Tech" />
                        <Image src={stripe} height={70} width={70} alt="Tech" />
                        <Image
                          src={supabase}
                          height={150}
                          width={150}
                          alt="supabase"
                        />
                      </motion.div>
                      <div className="flex justify-center items-center mx-auto mt-4">
                        <Link
                          className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80 mr-6"
                          href={"/"}
                        >
                          Demo
                        </Link>
                        <Link
                          className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80"
                          href={"/"}
                        >
                          Github
                        </Link>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
