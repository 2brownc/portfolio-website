import { useMDXComponent } from 'next-contentlayer/hooks';
import { allProjects } from 'contentlayer/generated';
import type { Project } from 'contentlayer/types';
import ProjectLayout from '../../components/Project/Project';

type ProjectProps = {
  project: Project
};

export default function Project({ project }: ProjectProps) {
  const MDXContent = useMDXComponent(project.body.code);
  return (
    <ProjectLayout {...project}>
      <MDXContent />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  return { props: { project } };
}
