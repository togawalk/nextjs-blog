import fs from 'fs'
import React from 'react'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import { getPostMetadata } from '@/utils/getPostMetadata'

const getPostContent = (slug: string) => {
  const folder = "./src/posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  })
  )
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div className='mx-auto max-w-screen-xl px-6'>
      <article className="prose dark:prose-invert lg:prose-xl py-12">
        <h1>
          {post.data.title}
        </h1>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default PostPage
