"use client"

import React from 'react'
import { useState, useEffect } from 'react'

const ProjectPage = () => {
  const projects = [
    {
      id: '01',
      year: '2026',
      title: 'Neural Commerce Platform',
      status: 'Deployed',
      description:
        'AI-powered e-commerce platform with real-time inventory management and predictive analytics.',
      tags: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      accent: 'from-white/20 via-white/5 to-transparent',
    },
    {
      id: '02',
      year: '2026',
      title: 'Quantum Dashboard',
      status: 'In Development',
      description:
        'Real-time analytics dashboard with advanced data visualization and performance monitoring.',
      tags: ['Next.js', 'D3.js', 'GraphQL', 'Redis'],
      accent: 'from-white/15 via-white/5 to-transparent',
    },
    {
      id: '03',
      year: '2025',
      title: 'Cryptographic Vault',
      status: 'Deployed',
      description:
        'Secure document management system with end-to-end encryption and blockchain verification.',
      tags: ['Vue.js', 'Go', 'IPFS', 'Ethereum'],
      accent: 'from-white/20 via-white/5 to-transparent',
    },
    {
      id: '04',
      year: '2025',
      title: 'Realtime Collaboration Hub',
      status: 'Deployed',
      description:
        'WebSocket-based collaboration platform with live editing and presence awareness.',
      tags: ['React', 'Socket.io', 'MongoDB', 'AWS'],
      accent: 'from-white/15 via-white/5 to-transparent',
    },
  ]

  const [viewProjects, setViewProjects] = useState([])

  useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("/api/projects");

                const data = await response.json();

                if (data.success) {
                    setViewProjects(data.data);
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
    <div className="min-h-screen px-6 py-10 text-zinc-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 font-terminal text-[11px] uppercase tracking-[0.45em] text-zinc-400">
          MISSION LOG
        </div>

        <h1 className="orbitron text-[clamp(2.75rem,6vw,5.5rem)] font-black uppercase leading-none tracking-[0.03em] text-white">
          OPERATIONS
        </h1>

        <div className="mt-10 space-y-6">
          {viewProjects.map((project) => (
            <article
              key={project._id}
              className="group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_16px_45px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/4 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_55px_rgba(0,0,0,0.55)] sm:p-6"
            >
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-r ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                    Mission #{project._id} // {project.year}
                  </div>

                  <h2 className="orbitron mt-3 text-[clamp(1.5rem,3vw,2.45rem)] font-black leading-none text-white transition-transform duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-2xl font-terminal text-[12px] leading-6 tracking-[0.06em] text-zinc-300 sm:text-[13px]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/4 px-2.5 py-1 font-terminal text-[11px] uppercase tracking-[0.14em] text-zinc-300 transition duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="group/button border border-white/15 px-4 py-2.5 font-terminal text-[11px] uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                      <span className="inline-flex items-center gap-2">
                        <span className="transition-transform duration-300 group-hover/button:-translate-y-0.5">↗</span>
                        View Code
                      </span>
                    </button>
                    <button className="group/button border border-white/15 px-4 py-2.5 font-terminal text-[11px] uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">
                      <span className="inline-flex items-center gap-2">
                        <span className="transition-transform duration-300 group-hover/button:translate-x-0.5">↗</span>
                        Live Demo
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 lg:min-w-40">
                  <span className="border border-white/20 bg-white/4 px-3.5 py-1.5 font-terminal text-[11px] uppercase tracking-[0.22em] text-zinc-200 transition duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                    {project.status}
                  </span>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/2 opacity-70 transition duration-300 group-hover:rotate-90 group-hover:scale-110 group-hover:border-white/35 lg:flex">
                    <div className="h-1.5 w-1.5 rounded-full border border-white/60" />
                  </div>

                  <div className="mt-6 w-full lg:mt-auto">
                    <div className="font-terminal text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                      Progress
                    </div>
                    <div className="mt-2.5 h-px w-full bg-white/10">
                      <div className="h-px w-[78%] bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)] transition-all duration-500 group-hover:w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { label: 'Projects Shipped', value: '50+' },
            { label: 'Systems Built', value: '20+' },
            { label: 'Deployment Rate', value: '99%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/2 px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/4"
            >
              <div className="font-terminal text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                {stat.label}
              </div>
              <div className="orbitron mt-3 text-[clamp(2rem,3.5vw,3.35rem)] font-black leading-none text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage