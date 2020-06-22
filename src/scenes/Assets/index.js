import React from 'react'
import * as CONFIG from './config'
import TablePage from '../components/TablePage'

const Assets = (props) => {
    return (
        <TablePage 
        tableColumns={CONFIG.tableColumns} 
        initialValue={CONFIG.initialValue} 
        tableName={CONFIG.tableName}
        serverSidePagination={CONFIG.serverSidePagination}
        />
    )
}

export default Assets