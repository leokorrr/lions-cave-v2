import React from 'react'
import ProjectsTable from '../../components/AdminPanel/ProjectsTable/ProjectsTable'

function AdminPanelProjectsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--projects">
            <h1>Welcome to Admin Panel Projects</h1>
            <ProjectsTable />
        </div>
    )
}

export default AdminPanelProjectsPage