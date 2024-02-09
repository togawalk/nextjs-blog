import Link from 'next/link';
import React from 'react'
import { FaMarkdown } from "react-icons/fa6";
import { HiMiniMoon } from "react-icons/hi2"

export const Header = () => {
  return (
    <header className='h-20 flex items-center justify-between px-8 font-semibold text-sm text-gray-800 border-b'>
      <Link href="/" className='inline-flex items-center text-xl'>
        <FaMarkdown className='h-6 w-6 mr-2 text-red-500' /> Blog
      </Link>
      <button className='hover:bg-gray-200 p-2 rounded-full transition-colors'>
        <HiMiniMoon className='h-5 w-5' />
      </button>
    </header>
  )
}
