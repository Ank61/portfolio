"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Tab = ({ href, label, selected, setSelected }) => {
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.95, x: [0, -5, 5, 0] }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
          x: { duration: 0.3 },
        }}
        onClick={() => setSelected(href)}
        className={`relative rounded-md px-2 py-1 text-sm  transition-colors ${
          selected ? "text-white" : "text-gray-500"
        }`}
      >
        <span className="relative z-10">{label}</span>
        {selected && (
          <motion.span
            layoutId="tab"
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute inset-0 z-0 rounded-md bg-gray-900"
          ></motion.span>
        )}
      </motion.div>
    </Link>
  );
};

export default function Navbar() {
  const router = usePathname();
  const [selected, setSelected] = useState(router);

  const navItems = [
    { href: "/", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/uses", label: "Uses" },
    { href: "/newsletter", label: "Newsletter" },
    // { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center flex-wrap gap-2 mb-8">
      {navItems.map((item) => (
        <Tab
          key={item.href}
          href={item.href}
          label={item.label}
          selected={router === item.href}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}
// "use client";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Navbar() {
//   const router = usePathname();
//   const navItems = [
//     { href: "/", label: "About" },
//     { href: "/blogs", label: "Blogs" },
//     { href: "/uses", label: "Uses" },
//     { href: "/newsletter", label: "Newsletter" },
//     // { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <div className="flex items-center flex-wrap gap-2 mb-8">
//       {navItems.map((item) => (
//         <Link key={item.href} href={item.href}>
//           <motion.div
//             whileTap={{ scale: 0.95, x: [0, -5, 5, 0] }}
//             transition={{
//               ease: "easeOut",
//               duration: 0.3,
//               x: { duration: 0.3 },
//             }}
//             className={`relative text-sm transition-colors px-2 py-1 rounded-md ${
//               router === item.href ? "text-white" : "text-black"
//             }`}
//           >
//             <span className="relative z-10">{item.label}</span>
//             <motion.span
//               className={`absolute inset-0 z-0 rounded-md ${
//                 router === item.href ? "bg-gray-900" : "bg-white"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ ease: "easeOut", duration: 0.5 }}
//             ></motion.span>
//           </motion.div>
//         </Link>
//       ))}
//     </div>
//   );
// }
