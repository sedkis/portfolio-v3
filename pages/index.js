import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function Home({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
      <MDXLayoutRenderer
        layout={frontMatter.layout || 'AuthorLayout'}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
