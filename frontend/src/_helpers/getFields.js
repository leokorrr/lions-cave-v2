export const getFields = view => {
    switch(view) {
        case 'projects':
            return ['name', 'type', 'url', 'color']
        case 'links': 
            return ['name', 'url', 'imageTitle']
        case 'positions':
            return ['title', 'stack', 'color', 'responsibilities', 'imageTitle', 'fromDate', 'toDate']
        default: 
            return ['error']
    }
}

export default {
    getFields
}