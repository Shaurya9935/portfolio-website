import React, { useEffect, useState } from 'react'

const UpdateModal = ({ project, setUpdateProject, setProjects }) => {
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
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title ?? '',
        description: project.description ?? '',
        tags: Array.isArray(project.tags) ? project.tags.join(', ') : (project.tags ?? ''),
        status: project.status ?? 'IN DEVELOPMENT',
        year: project.year ?? new Date().getFullYear(),
        github: project.github ?? '',
        live: project.live ?? '',
      })
      setModalVisible(true)
    } else {
      setModalVisible(false)
      setForm(initialForm)
    }
  }, [project])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleUpdate = async (event) => {
    event.preventDefault()

    if (!project?._id && !project?.id) return

    try {
      const response = await fetch('/api/projects', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: project._id ?? project.id,
          updatedData: form,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setProjects((current) => current.map((item) => {
          const itemId = String(item._id ?? item.id)
          const projectId = String(project._id ?? project.id)

          return itemId === projectId ? data.data : item
        }))

        setUpdateProject(null)
      } else {
        console.error('Failed to update project')
      }
    } catch (error) {
      console.error('Failed to update project:', error)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setUpdateProject(null)}
      />

      <form
        onSubmit={handleUpdate}
        className={`relative z-50 w-180 max-w-[94%] border border-white/10 bg-black p-8 shadow-xl transform transition-all duration-200 ${modalVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'}`}
      >
        <button
          type="button"
          onClick={() => setUpdateProject(null)}
          className="absolute right-4 top-4 text-zinc-300"
        >
          ✕
        </button>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-terminal text-xs uppercase tracking-[0.35em] text-zinc-400">Update Project</p>
            <h2 className="orbitron mt-3 text-2xl text-white">{project?.title ?? 'Project'}</h2>
          </div>

          <span className="rounded-full border border-white/8 px-3 py-1 font-terminal text-[10px] uppercase tracking-[0.2em] text-zinc-300">
            Editing
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="font-terminal text-xs text-zinc-400">Project Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="font-terminal text-xs text-zinc-400">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
              placeholder="Enter project description"
            />
          </div>

          <div>
            <label className="font-terminal text-xs text-zinc-400">Tech Stack (comma separated)</label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
              placeholder="React, Node.js, PostgreSQL"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-terminal text-xs text-zinc-400">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
              >
                <option>IN DEVELOPMENT</option>
                <option>DEPLOYED</option>
                <option>ARCHIVED</option>
              </select>
            </div>

            <div>
              <label className="font-terminal text-xs text-zinc-400">Year</label>
              <input
                name="year"
                value={form.year}
                onChange={handleChange}
                className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-terminal text-xs text-zinc-400">GitHub URL (optional)</label>
              <input
                name="github"
                value={form.github}
                onChange={handleChange}
                className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label className="font-terminal text-xs text-zinc-400">Live URL (optional)</label>
              <input
                name="live"
                value={form.live}
                onChange={handleChange}
                className="mt-2 w-full border border-white/6 bg-black/30 px-3 py-3 font-terminal text-sm text-white outline-none"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="flex-1 bg-white py-3 font-terminal text-black">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setUpdateProject(null)}
              className="border border-white/8 px-6 py-3 text-zinc-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateModal