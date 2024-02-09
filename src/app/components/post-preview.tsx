'use client'

import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { MdImageNotSupported } from "react-icons/md"
import Image from 'next/image'

export const PostPreview = ({ link, title, subtitle, image }: { link: string, title: string, subtitle: string, image: string }) => {
  return (
    <Link href={link}
      className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:bg-gray-100 p-3 dark:hover:bg-zinc-800"

    >
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          {image ?
            (
              <Image
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src={image}
                fill={true}
                alt="Picture of the author"
              />
            ) :
            (
              <div className='flex items-center h-full justify-center bg-gray-200'>
                <MdImageNotSupported className='h-12 w-12 text-gray-500' />
              </div>
            )
          }
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {subtitle.length > 100 ?
              `${subtitle.substring(0, 100)}...` : subtitle
            }
          </p>
          <p className="mt-3 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-gray-200">
            Read more
            <IoIosArrowForward className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </Link>
  )
}
