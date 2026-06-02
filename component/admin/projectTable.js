import React from 'react'

const ProjectTable = ({ projects, setConfirmDeleteId, setUpdateProject }) => {
    return (
        <>
            {projects.map((p, idx) => {
                const pid = String(p._id ?? p.id)

                return (
                    <tr
                        key={p._id ?? p.id}
                        className={`group border-t border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)] hover:bg-white/3 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-black/30' : ''}`}
                    >
                        <td className="px-6 py-5 align-top">
                            <div className="font-terminal text-sm text-white">
                                {p.title}
                            </div>

                            <div className="mt-2 text-xs text-zinc-400">
                                {Array.isArray(p.tags)
                                    ? p.tags.join(", ")
                                    : p.tags}
                            </div>
                        </td>

                        <td className="px-6 py-5 align-top">
                            <span className="inline-block font-terminal text-xs uppercase tracking-[0.18em] px-3 py-1 border border-white/8 text-zinc-200">
                                {p.status}
                            </span>
                        </td>

                        <td className="px-6 py-5 align-top font-terminal text-sm text-zinc-300">
                            {p.year}
                        </td>

                        <td className="px-6 py-5 align-top">
                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => setUpdateProject(p)}
                                    className="edit p-2 rounded border border-white/8 bg-white/5 hover:bg-white/10 transition transform hover:scale-105"
                                >
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" /> </svg>
                                </button>

                                <button
                                    onClick={() => setConfirmDeleteId(pid)}
                                    className="delete p-2 rounded border border-white/8 bg-white/5 hover:bg-red-600/20 transition transform hover:scale-105"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> </svg>
                                </button>

                            </div>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default ProjectTable