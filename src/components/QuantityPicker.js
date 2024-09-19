import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, IconButton, InputBase } from '@mui/material';

function QuantityPicker( {quantity, onAdd, onRemove} ) {
    return (
        <Box display="flex" alignItems="center">
            <IconButton sx={{ borderRadius: 0 }} onClick={onRemove}>
                <RemoveIcon />
            </IconButton>
            <InputBase
                value={quantity}
                readOnly
                sx={{
                    width: 40,
                    textAlign: 'center',
                    padding: '5px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    mx: 1,
                    my: 1,
                    '& input': {
                        textAlign: 'center',
                        padding: 0, // ensures no extra padding affects centering
                    },
                }}
            />
            <IconButton sx={{ borderRadius: 0 }} onClick={onAdd}>
                <AddIcon />
            </IconButton>
        </Box>
    );
}

export default QuantityPicker;
