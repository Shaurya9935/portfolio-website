import Sidebar from '@/component/Navigation/sidebar';
import React from 'react'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Projects', value: '4', note: '+2 this month' },
    { label: 'Blog Posts', value: '4', note: '4 published' },
    { label: 'Total Visits', value: '12,458', note: '+18% this month' },
    { label: 'Deployed Projects', value: '3', note: '1 in dev' },
  ]

  const recentProjects = [
    { title: 'Neural Commerce Platform', tag: 'DEPLOYED', year: '2026' },
    { title: 'Quantum Dashboard', tag: 'IN DEVELOPMENT', year: '2026' },
    { title: 'Cryptographic Vault', tag: 'DEPLOYED', year: '2025' },
  ]

  const recentPosts = [
    { title: 'Building Scalable Real-Time Systems', status: 'PUBLISHED', date: '2026-05-15' },
    { title: 'The Future of Web Performance', status: 'PUBLISHED', date: '2026-05-01' },
    { title: 'Cryptography in Modern Web Apps', status: 'PUBLISHED', date: '2026-04-20' },
  ]

  return (
    <div className="min-h-screen flex bg-black text-zinc-100">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 px-6 py-10 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="font-terminal text-xs uppercase tracking-[0.4em] text-zinc-400">Admin Panel</div>
          <h1 className="orbitron mt-4 text-4xl md:text-5xl font-black text-white">Dashboard</h1>

          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="group relative overflow-hidden border border-white/8 p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
                <div className="text-sm text-zinc-400">{s.note}</div>
                <div className="mt-4 text-3xl font-extrabold text-white orbitron tracking-tight">{s.value}</div>
                <div className="mt-2 font-terminal text-sm text-zinc-400">{s.label}</div>
              </div>
            ))}
          </section>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-white/8 p-6">
              <div className="font-terminal text-xs uppercase tracking-[0.35em] text-zinc-400">Recent Projects</div>
              <ul className="mt-4 space-y-4">
                {recentProjects.map((p) => (
                  <li key={p.title} className="flex items-center justify-between border-l-2 border-white/6 pl-4 py-2">
                    <div>
                      <div className="font-terminal text-sm text-white">{p.title}</div>
                      <div className="mt-1 font-terminal text-xs text-zinc-400">{p.year}</div>
                    </div>
                    <div className="font-terminal text-xs uppercase tracking-[0.2em] text-zinc-300 border border-white/8 px-2 py-1">{p.tag}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/8 p-6">
              <div className="font-terminal text-xs uppercase tracking-[0.35em] text-zinc-400">Recent Blog Posts</div>
              <ul className="mt-4 space-y-4">
                {recentPosts.map((p) => (
                  <li key={p.title} className="flex items-center justify-between border-l-2 border-white/6 pl-4 py-2">
                    <div>
                      <div className="font-terminal text-sm text-white">{p.title}</div>
                      <div className="mt-1 font-terminal text-xs text-zinc-400">{p.date}</div>
                    </div>
                    <div className="font-terminal text-xs uppercase tracking-[0.2em] text-zinc-300 border border-white/8 px-2 py-1">{p.status}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8 border border-white/8 p-6">
            <div className="font-terminal text-xs uppercase tracking-[0.35em] text-zinc-400">System Status</div>
            <div className="mt-4 font-terminal text-sm text-zinc-200">Portfolio Status: <span className="font-bold text-emerald-400">ONLINE</span></div>
            <div className="mt-2 font-terminal text-sm text-zinc-400">Last checked: Just now</div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard