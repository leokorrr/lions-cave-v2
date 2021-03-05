import React from 'react'
import LinksTable from '../../components/AdminPanel/LinksTable/LinksTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'

function AdminPanelLinksPage() {
    return (
        <div className="admin-panel-page admin-panel-page--links">
            <InputForm view='links'/>
            <LinksTable />
        </div>
    )
}

export default AdminPanelLinksPage