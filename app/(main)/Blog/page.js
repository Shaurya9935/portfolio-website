import React from 'react'

const BlogPage = () => {
  const posts = [
    {
      category: 'Architecture',
      date: '2026-05-15',
      readTime: '8 min',
      title: 'Building Scalable Real-Time Systems',
      description:
        'Deep dive into architecting WebSocket-based applications that handle millions of concurrent connections.',
    },
    {
      category: 'Performance',
      date: '2026-05-01',
      readTime: '6 min',
      title: 'The Future of Web Performance',
      description:
        'Exploring emerging patterns in performance optimization and the impact of new web APIs.',
    },
    {
      category: 'Security',
      date: '2026-04-20',
      readTime: '12 min',
      title: 'Cryptography in Modern Web Apps',
      description:
        'Implementing end-to-end encryption and zero-knowledge proofs in production applications.',
    },
    {
      category: 'AI / ML',
      date: '2026-04-10',
      readTime: '10 min',
      title: 'AI-Powered Developer Tools',
      description:
        'How machine learning is transforming the way we write, test, and deploy code.',
    },
  ]

  return (
    <div className="min-h-screen px-6 py-10 text-zinc-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 font-terminal text-[11px] uppercase tracking-[0.5em] text-zinc-400">
          Knowledge Base
        </div>

        <h1 className="orbitron text-[clamp(2.8rem,6.5vw,6rem)] font-black uppercase leading-none tracking-[0.03em] text-white">
          TRANSMISSIONS
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_50px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/4 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_rgba(0,0,0,0.58)]"
            >
              <div className="relative h-56 border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),rgba(255,255,255,0.02)_45%,rgba(255,255,255,0.01)_100%)]">
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-size-[18px_18px]" />
                <div className="absolute right-4 top-4 border border-white/15 bg-black/70 px-3 py-1 font-terminal text-[11px] uppercase tracking-[0.28em] text-zinc-200 transition duration-300 group-hover:border-white/30 group-hover:bg-black/85">
                  {post.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-terminal text-[11px] uppercase tracking-[0.4em] text-zinc-500 transition duration-300 group-hover:text-zinc-300">
                    image placeholder
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-4 font-terminal text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="orbitron mt-4 text-[clamp(1.35rem,2.5vw,2rem)] font-black leading-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                  {post.title}
                </h2>

                <p className="mt-4 max-w-2xl font-terminal text-[12px] leading-6 tracking-[0.06em] text-zinc-300 sm:text-[13px]">
                  {post.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-300 transition duration-300 group-hover:gap-3 group-hover:text-white">
                  <span>Read More</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              <div className="h-px w-full bg-white/0 transition duration-300 group-hover:bg-white/10" />
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { label: 'Articles Published', value: '24+' },
            { label: 'Topics Covered', value: '08' },
            { label: 'Average Read Time', value: '7 min' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/2 px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/4"
            >
              <div className="font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                {stat.label}
              </div>
              <div className="orbitron mt-3 text-[clamp(2rem,3.5vw,3.2rem)] font-black leading-none text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage