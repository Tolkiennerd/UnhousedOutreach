import { Box, Typography } from "@mui/material";
import { HousingInsecureNeighbor } from "../models/housing-insecure-neighbor";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function ViewEditHousingInsecureNeighbor({neighbor, onClose} : {neighbor: HousingInsecureNeighbor, onClose: () => void}) {
    const style = {
        bgcolor: '#223',
        p: 4,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: '100vh'
    };

    return (
        <Box sx={style}>
            <Button style={{marginLeft: '-20px', bottom: 0}} onClick={onClose}>
                <ArrowBackIcon />
                <div style={{paddingLeft: '10px'}}>Back to Neighbors</div>
            </Button>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{paddingTop: '10px'}}>
                Data for {neighbor.getFullName()}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
    );
}
