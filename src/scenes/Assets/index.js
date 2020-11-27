import React from 'react'
import * as CONFIG from './config'
import TablePage from '../components/TablePage'
import AssetChart from '../components/Charts/AssetChart'

const Assets = (props) => {
    return (
        <React.Fragment>
            <TablePage
                tableColumns={CONFIG.tableColumns}
                initialValue={CONFIG.initialValue}
                tableName={CONFIG.tableName}
                serverSidePagination={CONFIG.serverSidePagination}
            />
            <AssetChart
                tableName={CONFIG.tableName}
            />
        </React.Fragment>
    )
}

export default Assets