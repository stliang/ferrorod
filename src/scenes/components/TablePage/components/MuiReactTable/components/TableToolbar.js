
import React from 'react';

import AddRowDialog from '../../AddRowDialog';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import GlobalFilter from './GlobalFilter';
import IconButton from '@material-ui/core/IconButton';
import { lighten, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const TableToolbar = ({
    addRowHandler,
    deleteRowHandler,
    fields,
    globalFilter,
    initialValue,
    numSelected,
    preGlobalFilteredRows,
    setGlobalFilter,
    tableName
}) => {
    const classes = useStyles();

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <AddRowDialog
                addRowHandler={addRowHandler}
                initialValue={initialValue}
                fields={fields}
                tableName={tableName}
            />
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        {tableName}
                    </Typography>
                )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={deleteRowHandler}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                )}
        </Toolbar>
    );
};

TableToolbar.propTypes = {
    addRowHandler: PropTypes.func.isRequired,
    deleteRowHandler: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.exact({
            accessor: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired,
    globalFilter: PropTypes.string.isRequired,
    initialValue: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    preGlobalFilteredRows: PropTypes.array.isRequired,
    setGlobalFilter: PropTypes.func.isRequired,
    tableName: PropTypes.string.isRequired
};

export default TableToolbar;