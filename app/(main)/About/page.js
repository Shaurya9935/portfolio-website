import React from 'react'

const AboutPage = () => {
  return (
    <div className="text-zinc-100 font-sans px-8 py-12">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="font-terminal text-xs uppercase tracking-widest text-zinc-400 font-mono">PLAYER PROFILE</div>
        <h1 className="orbitron mt-4 font-extrabold tracking-wide text-white text-[clamp(40px,6vw,96px)]">SYSTEM DATA</h1>
      </header>

      <main className="max-w-6xl mx-auto flex gap-8">
        {/* Left profile card */}
        <section className="flex-1 min-w-[300px] bg-[rgba(255,255,255,0.02)] border border-zinc-700/40 p-8 rounded-md shadow-xl backdrop-blur-sm">
          <div className="space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">PLAYER</div>
              <div className="mt-3 text-2xl text-white font-bold">SHAURYA</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">CLASS</div>
              <div className="mt-3 text-lg text-white font-semibold">FULL STACK DEVELOPER</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">STATUS</div>
              <div className="mt-3 text-sm text-emerald-300">● BUILDING THE FUTURE</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">BIO</div>
              <p className="mt-3 text-zinc-300 leading-relaxed">A passionate full stack developer specializing in creating immersive digital experiences. Expert in modern web technologies, system architecture, and performance optimization.</p>
            </div>
          </div>
        </section>

        {/* Right stats grid */}
        <aside className="w-[420px] grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-center p-6 border border-zinc-700/40 bg-[rgba(255,255,255,0.015)] rounded-md">
            <div className="font-terminal text-xs uppercase tracking-widest text-zinc-400">Projects Shipped</div>
            <div className="orbitron mt-3 text-4xl font-extrabold">50+</div>
          </div>

          <div className="flex flex-col justify-center p-6 border border-zinc-700/40 bg-[rgba(255,255,255,0.015)] rounded-md">
            <div className="font-terminal text-xs uppercase tracking-widest text-zinc-400">Years Experience</div>
            <div className="orbitron mt-3 text-4xl font-extrabold">5+</div>
          </div>

          <div className="flex flex-col justify-center p-6 border border-zinc-700/40 bg-[rgba(255,255,255,0.015)] rounded-md">
            <div className="font-terminal text-xs uppercase tracking-widest text-zinc-400">Technologies</div>
            <div className="orbitron mt-3 text-4xl font-extrabold">20+</div>
          </div>

          <div className="flex flex-col justify-center p-6 border border-zinc-700/40 bg-[rgba(255,255,255,0.015)] rounded-md">
            <div className=" font-terminal text-xs uppercase tracking-widest text-zinc-400">Coffee Consumed</div>
            <div className="orbitron mt-3 text-4xl font-extrabold">∞</div>
          </div>
        </aside>
      </main>

      {/* Skill matrix */}
      <section className="max-w-6xl mx-auto mt-12">
        <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4">Skill Matrix</div>
        <div className="grid grid-cols-4 gap-6">
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-zinc-700/30 rounded-md">
            <div className="font-semibold">Frontend Development</div>
            <div className="text-sm text-zinc-300 mt-2">Proficiency</div>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-zinc-700/30 rounded-md">
            <div className="font-semibold">Backend Systems</div>
            <div className="text-sm text-zinc-300 mt-2">Proficiency</div>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-zinc-700/30 rounded-md">
            <div className="font-semibold">Full Stack Architecture</div>
            <div className="text-sm text-zinc-300 mt-2">Proficiency</div>
          </div>
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-zinc-700/30 rounded-md">
            <div className="font-semibold">Performance Optimization</div>
            <div className="text-sm text-zinc-300 mt-2">Proficiency</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage