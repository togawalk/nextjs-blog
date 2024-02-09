"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { HiMiniMoon, HiMiniSun, HiRocketLaunch } from "react-icons/hi2"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <HiRocketLaunch className="dark:text-zinc-50 text-zinc-800 h-5 w-5" />
  )

  return (
    <button
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
      className='hover:bg-gray-200 p-2 rounded-full transition-colors dark:hover:bg-zinc-800'
    >
      <HiMiniMoon className='hidden dark:inline h-5 w-5 text-gray-50' />
      <HiMiniSun className='dark:hidden h-5 w-5' />
    </button>
  )

}
