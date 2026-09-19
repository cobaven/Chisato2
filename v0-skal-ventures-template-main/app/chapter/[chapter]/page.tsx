import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const chapters: Record<string, { number: string; title: string; body: string }> = {
  "1": {
    number: "01",
    title: "Chapter 1: Rebirth",
    body: "The first breath of a world that had forgotten its own name. In the dust of the archive, something stirred — a memory too old to be spoken, too heavy to be carried alone. The ink was still wet when the first word was written, and the world leaned in to listen.",
  },
  "2": {
    number: "02",
    title: "Chapter 2: Mysterious Approach",
    body: "Something arrives from beyond the edge of the map, without a name. It does not ask permission. It does not announce itself. It simply begins to change the shape of what is known, one quiet rule at a time.",
  },
  "3": {
    number: "03",
    title: "Chapter 3: Pretty Acquaintance Around Here",
    body: "A stranger walks into the tavern and the rules begin to change. The fire is warm, the ink is fresh, and no one is quite sure who is writing the story anymore. But the pages keep turning.",
  },
  "4": {
    number: "04",
    title: "Chapter 4: School Days",
    body: "The bell rings. The ink is still wet. The lesson begins. In the archive, every chapter is a lesson in how a world is built — one system, one story, one atmosphere at a time.",
  },
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter } = await params
  const data = chapters[chapter]
  if (!data) notFound()

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/manuscript" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary/70 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="size-4" /> Back to Archive
        </Link>

        <article>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">
            CHAPTER {data.number}
          </span>
          <h1 className="text-4xl md:text-5xl font-sentient text-foreground mt-4 mb-10">
            {data.title.replace(/^Chapter \d+:\s/, "")}
          </h1>
          <div className="w-16 h-px bg-primary/60 mb-10" />

          <div className="prose prose-invert max-w-none">
            {data.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg mb-6">
                {p}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-16 flex items-center justify-between border-t border-foreground/10 pt-8">
          <Link href="/manuscript" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors">
            <ArrowLeft className="size-4" /> All Chapters
          </Link>
          <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/40">
            HEAVEN'S ORDER // ARCHIVE
          </span>
        </div>
      </div>
    </main>
  )
}