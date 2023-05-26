
import { draftMode } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense'
import { groq } from "next-sanity";
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';
import { client } from '@/sanity/lib/client';

const query =groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createAt desc)
`

export default async function Home() {
if (draftMode().isEnabled){
  return (<PreviewSuspense fallback={(
    <div role="status">
        <p className='text-center text-lg animate-pulse text-blue-400'>Loading...</p>
      </div>
  )}>
    <PreviewBlogList query={query}/>
  </PreviewSuspense>
  )
};
const posts = await client.fetch(query);
  return(
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
