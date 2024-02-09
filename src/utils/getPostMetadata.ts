import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from '@/shared/post-metadata.interface'

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "./src/posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8")
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image,
      slug: fileName.replace('.md', ''),
    }

  })
  return posts
}
