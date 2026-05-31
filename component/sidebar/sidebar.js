import React from 'react'

const Sidebar = () => {
  const items = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Projects', icon: '📁' },
    { label: 'Blog Posts', icon: '📝' },
    { label: 'Analytics', icon: '📊' },
    { label: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="h-full min-h-screen w-64 bg-black/60 border-r border-white/6 px-4 py-6 text-zinc-200">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <div className="orbitron text-2xl text-white">ADMIN</div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {items.map((it) => (
              <li key={it.label} className="group">
                <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/3 hover:text-white transition-all duration-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/8 bg-white/5 text-[14px] font-terminal group-hover:border-white/20">{it.icon}</span>
                  <span className="font-terminal tracking-[0.02em]">{it.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6">
          <a className="inline-flex items-center gap-3 rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/3 hover:text-white transition-all duration-200" href="#">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/8 bg-white/5">↩</span>
            <span className="font-terminal">Exit Admin</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar