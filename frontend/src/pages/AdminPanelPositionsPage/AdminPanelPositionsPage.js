import React from 'react'
import PositionsTable from '../../components/AdminPanel/PositionsTable/PositionsTable'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'


function AdminPanelPositionsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--positions">
            <InputForm view='positions'/>
            <PositionsTable/>
        </div>
    )
}

export default AdminPanelPositionsPage