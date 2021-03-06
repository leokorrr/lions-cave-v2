import React from 'react'
import LinksTable from '../../components/AdminPanel/LinksTable/LinksTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'

function AdminPanelLinksPage() {
    return (
        <div className="admin-panel-page admin-panel-page--links">
            <div className="admin-panel-page__header">
                <h2 className="admin-panel-page__title">Links</h2>
                <InputForm view='links'/>
            </div>
            <LinksTable />
        </div>
    )
}

export default AdminPanelLinksPage