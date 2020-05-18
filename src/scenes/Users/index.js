import React from 'react'
import * as CONFIG from './config'
import TablePage from '../components/TablePage'

const Users = (props) => {
    return (
        <TablePage 
        fields={CONFIG.fields} 
        initialValue={CONFIG.initialValue} 
        tableName={CONFIG.tableName}
        />
    )
}

export default Users