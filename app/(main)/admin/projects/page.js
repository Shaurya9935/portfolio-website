"use client"
import React, { useState, useEffect } from 'react'
import Sidebar from '@/component/sidebar/sidebar.js'
import { createProject } from '@/actions/projectActions.js';

const AdminProjects = () => {
  const initial = [
    { id: 1, title: 'Neural Commerce Platform', tags: 'React, Node.js, TensorFlow, PostgreSQL', status: 'DEPLOYED', year: 2026 },
    { id: 2, title: 'Quantum Dashboard', tags: 'Next.js, D3.js, GraphQL, Redis', status: 'IN DEVELOPMENT', year: 2026 },
    { id: 3, title: 'Cryptographic Vault', tags: 'Vue.js, Go, IPFS, Ethereum', status: 'DEPLOYED', year: 2025 },
    { id: 4, title: 'Realtime Collaboration Hub', tags: 'React, Socket.io, MongoDB, AWS', status: 'DEPLOYED', year: 2025 },
  ]

  const [projects, setProjects] = useState(initial)
  const [open, setOpen] = useState(false)

useEffect(() => {
  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects");

      const data = await response.json();

      if (data.success) {
        setProjects(data.data);
      } else {
        console.error("Failed to fetch projects");
      }

    } catch (error) {
      console.error(error);
    }
  }

  fetchProjects();
}, []);
 


  return (
    <div className="min-h-screen flex bg-black text-zinc-100">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 px-6 py-10 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-terminal text-xs uppercase tracking-[0.35em] text-zinc-400">Manage Content</div>
              <h1 className="orbitron mt-4 text-4xl font-black text-white">Projects</h1>
            </div>

            <div>
              <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded bg-white px-4 py-3 font-terminal text-sm uppercase tracking-[0.25em] text-black shadow-sm transition transform hover:-translate-y-0.5">
                <span className="text-xl">＋</span>
                New Project
              </button>
            </div>
          </div>

          {/* Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

              <form action={createProject} className="relative z-50 w-180 max-w-[94%] bg-black border border-white/10 p-8 shadow-xl">
                <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 text-zinc-300">✕</button>
                <h2 className="orbitron text-2xl text-white">New Project</h2>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="font-terminal text-xs text-zinc-400">Project Title</label>
                    <input name="title" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="Enter project title" />
                  </div>

                  <div>
                    <label className="font-terminal text-xs text-zinc-400">Description</label>
                    <textarea name="description"  className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="Enter project description" />
                  </div>

                  <div>
                    <label className="font-terminal text-xs text-zinc-400">Tech Stack (comma separated)</label>
                    <input name="tags" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="React, Node.js, PostgreSQL" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-terminal text-xs text-zinc-400">Status</label>
                      <select name="status" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none">
                        <option>IN DEVELOPMENT</option>
                        <option>DEPLOYED</option>
                        <option>ARCHIVED</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-terminal text-xs text-zinc-400">Year</label>
                      <input name="year" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-terminal text-xs text-zinc-400">GitHub URL (optional)</label>
                      <input name="github" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="https://github.com/..." />
                    </div>
                    <div>
                      <label className="font-terminal text-xs text-zinc-400">Live URL (optional)</label>
                      <input name="live" className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="https://..." />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <button type="submit" className="flex-1 bg-white text-black font-terminal py-3">Create Project</button>
                    <button type="button" onClick={() => setOpen(false)} className="px-6 py-3 border border-white/8">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          )}

          <div className="mt-8 overflow-hidden rounded-md border border-white/8">
            <table className="w-full table-fixed text-left">
              <thead className="bg-black/40">
                <tr className="text-zinc-400 text-sm uppercase tracking-widest">
                  <th className="px-6 py-4 w-1/2">Project</th>
                  <th className="px-6 py-4 w-1/6">Status</th>
                  <th className="px-6 py-4 w-1/6">Year</th>
                  <th className="px-6 py-4 w-1/6">Actions</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((p, idx) => (
                  <tr key={p._id} className={`group border-t border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)] hover:bg-white/3 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-black/30' : ''}`}>
                    <td className="px-6 py-5 align-top">
                      <div className="font-terminal text-sm text-white">{p.title}</div>
                      <div className="mt-2 text-xs text-zinc-400">{p.tags}</div>
                    </td>

                    <td className="px-6 py-5 align-top">
                      <span className="inline-block font-terminal text-xs uppercase tracking-[0.18em] px-3 py-1 border border-white/8 text-zinc-200">{p.status}</span>
                    </td>

                    <td className="px-6 py-5 align-top font-terminal text-sm text-zinc-300">{p.year}</td>

                    <td className="px-6 py-5 align-top">
                      <div className="flex items-center gap-3">
                        <button className="p-2 rounded border border-white/8 bg-white/5 hover:bg-white/10 transition transform hover:scale-105">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>

                        <button className="p-2 rounded border border-white/8 bg-white/5 hover:bg-red-600/20 transition transform hover:scale-105">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminProjects