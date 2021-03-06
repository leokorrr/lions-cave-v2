import React from 'react'
import PositionsTable from '../../components/AdminPanel/PositionsTable/PositionsTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'


function AdminPanelPositionsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--positions">
            <div className="admin-panel-page__header">
                <h2 className="admin-panel-page__title">Positions</h2>
                <InputForm view='positions'/>
            </div>
            <PositionsTable/>
        </div>
    )
}

export default AdminPanelPositionsPage