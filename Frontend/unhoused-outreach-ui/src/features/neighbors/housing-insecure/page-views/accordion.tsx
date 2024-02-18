import { useContext } from 'react';
import { HousingInsecureNeighbor } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups } from '../../../lookups';
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import moment from 'moment';
import { HousingInsecureNeighborPageProps } from '../../models/props';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import './accordion.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: 'black',
    p: 4,
};

export function HousingInsecureNeighborsAccordionView({ housingInsecureNeighborsData }: HousingInsecureNeighborPageProps) {
    // HANDLE EDIT MODAL
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [neighbor, setNeighbor] = React.useState()

    const handleOpen = (neighbor: any) => {
        setNeighbor(neighbor);

        setOpen(true);
        console.log(neighbor, 'neighbor')
    };
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;

    // FIELD FORMATTING FUNCTIONS.
    const getFullName = (neighbor: HousingInsecureNeighbor | any): string => {
        if (!neighbor) {
            return 'N/A'
        }
        const firstName = neighbor.firstName ?? '';
        const preferredName = neighbor.preferredName ? ` "${neighbor.preferredName}"` : '';
        const lastName = neighbor.lastName ?? '';
        return `${firstName}${preferredName} ${lastName}`
    };
    const getAge = (neighbor: HousingInsecureNeighbor): string => {
        if (!neighbor.dateOfBirth) {
            return 'Unknown';
        }
        const birthDate = moment(neighbor.dateOfBirth);
        const currentDate = moment(new Date());
        const age = currentDate.diff(birthDate, "years");
        return String(age);
    };
    const getContact = (neighbor: HousingInsecureNeighbor): string => neighbor.phoneNumber ?? neighbor.emailAddress ?? 'N/A';
    const getLocation = (neighbor: HousingInsecureNeighbor) => {
        if (!neighbor.location) {
            return null;
        }
        const mapLink = `map/${neighbor.location.latitude}/${neighbor.location.longitude}`;
        return (
            <>
                Location:
                <Link to={mapLink} style={{ color: 'drakblue' }}>
                    {neighbor.location.name ?? lookups.locationType[neighbor.location.locationTypeId]}
                </Link>
            </>
        );
    };

    // CONTENT.
    return (
        <>
            <h3>Housing Insecure Neighbors</h3>
            <div style={{ paddingTop: '20px' }}>
                {housingInsecureNeighborsData.map(neighbor =>
                    <Accordion key={neighbor.housingInsecureNeighborId} className="accordion">
                        <AccordionSummary expandIcon={<ExpandMore style={{ color: 'white' }} />} id={String(neighbor.housingInsecureNeighborId)}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <div style={{ flex: 1 }}>{getFullName(neighbor)}</div>
                                <div style={{ flex: 1 }}>{getAge(neighbor)}</div>
                                <div style={{ flex: 1 }}>{getContact(neighbor)}</div>
                                <div style={{ flex: 1 }}>{getLocation(neighbor)}</div>
                                <div style={{ flex: 1 }}>Requests: {neighbor.requestIds.length}</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    Gender: {neighbor.genderId ? lookups.gender[neighbor.genderId] : 'Unknown'}
                                </div>
                                <div style={{ flex: 1 }}>
                                    Ethnicities: {neighbor.ethnicityIds.map(ethnicityId => lookups.ethnicity[ethnicityId])}
                                </div>
                                <div>
                                    <IconButton aria-label="delete" size="small" onClick={(e) => {
                                        handleOpen(neighbor);
                                    }}>
                                        <ModeEditIcon fontSize="inherit" />
                                    </IconButton>

                                </div>

                            </div>
                        </AccordionDetails>
                    </Accordion>
                )}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Data for {getFullName(neighbor)}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        <div className="flex justify-content-end">
                            <Button onClick={handleClose}>Close</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
