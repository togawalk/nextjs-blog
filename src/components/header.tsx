import Link from 'next/link';
import React from 'react'
import { FaMarkdown } from "react-icons/fa6";
import { ModeToggle } from './mode-toggle';

export const Header = () => {

  return (
    <header className='h-20 flex items-center justify-between px-8 font-semibold text-sm text-zinc-800 border-b dark:border-zinc-800'>
      <Link href="/" className='inline-flex items-center text-xl dark:text-zinc-50'>
        <FaMarkdown className='h-6 w-6 mr-2 text-red-500' /> Blog
      </Link>
      <ModeToggle />
    </header>
  )
}
