"use client";
import Common from "@/components/common";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Blogs() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <Common />

      <div className="group">
        <div
          id="speed-dial-menu-default"
          className="flex items-center space-x-2"
        >
          <button
            type="button"
            onClick={(e)=>toggleMenu(e)}                                    
            aria-controls="speed-dial-menu-default"
            aria-expanded={isOpen}
            className="flex text-white bg-slate-800 rounded-lg pl-2 pr-2 pt-1 pb-1 text-sm outline-none hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            Filters
            <svg
              className="w-3 h-3 ml-2 mt-1 transition-transform group-hover:rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
          {isOpen &&
            [
              {
                tooltip: "Share",
                icon: "M14.419 10.581a3.564 ...",
                ariaLabel: "Share",
              },
              {
                tooltip: "Print",
                icon: "M5 20h10a1 1 ...",
                ariaLabel: "Print",
              },
              {
                tooltip: "Download",
                icon: "M14.707 7.793a1 1 ...",
                ariaLabel: "Download",
              },
              {
                tooltip: "Copy",
                icon: "M5 9V4.13a2.96 ...",
                ariaLabel: "Copy",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <button
                  type="button"
                  data-tooltip-target={`tooltip-${item.tooltip.toLowerCase()}`}
                  data-tooltip-placement="top"
                  className="flex text-white bg-slate-800 rounded-lg pl-2 pr-2 pt-1 pb-1 text-sm outline-none hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                >{item.ariaLabel}
                </button>
                <div
                  id={`tooltip-${item.tooltip.toLowerCase()}`}
                  role="tooltip"
                  className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  {item.tooltip}
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-auto mt-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLargeScreen ? { x: 6, opacity: 1 } : { opacity: 1 }}
          transition={{ type: "spring" }}
          className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg cursor-pointer transition-shadow"
        >
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white bg-black rounded-lg  focus:ring-4 focus:outline-none ">
              Read more
              <svg
                className="rtl:rotate-180 w-3 h-3.5 ms-2"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLargeScreen ? { x: -6, opacity: 1 } : { opacity: 1 }}
          transition={{ type: "spring" }}
          className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg cursor-pointer transition-shadow"
        >
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white bg-black rounded-lg  focus:ring-4 focus:outline-none ">
              Read more
              <svg
                className="rtl:rotate-180 w-3 h-3.5 ms-2"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 6, opacity: 1 }}
          transition={{ type: "spring" }}
          className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg cursor-pointer transition-shadow"
        >
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white bg-black rounded-lg  focus:ring-4 focus:outline-none ">
              Read more
              <svg
                className="rtl:rotate-180 w-3 h-3.5 ms-2"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLargeScreen ? { x: -6, opacity: 1 } : { opacity: 1 }}
          transition={{ type: "spring" }}
          className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg cursor-pointer transition-shadow"
        >
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white bg-black rounded-lg  focus:ring-4 focus:outline-none ">
              Read more
              <svg
                className="rtl:rotate-180 w-3 h-3.5 ms-2"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
