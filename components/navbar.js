"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="flex items-center flex-wrap gap-2 mb-8">
            <Link href="/">
                <button className={`${pathname==="/" ? "text-white ":"text-black"} text-sm transition-colors px-2 py-1 rounded-md relative`}><span className="relative z-10">About</span><span className={`${pathname==="/" ? "bg-gray-900" : "bg-white"} absolute inset-0 z-0 bg-gray-900 rounded-md`}></span></button>
            </Link>
            <Link href="/blogs">
            <button className={`${pathname==="/blogs" ? "text-white ":"text-black"} text-sm transition-colors px-2 py-1 rounded-md relative`}><span className="relative z-10">Blogs</span><span className={`${pathname==="/" ? "bg-gray-900" : "bg-white"} absolute inset-0 z-0 bg-gray-900 rounded-md`}></span></button>
            </Link>
            <Link href="/uses">
            <button className={`${pathname==="/uses" ? "text-white ":"text-black"} text-sm transition-colors px-2 py-1 rounded-md relative`}><span className="relative z-10">Uses</span><span className={`${pathname==="/" ? "bg-gray-900" : "bg-white"} absolute inset-0 z-0 bg-gray-900 rounded-md`}></span></button>
            </Link>
            <Link href="/newsletter">
            <button className={`${pathname==="/newsletter" ? "text-white ":"text-black"} text-sm transition-colors px-2 py-1 rounded-md relative`}><span className="relative z-10">Newsletter</span><span className={`${pathname==="/" ? "bg-gray-900" : "bg-white"} absolute inset-0 z-0 bg-gray-900 rounded-md`}></span></button>
            </Link>
            <Link href="/contact">
            <button className={`${pathname==="/contact" ? "text-white ":"text-black"} text-sm transition-colors px-2 py-1 rounded-md relative`}><span className="relative z-10">Contact</span><span className={`${pathname==="/" ? "bg-gray-900" : "bg-white"} absolute inset-0 z-0 bg-gray-900 rounded-md`}></span></button>
            </Link>
        </div>
    )
}