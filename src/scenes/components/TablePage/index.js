import React, { useContext, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { FirebaseContext } from '../../../services/contexts/FirebaseContextProvider'
import MuiReactTable from './components/MuiReactTable';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../../services/contexts/UserDataContextProvider';
import { config } from '../../../services/firebaseConfig';

const TablePage = (props) => {
    const { initialValue, serverSidePagination, tableColumns, tableName } = props
    const headers = tableColumns.map(column => { return { Header: column.label, accessor: column.accessor } })
    const columns = React.useMemo(
        () => headers,
        []
    )
    // const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
    const [data, setData] = React.useState([]);
    const { getPage, getRows, updateRow } = useContext(UserDataContext)
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    const refreshData = () => {
        serverSidePagination ? 
        getPage(5, 'timestamp', setData, tableName)
        :
        getRows(setData, tableName)
    }

    useEffect(() => {
        console.log('TODO: Need clean up using unsubscription when delete data');
        refreshData();
    }, []);

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateCell, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateCell = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)

        // Update remote database
        // const id = data[rowIndex].id
        // const fields = {[columnId]: value}
        // TODO: run fields validation such as isNaN and const pointNum = parseFloat(text)
        
        updateRow(data[rowIndex].id, {[columnId]: value}, tableName)
       
        
        // TODO; refresh data set when cell changed, problem is internet round trip is expensive
        // // Update loca data set
        // setData(old =>
        //     old.map((row, index) => {
        //         if (index === rowIndex) {
        //             return {
        //                 ...old[rowIndex],
        //                 [columnId]: value,
        //             }
        //         }
        //         return row
        //     })
        // )
    }
    const hiddenColumns = tableColumns.filter(column => !column.show).map(column => column.accessor);

    return (
        <React.Fragment>
            <CssBaseline />
            <MuiReactTable
                columns={columns}              // Internal
                data={data}                    // Internal
                tableColumns={tableColumns}
                hiddenColumns={hiddenColumns}  // Internal
                initialValue={initialValue}
                setData={setData}              // Internal
                refreshData={refreshData}
                skipPageReset={skipPageReset}  // Internal
                updateCell={updateCell}        // Internal
                tableName={tableName}
                serverSidePagination={serverSidePagination}
            />
        </React.Fragment>
    )
}

TablePage.propTypes = {
    tableColumns: PropTypes.arrayOf(
        PropTypes.exact({
            accessor: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired,
    initialValue: PropTypes.object.isRequired,
    tableName: PropTypes.string.isRequired,
    serverSidePagination: PropTypes.bool.isRequired
};

export default TablePage
