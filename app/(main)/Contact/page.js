import React from 'react'

const ContactPage = () => {
  const channels = [
    { label: 'GitHub', icon: '⌥', href: '#', },
    { label: 'LinkedIn', icon: 'in', href: '#', },
    { label: 'Twitter', icon: '↗', href: '#', },
    { label: 'Email', icon: '✉', href: 'mailto:hello@example.com', },
  ]

  return (
    <div className="min-h-screen px-6 py-10 text-zinc-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 font-terminal text-[11px] uppercase tracking-[0.5em] text-zinc-400">
          Communication Terminal
        </div>

        <h1 className="orbitron text-[clamp(2.8rem,6.5vw,6rem)] font-black uppercase leading-none tracking-[0.03em] text-white">
          INITIATE TRANSMISSION
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_50px_rgba(0,0,0,0.42)] sm:p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                  Identifier
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-white/10 bg-black/40 px-4 py-3 font-terminal text-[12px] tracking-[0.08em] text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/25 focus:bg-white/4"
                />
              </div>

              <div>
                <label className="mb-2 block font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                  Transmission Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-white/10 bg-black/40 px-4 py-3 font-terminal text-[12px] tracking-[0.08em] text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/25 focus:bg-white/4"
                />
              </div>

              <div>
                <label className="mb-2 block font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                  Message Payload
                </label>
                <textarea
                  rows="7"
                  placeholder="Enter your message"
                  className="w-full resize-none border border-white/10 bg-black/40 px-4 py-3 font-terminal text-[12px] tracking-[0.08em] text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/25 focus:bg-white/4"
                />
              </div>

              <button
                type="submit"
                className="group w-full border border-white/15 bg-white px-5 py-4 font-terminal text-[12px] uppercase tracking-[0.3em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↗</span>
                  Send Transmission
                </span>
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <section className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_50px_rgba(0,0,0,0.42)] sm:p-8">
              <div className="font-terminal text-[11px] uppercase tracking-[0.5em] text-zinc-400">
                Direct Channels
              </div>

              <div className="mt-6 space-y-5">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex items-center gap-4 transition duration-300 hover:translate-x-1"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 font-terminal text-[12px] uppercase text-white transition duration-300 group-hover:border-white/25 group-hover:bg-white/10">
                      {channel.icon}
                    </span>
                    <span className="font-terminal text-[12px] uppercase tracking-[0.3em] text-white transition duration-300 group-hover:text-zinc-200">
                      {channel.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_50px_rgba(0,0,0,0.42)] sm:p-8">
              <div className="font-terminal text-[11px] uppercase tracking-[0.5em] text-zinc-400">
                Availability Status
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
                <span className="font-terminal text-[12px] uppercase tracking-[0.25em] text-white">
                  Currently Online
                </span>
              </div>

              <div className="mt-5 space-y-2 font-terminal text-[12px] leading-6 tracking-[0.08em] text-zinc-300">
                <p>Response time: 24-48 hours</p>
                <p>Availability: Mon-Fri, 9AM-6PM EST</p>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ContactPage