import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Table from '../../components/AdminPanel/Table/Table'
import InputForm from '../../components/AdminPanel/InputForm/InputForm'
import { setView } from '../../_actions/view'

export default function AdminPanelPage(props) {
    const { routeView } = props
    const view = useSelector(state => state.view)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(setView(routeView))
    }, [dispatch])
    return (
        <div className="admin-panel-page">
            <div className="admin-panel-page__header">
                <h2 className="admin-panel-page__title">{view.name.charAt(0).toUpperCase() + view.name.slice(1)}</h2>
                <InputForm />
            </div>
            <Table />
        </div>
    )
}
