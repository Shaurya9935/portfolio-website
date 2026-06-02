"use client"
import React, { useState, useEffect } from 'react'
import Sidebar from '@/component/Navigation/sidebar.js'
import FormModal from '@/component/admin/FormModal.js'
import DeleteModal from '@/component/admin/deleteModal.js'
import UpdateModal from '@/component/admin/updateModal.js'
import ProjectTable from '@/component/admin/projectTable';


const AdminProjects = () => {
    
    
    const [open, setOpen] = useState(false)
    const [projects, setProjects] = useState([])
    const [confirmDeleteId, setConfirmDeleteId] = useState(null)
    const [updateProject, setUpdateProject] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (confirmDeleteId) {
            // show with animation
            setModalVisible(true)
        } else {
            setModalVisible(false)
        }
    }, [confirmDeleteId])

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

    

    const handleDelete = async (id) => {
        try {
            const response = await fetch('/api/projects', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })

            const data = await response.json()

            if (data.success) {
                setProjects((current) => current.filter((project) => String(project._id ?? project.id) !== String(id)))
            } else {
                console.error('Failed to delete project')
            }
        } catch (error) {
            console.error('Failed to delete project:', error)
        }
    }

    

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

                    {/* Form Modal */}
                    {open && (<FormModal 
                    setProjects={setProjects} 
                    projects={projects}
                    setOpen={setOpen}
                    />
                )}

                    <div className="table-structure mt-8 overflow-hidden rounded-md border border-white/8">
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
                                <ProjectTable
                                    projects={projects}
                                    setConfirmDeleteId={setConfirmDeleteId}
                                    setUpdateProject={setUpdateProject}
                                />
                            </tbody>
                        </table>
                    </div>

                    {updateProject && (
                        <UpdateModal
                            project={updateProject}
                            setUpdateProject={setUpdateProject}
                            setProjects={setProjects}
                        />
                    )}

                    {/* Confirm Delete Modal */}
                    {confirmDeleteId && (
                        <DeleteModal 
                            confirmDeleteId={confirmDeleteId}
                            setConfirmDeleteId={setConfirmDeleteId}
                            projects={projects}
                            handleDelete={handleDelete}
                        />
                    )}
                </div>
            </main>
        </div>
    )
}

export default AdminProjects;