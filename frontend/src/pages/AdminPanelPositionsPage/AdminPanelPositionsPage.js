import React from 'react'
import PositionsTable from '../../components/AdminPanel/PositionsTable/PositionsTable'


function AdminPanelPositionsPage() {
    return (
        <div className="admin-panel-page admin-panel-page--positions">
            <h1>Welcome to Admin Panel Positions</h1>
            <PositionsTable/>
        </div>
    )
}

export default AdminPanelPositionsPage