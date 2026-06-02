import React from 'react'
import { useState } from 'react'

const FormModal = ({ setProjects, projects, setOpen }) => {

    const initialForm = {
        title: '',
        description: '',
        tags: '',
        status: 'IN DEVELOPMENT',
        year: new Date().getFullYear(),
        github: '',
        live: '',
    }

    const [form, setForm] = useState(initialForm)

    const handleChange = (event) => {
        const { name, value } = event.target

        setForm((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleCreate = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })

            const data = await response.json()

            if (data.success) {
                setProjects((current) => [data.data, ...current])
                setOpen(false)
                setForm(initialForm)
            } else {
                console.error('Failed to create project')
            }
        } catch (error) {
            console.error('Failed to create project:', error)
        }
    }


  return (
    <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />

                            <form onSubmit={handleCreate} className="relative z-50 w-180 max-w-[94%] bg-black border border-white/10 p-8 shadow-xl">
                                <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 text-zinc-300">✕</button>
                                <h2 className="orbitron text-2xl text-white">New Project</h2>

                                <div className="mt-6 space-y-4">
                                    <div>
                                        <label className="font-terminal text-xs text-zinc-400">Project Title</label>
                                        <input name="title" value={form.title} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="Enter project title" />
                                    </div>

                                    <div>
                                        <label className="font-terminal text-xs text-zinc-400">Description</label>
                                        <textarea name="description" value={form.description} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="Enter project description" />
                                    </div>

                                    <div>
                                        <label className="font-terminal text-xs text-zinc-400">Tech Stack (comma separated)</label>
                                        <input name="tags" value={form.tags} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="React, Node.js, PostgreSQL" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-terminal text-xs text-zinc-400">Status</label>
                                            <select name="status" value={form.status} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none">
                                                <option>IN DEVELOPMENT</option>
                                                <option>DEPLOYED</option>
                                                <option>ARCHIVED</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-terminal text-xs text-zinc-400">Year</label>
                                            <input name="year" value={form.year} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-terminal text-xs text-zinc-400">GitHub URL (optional)</label>
                                            <input name="github" value={form.github} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="https://github.com/..." />
                                        </div>
                                        <div>
                                            <label className="font-terminal text-xs text-zinc-400">Live URL (optional)</label>
                                            <input name="live" value={form.live} onChange={handleChange} className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none" placeholder="https://..." />
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-4">
                                        <button type="submit" className="flex-1 bg-white text-black font-terminal py-3">Create Project</button>
                                        <button type="button" onClick={() => setOpen(false)} className="px-6 py-3 border border-white/8">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
    </div>
  )
}

export default FormModal