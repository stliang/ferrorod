import React from 'react'
import * as CONFIG from './config'
import TableServerPage from '../components/TableServerPage'

const Grasses = (props) => {
    return (
        <TableServerPage 
        tableColumns={CONFIG.tableColumns} 
        initialValue={CONFIG.initialValue} 
        tableName={CONFIG.tableName}
        />
    )
}

export default Grasses