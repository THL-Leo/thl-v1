import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPostMeta = {
	slug: string
	title: string
	description?: string
	date?: string
}

export type BlogPost = {
	meta: BlogPostMeta
	content: string
}

function getPostsDirectory() {
	return path.join(process.cwd(), 'content', 'blogs')
}

export function getAllPostsMeta(): BlogPostMeta[] {
	const postsDir = getPostsDirectory()
	if (!fs.existsSync(postsDir)) return []

	const files = fs.readdirSync(postsDir)
		.filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))

	const metas: BlogPostMeta[] = files.map((filename) => {
		const filePath = path.join(postsDir, filename)
		const fileContents = fs.readFileSync(filePath, 'utf8')
		const { data } = matter(fileContents)
		const slug = filename.replace(/\.(md|mdx)$/i, '')
		const rawDate = (data as any).date
		let date: string | undefined
		if (rawDate instanceof Date) {
			date = rawDate.toISOString()
		} else if (typeof rawDate === 'string') {
			date = rawDate
		}
		return {
			slug,
			title: (data.title as string) || slug,
			description: (data.description as string) || undefined,
			date,
		}
	})

	return metas.sort((a, b) => {
		const ad = a.date ? new Date(a.date).getTime() : 0
		const bd = b.date ? new Date(b.date).getTime() : 0
		return bd - ad
	})
}

export function getPostBySlug(slug: string): BlogPost | null {
	const postsDir = getPostsDirectory()
	const fileMd = path.join(postsDir, `${slug}.md`)
	const fileMdx = path.join(postsDir, `${slug}.mdx`)

	const filePath = fs.existsSync(fileMd) ? fileMd : fs.existsSync(fileMdx) ? fileMdx : null
	if (!filePath) return null

	const fileContents = fs.readFileSync(filePath, 'utf8')
	const { data, content } = matter(fileContents)

	const rawDate = (data as any).date
	let date: string | undefined
	if (rawDate instanceof Date) {
		date = rawDate.toISOString()
	} else if (typeof rawDate === 'string') {
		date = rawDate
	}

	return {
		meta: {
			slug,
			title: (data.title as string) || slug,
			description: (data.description as string) || undefined,
			date,
		},
		content,
	}
}


