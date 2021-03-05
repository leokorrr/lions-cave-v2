import React from 'react'
import ProjectsTable from '../../components/AdminPanel/ProjectsTable/ProjectsTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'

function AdminPanelProjectsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--projects">
            <InputForm view='projects'/>
            <ProjectsTable/>
        </div>
    )
}

export default AdminPanelProjectsPage