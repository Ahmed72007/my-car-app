// components/Navbar.js
"use client"
import Link from 'next/link';



// app/components/Navbar.tsx


export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}


