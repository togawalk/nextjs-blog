import { getPostMetadata } from '@/utils/getPostMetadata';
import { PostPreview } from './components/post-preview'

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} link={`/posts/${post.slug}`} title={post.title} subtitle={post.subtitle} image={post.image} />
  ))
  return (
    <main>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {/* Cards */}
          {postPreviews}
          {/* End Cards */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </main>
  );
}
