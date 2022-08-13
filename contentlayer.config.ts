import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    publishedOn: { type: 'string', required: true },
    description: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    coverCredit: { type: 'string', required: true },
    coverCreditLink: { type: 'string', required: true },
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    appLink: { type: 'string', required: true },
    repoLink: { type: 'string', required: true },
    techStack: {type: 'string', required: true},
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

