import { Navbar } from '@/components/Navbar'
import { getAllPostsMeta, getPostBySlug } from '@/lib/blogs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export async function generateStaticParams() {
	return getAllPostsMeta().map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const post = getPostBySlug(slug)
	if (!post) {
		return (
			<>
				<Navbar />
				<main className="min-h-screen bg-background">
					<section className="py-20 px-8 sm:px-12 md:px-16 lg:px-24">
						<div className="max-w-3xl mx-auto">
							<p className="text-muted-foreground">Post not found.</p>
						</div>
					</section>
				</main>
			</>
		)
	}

	const { meta, content } = post

	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-background">
				<section className="py-20 px-8 sm:px-12 md:px-16 lg:px-24">
					<article className="max-w-3xl mx-auto">
						<header className="mb-8">
							{meta.date && (
								<p className="text-sm text-muted-foreground mb-1">
									{new Date(meta.date).toLocaleDateString(undefined, {
										year: 'numeric', month: 'short', day: 'numeric'
									})}
								</p>
							)}
							<h1 className="text-2xl font-semibold">{meta.title}</h1>
							{meta.description && (
								<p className="text-base text-muted-foreground mt-2">{meta.description}</p>
							)}
						</header>

						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								h1: (props) => <h1 className="text-2xl font-semibold mt-10 mb-4" {...props} />,
								h2: (props) => <h2 className="text-xl font-semibold mt-8 mb-3" {...props} />,
								h3: (props) => <h3 className="text-lg font-semibold mt-6 mb-2" {...props} />,
								p: (props) => <p className="leading-7 mb-4" {...props} />,
								a: (props) => <a className="underline underline-offset-4 hover:text-primary" {...props} />,
								ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />,
								ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />,
								li: (props) => <li className="mb-1" {...props} />,
								code: ({ className, children, ...props }: any) => {
									const match = /language-(\w+)/.exec(className || '')
									return !props.inline && match ? (
										<SyntaxHighlighter
											style={oneDark as any}
											language={match[1]}
											PreTag="div"
											className="mb-4 rounded overflow-hidden"
										>
											{String(children).replace(/\n$/, '')}
										</SyntaxHighlighter>
									) : (
										<code className="px-1 py-0.5 rounded bg-muted text-sm" {...props}>
											{children}
										</code>
									)
								},
								pre: (props: any) => <div {...props} />,
								blockquote: (props) => <blockquote className="border-l-2 pl-4 italic text-muted-foreground my-4" {...props} />,
							}}
						>
							{content}
						</ReactMarkdown>
					</article>
				</section>
			</main>
		</>
	)
}


