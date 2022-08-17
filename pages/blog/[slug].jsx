import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from 'contentlayer/generated';
import BlogLayout from '../../components/Blog/Blog';

export default function Blog({ blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <BlogLayout {...blog}>
      <MDXContent />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog } };
}
