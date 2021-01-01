import React, { useContext, useEffect } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MaUTable from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from './components/TablePaginationActions';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableToolbar from './components/TableToolbar';
import { UserDataContext } from '../../../../../services/contexts/UserDataContextProvider';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import { useTheme } from '@material-ui/styles';

const inputStyle = {
    padding: 0,
    margin: 0,
    border: 0,
    background: 'transparent',
};

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <Checkbox ref={resolvedRef} {...rest} />
            </>
        )
    }
)

// Create an editable cell renderer
const EditableCell = ({
    cell: { value: initialValue },
    row: { index },
    column: { id },  // column name
    updateCell, // This is a custom function that we supplied to our table instance
}) => {
    
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateCell(index, id, value)
    }

    // If the initialValue is changed externall, sync it up with our state
    React.useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <input style={inputStyle} value={value} onChange={onChange} onBlur={onBlur} />
}

EditableCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any.isRequired
    }),
    row: PropTypes.shape({
        index: PropTypes.number.isRequired
    }),
    column: PropTypes.shape({
        id: PropTypes.string.isRequired  // colmn name
    }),
    updateCell: PropTypes.func.isRequired
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
}

const MuiReactTable = ({
    data,
    columns,
    tableColumns,
    hiddenColumns,
    initialValue,
    setData,
    refreshData,
    skipPageReset,
    updateCell,
    tableName,
    serverSidePagination
}) => {
    useEffect(() => {
        setHiddenColumns(hiddenColumns)
    }, [hiddenColumns])
    const { deleteRow, insertRow, nextPage, prevPage } = useContext(UserDataContext)
    const {
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        gotoPage,
        setHiddenColumns,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            autoResetPage: !skipPageReset,
            // updateCell isn't part of the API, but
            // anything we put into these options will
            // automatically be available on the instance.
            // That way we can call this function from our
            // cell renderer!
            updateCell,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            // debugger
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox.  Pagination is a problem since this will select all
                    // rows even though not all rows are on the current page.  The solution should
                    // be server side pagination.  For one, the clients should not download all
                    // rows in most cases.  The client should only download data for the current page.
                    // In that case, getToggleAllRowsSelectedProps works fine.
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value));
    };

    const removeByIndexs2 = (array, indexs) => array.filter((_, i) => !indexs.includes(i));
    const removeByIndexs = (dataSet, indexs) => {
        // get list of ids from select rows

        // delete docs with the ids
        const xs = dataSet.filter((_, i) => indexs.includes(i)).map(row => row.id);
        xs.map(id => deleteRow(id, tableName));
        refreshData();
        // xs.forEach( id => {
        //     deleteRow(id, tableName);
        //     refreshData();
        // });
        // TODO: refresh the table, don't do the next line.  The table component should
        // refresh itself when delete is called.
        // return dataSet.filter((_, i) => !indexs.includes(i));
    }

    const deleteRowHandler = (event) => {
        // const newData = removeByIndexs(data, Object.keys(selectedRowIds).map(x => parseInt(x, 10)));
       
        // setData(newData);
        removeByIndexs(data, Object.keys(selectedRowIds).map(x => parseInt(x, 10)));
    };

    const addRowHandler = (row) => {
        // const newData = data.concat([row]);
        // setData(newData);
        delete row.subRows
        insertRow(row, tableName);
        refreshData();
    };

    const theme = useTheme();

    const handlePreviousPage = event => {
        if (data.length > 0) {
            const firstDoc = data[0]
            const pageSize = 5
            const orderBy = "timestamp"
            prevPage(firstDoc, pageSize, orderBy, setData, tableName)
        }
    };


    const handleNextPage = event => {
        if (data.length > 0) {
            const lastDoc = data[data.length - 1]
            const pageSize = 5
            const orderBy = "timestamp"
            nextPage(lastDoc, pageSize, orderBy, setData, tableName)
        }
    };

    // Render the UI for your table
    return (
        <TableContainer>
            <TableToolbar
                addRowHandler={addRowHandler}
                deleteRowHandler={deleteRowHandler}
                tableColumns={tableColumns}
                globalFilter={globalFilter}
                initialValue={initialValue}
                numSelected={Object.keys(selectedRowIds).length}
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                tableName={tableName}
            />
            <MaUTable {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell {...(column.id === 'selection' ? column.getHeaderProps() : column.getHeaderProps(column.getSortByToggleProps()))}>
                                    {column.render('Header')}
                                    {column.id !== 'selection' ?
                                        <TableSortLabel
                                            active={column.isSorted}
                                            direction={column.isSortedDesc ? 'desc' : 'asc'}
                                        /> : null}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        {serverSidePagination ?
                            <th>
                                <IconButton onClick={handlePreviousPage} aria-label="previous page">
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                </IconButton>
                                <IconButton
                                    onClick={handleNextPage}
                                    aria-label="next page"
                                >
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </IconButton>
                            </th>
                            :
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: data.length }]}
                                colSpan={3}
                                count={data.length}
                                rowsPerPage={pageSize}
                                page={pageIndex}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        }
                    </TableRow>
                </TableFooter>
            </MaUTable>
        </TableContainer>
    )
}

MuiReactTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    tableColumns: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.string.isRequired,
            accessor: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            show: PropTypes.bool.isRequired
        })
    ).isRequired,
    initialValue: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    refreshData: PropTypes.func.isRequired,
    skipPageReset: PropTypes.bool.isRequired,
    updateCell: PropTypes.func.isRequired,
    tableName: PropTypes.string.isRequired,
    serverSidePagination: PropTypes.bool.isRequired
};

export default MuiReactTable;