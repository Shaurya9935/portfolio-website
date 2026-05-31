import React from 'react'

const SkillsPage = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: '</>',
      items: [
        { name: 'React', level: '95%', width: 'w-[95%]' },
        { name: 'TypeScript', level: '90%', width: 'w-[90%]' },
        { name: 'Next.js', level: '88%', width: 'w-[88%]' },
        { name: 'Tailwind CSS', level: '92%', width: 'w-[92%]' },
      ],
    },
    {
      title: 'Backend',
      icon: '[]',
      items: [
        { name: 'Node.js', level: '90%', width: 'w-[90%]' },
        { name: 'Python', level: '85%', width: 'w-[85%]' },
        { name: 'Go', level: '80%', width: 'w-[80%]' },
        { name: 'GraphQL', level: '88%', width: 'w-[88%]' },
      ],
    },
    {
      title: 'Database',
      icon: 'DB',
      items: [
        { name: 'PostgreSQL', level: '90%', width: 'w-[90%]' },
        { name: 'MongoDB', level: '88%', width: 'w-[88%]' },
        { name: 'Redis', level: '85%', width: 'w-[85%]' },
        { name: 'Elasticsearch', level: '82%', width: 'w-[82%]' },
      ],
    },
    {
      title: 'DevOps',
      icon: '◎',
      items: [
        { name: 'AWS', level: '88%', width: 'w-[88%]' },
        { name: 'Docker', level: '90%', width: 'w-[90%]' },
        { name: 'Kubernetes', level: '82%', width: 'w-[82%]' },
        { name: 'CI/CD', level: '88%', width: 'w-[88%]' },
      ],
    },
    {
      title: 'Mobile',
      icon: '▣',
      items: [
        { name: 'React Native', level: '85%', width: 'w-[85%]' },
        { name: 'Flutter', level: '78%', width: 'w-[78%]' },
        { name: 'iOS/Swift', level: '75%', width: 'w-[75%]' },
        { name: 'Android/Kotlin', level: '75%', width: 'w-[75%]' },
      ],
    },
    {
      title: 'Design',
      icon: '◌',
      items: [
        { name: 'Figma', level: '90%', width: 'w-[90%]' },
        { name: 'UI/UX', level: '88%', width: 'w-[88%]' },
        { name: 'Motion Design', level: '85%', width: 'w-[85%]' },
        { name: '3D Graphics', level: '75%', width: 'w-[75%]' },
      ],
    },
  ]

  return (
    <div className="min-h-screen text-zinc-100 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 font-terminal text-[12px] uppercase tracking-[0.55em] text-zinc-400">
          TECH INVENTORY
        </div>

        <h1 className="orbitron text-[clamp(3rem,7vw,6.5rem)] font-black uppercase tracking-[0.03em] leading-none text-white">
          SYSTEM MODULES
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="group relative border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 font-terminal text-sm text-zinc-300">
                  {group.icon}
                </div>
                <h2 className="font-terminal text-[15px] uppercase tracking-[0.35em] text-white">
                  {group.title}
                </h2>
              </div>

              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-end justify-between gap-4 font-terminal text-sm text-zinc-300">
                      <span>{item.name}</span>
                      <span className="text-zinc-500">{item.level}</span>
                    </div>
                    <div className="h-px w-full bg-white/10">
                      <div className={`h-px bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] ${item.width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { label: 'Languages', value: '15+' },
            { label: 'Frameworks', value: '25+' },
            { label: 'Tools', value: '40+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/[0.02] px-6 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="font-terminal text-[12px] uppercase tracking-[0.45em] text-zinc-500">
                {stat.label}
              </div>
              <div className="orbitron mt-5 text-[clamp(2.5rem,4vw,4.25rem)] font-black leading-none text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

export default SkillsPage