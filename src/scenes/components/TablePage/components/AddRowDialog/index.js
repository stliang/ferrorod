import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const AddRowDialog = props => {
    const { addRowHandler, initialValue, tableName, tableColumns } = props;
    const [row, setRow] = useState(initialValue);
    const [open, setOpen] = React.useState(false);

    const [switchState, setSwitchState] = React.useState({
        addMultiple: false
    });

    const handleSwitchChange = name => event => {
        setSwitchState({ ...switchState, [name]: event.target.checked });
    };

    const resetSwitch = () => {
        setSwitchState({ addMultiple: false });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        resetSwitch();
    };

    const handleAdd = (event) => {
        addRowHandler(row);
        setRow(initialValue);
        switchState.addMultiple ? setOpen(true) : setOpen(false);
    };

    const handleChange = key => ({ target: { value, type } }) => {
        if (type == "number" && !isNaN(value) ) {
            setRow({ ...row, [key]: parseFloat(value) });
        } else if (type != "number" ) {
            setRow({ ...row, [key]: value });
        }
    }

    return (
        <div>
            <Tooltip title="Add">
                <IconButton aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{tableName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add item to table.
                    </DialogContentText>
                    {tableColumns.filter(
                        column => column.show)
                        .map(column =>
                            <TextField
                                margin="dense"
                                label={column.label}
                                type={column.type}
                                fullWidth
                                value={row[column.accessor]}
                                onChange={handleChange(column.accessor)}
                            />
                        )}
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Add multiple">
                        <Switch
                            checked={switchState.addMultiple}
                            onChange={handleSwitchChange('addMultiple')}
                            value="addMultiple"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Tooltip>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

AddRowDialog.propTypes = {
    addRowHandler: PropTypes.func.isRequired,
    initialValue: PropTypes.object.isRequired,
    tableColumns: PropTypes.arrayOf(
        PropTypes.exact({
            accessor: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired,
    tableName: PropTypes.string.isRequired
};

export default AddRowDialog;