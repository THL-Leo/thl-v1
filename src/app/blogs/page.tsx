import { Navbar } from '@/components/Navbar'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getAllPostsMeta } from '@/lib/blogs'

export default async function BlogsPage() {
  const posts = getAllPostsMeta()
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-8 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-normal mb-8">Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <a key={post.slug} href={`/blogs/${post.slug}`} className="group">
                  <Card className="transition-colors group-hover:bg-muted/50">
                    <CardHeader>
                      {post.date && (
                        <div className="text-sm text-muted-foreground mb-1">
                          {new Date(post.date).toLocaleDateString(undefined, {
                            year: 'numeric', month: 'short', day: 'numeric'
                          })}
                        </div>
                      )}
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      {post.description && (
                        <CardDescription className="text-base">{post.description}</CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


