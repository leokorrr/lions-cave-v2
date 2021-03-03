import React from 'react'
import { 
    getPositionsFromAPI,
    getLinksFromAPI,
    getProjectsFromAPI } from '../_services/data.service'

export const getTableData = (view) => {
    switch (view){
        case 'links':
            return getLinksFromAPI()
        case 'projects':
            return getProjectsFromAPI()
        case 'positions':
            return getPositionsFromAPI()
        default: 
            return 'error'
    }
}