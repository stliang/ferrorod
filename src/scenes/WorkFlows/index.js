import React from 'react'
import * as CONFIG from './config'
import TablePage from '../components/TablePage'

const WorkFlows = (props) => {
    return (
        <TablePage 
        tableColumns={CONFIG.tableColumns} 
        initialValue={CONFIG.initialValue} 
        tableName={CONFIG.tableName}
        />
    )
}

export default WorkFlows