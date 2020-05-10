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

const initialValue = {
    asset: '',
    cost: 0,
    price: 0,
    quantity: 0,
    status: '',
    subRows: undefined
}

const AddAssetDialog = props => {
    const [row, setRow] = useState(initialValue);
    const { addRowHandler } = props;
    const [open, setOpen] = React.useState(false);

    const [switchState, setSwitchState] = React.useState({
        addMultiple: false
    });

    const handleSwitchChange = key => event => {
        setSwitchState({ ...switchState, [key]: event.target.checked });
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

    const handleChange = key => ({ target: { value } }) => {
        setRow({ ...row, [key]: value });
    }

    return (
        <div>
            <Tooltip title="Add">
                <IconButton aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Row</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Demo add item to react table.
                        </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Asset"
                        type="text"
                        fullWidth
                        value={row.asset}
                        onChange={handleChange('asset')}
                    />
                    <TextField
                        margin="dense"
                        label="Cost"
                        type="number"
                        fullWidth
                        value={row.cost}
                        onChange={handleChange('cost')}
                    />
                    <TextField
                        margin="dense"
                        label="Price"
                        type="number"
                        fullWidth
                        value={row.price}
                        onChange={handleChange('price')}
                    />
                    <TextField
                        margin="dense"
                        label="Quantity"
                        type="number"
                        fullWidth
                        value={row.quantity}
                        onChange={handleChange('quantity')}
                    />
                    <TextField
                        margin="dense"
                        label="Status"
                        type="text"
                        fullWidth
                        value={row.status}
                        onChange={handleChange('status')}
                    />
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

AddAssetDialog.propTypes = {
    addRowHandler: PropTypes.func.isRequired
};

export default AddAssetDialog;
