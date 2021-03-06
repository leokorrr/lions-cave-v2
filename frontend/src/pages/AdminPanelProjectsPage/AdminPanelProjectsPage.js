import React from 'react'
import ProjectsTable from '../../components/AdminPanel/ProjectsTable/ProjectsTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'

function AdminPanelProjectsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--projects">
            <div className="admin-panel-page__header">
                <h2 className="admin-panel-page__title">Projects</h2>
                <InputForm view='projects'/>
            </div>
            <ProjectsTable/>
        </div>
    )
}

export default AdminPanelProjectsPage