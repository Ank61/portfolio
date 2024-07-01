"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import close from "../images/close.svg"
import Image from "next/image";
import md from "../images/md.svg";
import next from "../images/next.svg";
import node from "../images/node.svg";
import react from "../images/react.svg";
import stripe from "../images/stripe.svg";
import supabase from "../images/supabase.svg";
import js from "../images/js.svg";
import Link from "next/link";

export default function AboutSection() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Adjust breakpoint as needed
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Meditations App',
            description: 'An app for organizing book notes and personal reflections.',
        },
        {
            id: 2,
            title: 'Personal Blog',
            description: 'A platform for sharing thoughts and insights on various topics.',
        },
        {
            id: 3,
            title: 'Creative Portfolio',
            description: 'Showcase your work and achievements in a visually appealing portfolio.',
        },
        {
            id: 4,
            title: 'Quote Vault',
            description: 'Curate and store your favorite quotes for inspiration and motivation.',
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="max-w-3xl mb-auto">
            <div >
                <p className="text-gray-500">
                    Transform your projects with a Full Stack Developer skilled in
                    JavaScript, React.js, Node.js, and Next.js. Let{"'"}s create
                    something exceptional!
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
                            Google India
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
                        <div className="text-md font-medium text-gray-900">
                            Software Engineer
                        </div>
                        <div className="mb-4 text-sm font-normal text-gray-500">
                            Microsoft
                        </div>
                    </li>
                </ol>
            </div>
            <div class="mt-16">
                <h1 class="font-medium text-gray-900 mb-4 text-lg">Projects</h1><div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-3 gap-y-2">
                    {projects.map((project) => (
                        <motion.div
                            whileHover={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)' }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            layoutId={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="  mt-5 cursor-pointer p-4 rounded-lg"
                        >
                            <div className="text-sm mb-1 font-medium text-gray-900">
                                {project.title}
                            </div>
                            <div className="max-w-xs text-sm font-normal text-gray-500">
                                {project.description}
                            </div>
                        </motion.div>
                    ))}
                    {isLargeScreen ? <AnimatePresence >
                        {selectedId && projects.filter(project => project.id === selectedId).map(project =>
                            <motion.div
                                animate={{ boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.4)' }}
                                layoutId={selectedId}
                                className="absolute top-[29%] left-[9%] shadow-lg p-6 bg-white rounded-md"
                            >
                                <div className="flex justify-between">
                                    <motion.h2 className="text-xl font-medium">{project.title}</motion.h2>
                                    <motion.button onClick={() => setSelectedId(null)} className="border p-1 rounded-lg  hover:bg-slate-100">
                                        <Image src={close} width={15} height={15} alt="close" />
                                    </motion.button>
                                </div>
                                <motion.h5 className="mt-2 text-sm">{project.description}</motion.h5>
                                <motion.h5 className="mt-5 text-sm font-bold">Technologies Used</motion.h5>
                                <motion.div className="flex justify-between items-center mx-5">
                                    <Image src={js} height={50} width={50} alt="Tech" />
                                    <Image src={react} height={50} width={50} alt="Tech" />
                                    <Image src={next} height={50} width={50} alt="Tech" />
                                    <Image src={md} height={120} width={120} alt="Tech" />
                                </motion.div>
                                <motion.div className="flex justify-between items-center mx-10">
                                    <Image src={node} height={50} width={50} alt="Tech" />
                                    <Image src={stripe} height={70} width={70} alt="Tech" />
                                    <Image src={supabase} height={150} width={150} alt="supabase" />
                                </motion.div>
                                <div className="flex justify-center items-center mx-auto mt-4">
                                    <Link className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80 mr-6" href={'/'}>Demo</Link>
                                    <Link className="bg-gray-900 hover:bg-gray-700 text-xs text-white px-4 py-2 rounded-md disabled:opacity-80" href={'/'}>Github</Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence> : null}
                </div>
            </div>
            <div class="mt-16"><div class="mt-1"><h1 class="font-medium text-gray-900 mb-4 text-lg">Open Source Contributions</h1>
                <p class="text-gray-500 mt-4">As a dedicated JavaScript developer, I actively contribute to various projects on GitHub. My contributions reflect my passion for open-source software and my commitment to continuous learning and community collaboration. </p>
            </div></div>

            <div class="mt-16"><div class="mt-1"><h1 class="font-medium text-gray-900 mb-4 text-lg">Meditations Newsletter</h1>
                <p class="text-gray-500 mt-4">Stay ahead of the curve with my monthly newsletter called Meditations. Receive valuable insights on the latest trends, techniques, and tools in web development and design.</p>
                <form class="relative">
                    <input class="border w-full mt-4 px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Enter your email" value="" />
                    <button class="bg-gray-900 hover:bg-gray-700 inline-block top-6 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-80" type="submit" disabled="">Subscribe</button>
                </form></div></div>

        </motion.div >
    )
}