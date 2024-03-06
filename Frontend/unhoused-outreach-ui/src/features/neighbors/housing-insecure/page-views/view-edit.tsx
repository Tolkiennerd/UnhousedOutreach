import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { HousingInsecureNeighbor } from "../models/housing-insecure-neighbor";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './view-edit.css';
import { useContext, useEffect } from "react";
import { LookupsContext } from "../../../../App";
import { Lookups } from "../../../lookups";


export function ViewEditHousingInsecureNeighbor({neighbor, onClose} : {neighbor: HousingInsecureNeighbor, onClose: () => void}) {
    useEffect(() => {
        window.addEventListener('error', e => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });
    }, []);

    const lookups = useContext(LookupsContext) as Lookups;
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
                <ArrowBackIcon id='back-arrow' />
                <span style={{paddingLeft: '10px'}}>Back to Neighbors</span>
            </Button>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{paddingTop: '10px'}}>
                Edit {neighbor.getFullName()}
            </Typography>
            <Typography id="modal-modal-description" component="div" sx={{ mt: 2 }}>
                <TextField id="first-name" label="First Name" variant="outlined" />
                <TextField id="preferred-name" label="Preferred Name" variant="outlined" />
                <TextField id="last-name" label="Last Name" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date of Birth" />
                </LocalizationProvider>
                <div style={{width: '15rem', display:'inline-flex'}}>
                    <FormControl fullWidth id='gender-form'>
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender">
                            {Object.keys(lookups.gender).map(id => 
                                <MenuItem key={`Gender-${id}`} value={id}>{lookups.gender[Number(id)]}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </div>
                <TextField label="Phone Number" variant="outlined" />
                <TextField label="Email Address" variant="outlined" />
                <textarea placeholder="Comments" />
            </Typography>
        </Box>
    );
}
