"use client"
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="flex items-center flex-wrap gap-2 mb-8">
            <Link href="/">
                <button className="text-white text-sm transition-colors px-2 py-1 rounded-md relative"><span className="relative z-10">About</span><span className="absolute inset-0 z-0 bg-gray-900 rounded-md" style={{ opacity: 1 }}></span></button>
            </Link>
            <Link href="/blogs">
                <button className="text-gray-500 hover:text-gray-900 text-sm transition-colors px-2 py-1 rounded-md relative"><span className="relative z-10">Blogs</span></button>
            </Link>
            <Link href="/uses">
                <button className="text-gray-500 hover:text-gray-900 text-sm transition-colors px-2 py-1 rounded-md relative"><span className="relative z-10">Uses</span></button>
            </Link>
            <Link href="/newsletter">
                <button className="text-gray-500 hover:text-gray-900 text-sm transition-colors px-2 py-1 rounded-md relative"><span className="relative z-10">Newsletter</span></button>
            </Link>
            <Link href="/contact">
                <button className="text-gray-500 hover:text-gray-900 text-sm transition-colors px-2 py-1 rounded-md relative"><span className="relative z-10">Contact</span></button>
            </Link>
        </div>
    )
}