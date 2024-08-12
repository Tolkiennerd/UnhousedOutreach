import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, MenuList, Paper, Select, Switch, TextField, Typography } from "@mui/material";
import { HousingInsecureNeighbor } from "../models/housing-insecure-neighbor";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './view-edit.css';
import { useContext, useState } from "react";
import { LookupsContext } from "App";
import { Lookups } from "features/lookups";
import dayjs from "dayjs";
import { State } from "features/mapping";
import axios from 'axios';
import { getFullName } from "features/neighbors/functions/formatting";


export function ViewEditHousingInsecureNeighbor({neighbor, setNeighbor, onClose} : {neighbor: HousingInsecureNeighbor, setNeighbor: React.Dispatch<React.SetStateAction<HousingInsecureNeighbor>>, onClose: () => void}) {
    const lookups = useContext(LookupsContext) as Lookups;
    const [showName, setShowName] = useState(true);
    const [showContact, setShowContact] = useState(false);
    const [showDemographics, setShowDemographics] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showNeeds, setShowNeeds] = useState(false);
    const [showDisabilities, setShowDisabilities] = useState(false);
    const [showHousingStatus, setShowHousingStatus] = useState(false);
    const [showCircumstances, setShowCircumstances] = useState(false);
    const [showSkillsIncome, setShowSkillsIncome] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showClothing, setShowClothing] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const hideAll = () => {
        setShowName(false);
        setShowContact(false);
        setShowDemographics(false);
        setShowLocation(false);
        setShowNeeds(false);
        setShowDisabilities(false);
        setShowHousingStatus(false);
        setShowCircumstances(false);
        setShowSkillsIncome(false);
        setShowLanguage(false);
        setShowClothing(false);
        setShowComments(false);
    }

    const updateEthnicityInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-ethnicity');
    }
    const deleteEthnicityFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-ethnicity');
    }
    const updateNeedInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-need');
    }
    const deleteNeedFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-need');
    }
    const updateDisabilityInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-disability');
    }
    const deleteDisabilityFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-disability');
    }
    const updateLookupInDb = (lookupId: number, endpoint: string) => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/${endpoint}?nid=${neighbor.housingInsecureNeighborId}&otid=1`, lookupId, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .catch(error => console.log(error));
    }
    const deleteLookupFromDb = (lookupId: number, endpoint: string) => {
        // TODO: Get OTID from user data.
        axios
            .delete(`${process.env.REACT_APP_API_URL}/${endpoint}?id=${lookupId}&nid=${neighbor.housingInsecureNeighborId}&otid=1`)
            .catch(error => console.log(error));
    }

    const getSelectedId = (event: any): number => {
        const target = event.explicitOriginalTarget;
        const dataForCurrentElement = Number(target.dataset.value);
        const dataForParentElement = Number(target.parentElement.dataset.value);
        const dataForGrandparentElement = Number(target.parentElement.parentElement.dataset.value);
        const selectedId = !Number.isNaN(dataForCurrentElement) ?
            dataForCurrentElement :
            !Number.isNaN(dataForParentElement) ? 
                dataForParentElement : 
                dataForGrandparentElement;
        return selectedId;
    }
    const setIds = (event: any, ids: number[], setMethod: (id: number) => void, deleteMethod: (id: number) => void): number[] => {
        const selectedId = getSelectedId(event);
        const shouldAddNewId = !ids.includes(selectedId);
        let returnedIds = [];
        if (shouldAddNewId) {
            returnedIds = [...ids, selectedId];
            setMethod(selectedId);
        }
        else {
            returnedIds = ids.filter(id => id !== selectedId);
            deleteMethod(selectedId);
        }
        return returnedIds;
    }

    const style = {
        bgcolor: '#223',
        p: 4,
        color: 'white'
    };

    return (
        <Box sx={style}>
            {/* BACK BUTTON */}
            <Button style={{marginLeft: '-20px', bottom: 0}} onClick={onClose}>
                <ArrowBackIcon id='back-arrow' />
                <span style={{paddingLeft: '10px'}}>Back to Neighbors</span>
            </Button>

            {/* TITLE */}
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{paddingTop: '10px'}}>
                Edit {getFullName(neighbor)}
            </Typography>

            <div className="menu-and-edit">
                <div className="menu-and-edit" style={{display: 'flex'}}>
                    <Paper className="menu" style={{flex: 1}}>
                        <MenuList>
                            <MenuItem onClick={() => {hideAll(); setShowName(true);}}>Name</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowContact(true);}}>Contact</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowDemographics(true);}}>Demographics</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowLocation(true);}}>Location</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowNeeds(true);}}>Needs</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowDisabilities(true);}}>Disabilities</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowHousingStatus(true);}}>Housing Status</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowCircumstances(true);}}>Circumstances</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowSkillsIncome(true);}}>Skills and Income</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowLanguage(true);}}>Language</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowClothing(true);}}>Clothing</MenuItem>
                            <MenuItem onClick={() => {hideAll(); setShowComments(true);}}>Comments</MenuItem>
                        </MenuList>
                    </Paper>
                    {showName ? 
                    <div className="edit-field">
                        <h3>Name</h3>
                        <TextField
                            label="First Name" 
                            value={neighbor.firstName} 
                            onChange={(event) => setNeighbor({...neighbor, firstName: event.target.value})}
                            variant="outlined" 
                        />
                        <TextField 
                            label="Preferred Name" 
                            value={neighbor.preferredName} 
                            onChange={(event) => setNeighbor({...neighbor, preferredName: event.target.value})}
                            variant="outlined" 
                        />
                        <TextField 
                            label="Last Name" 
                            value={neighbor.lastName} 
                            onChange={(event) => setNeighbor({...neighbor, lastName: event.target.value})}
                            variant="outlined" 
                        />
                    </div> : null}
                    {showContact ? 
                    <div className="edit-field">
                        <h3>Contact</h3>
                        <TextField
                            label="Phone Number" 
                            value={neighbor.phoneNumber} 
                            onChange={(event) => setNeighbor({...neighbor, phoneNumber: event.target.value})}
                            variant="outlined" 
                        />
                        <TextField
                            label="Email Address"
                            value={neighbor.emailAddress} 
                            onChange={(event) => setNeighbor({...neighbor, emailAddress: event.target.value})}
                            variant="outlined"
                        />
                    </div> : null }
                    {showDemographics ? 
                    <div className="edit-field">
                        <h3>Demographics</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="Date of Birth" 
                                value={dayjs(neighbor.dateOfBirth)}
                                onChange={(event) => setNeighbor({...neighbor, dateOfBirth: event?.toDate()})}
                            />
                        </LocalizationProvider>
                        <div className='dropdown'>
                            <FormControl fullWidth id='gender-form'>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    label="Gender"
                                    value={neighbor.genderId}
                                    onChange={(event) => setNeighbor({...neighbor, genderId: Number(event.target.value)})}
                                >
                                    {Object.keys(lookups.gender).map(id => 
                                        <MenuItem id={`Gender-${id}`} key={`Gender-${id}`} value={id}>{lookups.gender[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='dropdown'>
                            <FormControl fullWidth id='ethnicity-form'>
                                <InputLabel>Ethnicity</InputLabel>
                                <Select
                                    label="Ethnicity"
                                    multiple
                                    value={neighbor.ethnicityIds}
                                    renderValue={(ids) => ids.map(id => lookups.ethnicity[Number(id)]).join(', ')}
                                    onChange={(event) => setNeighbor({...neighbor, ethnicityIds: setIds(event, neighbor.ethnicityIds, updateEthnicityInDb, deleteEthnicityFromDb)})}
                                >
                                    {Object.keys(lookups.ethnicity).map(id =>
                                        <MenuItem key={`Ethnicity-${id}`} value={id}>
                                            {lookups.ethnicity[Number(id)]}
                                        </MenuItem>
                                    ).sort((a, b) => lookups.ethnicity[Number(a.props.value)].localeCompare(lookups.ethnicity[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div>
                    </div> : null }
                    {showLocation ?
                    <div className="edit-field">
                        <h3>Location</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='location-type-form'>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    label="Type"
                                    value={neighbor.location?.locationTypeId}
                                    onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, locationTypeId: Number(event.target.value)}})}
                                >
                                    {Object.keys(lookups.locationType).map(id => 
                                        <MenuItem id={`Type-${id}`} key={`Type-${id}`} value={id}>{lookups.locationType[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            label="Address"
                            value={neighbor.location?.address} 
                            onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, address: event.target.value}})}
                            variant="outlined"
                        />
                        <TextField
                            label="City"
                            value={neighbor.location?.city} 
                            onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, city: event.target.value}})}
                            variant="outlined"
                        />
                        <div className='dropdown'>
                            <FormControl fullWidth id='state-form'>
                                <InputLabel>State</InputLabel>
                                <Select
                                    label="State"
                                    value={neighbor.location?.state}
                                    onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, state: Number(event.target.value)}})}
                                >
                                    {Object.entries(State).filter(([key, value]) => !isNaN(+key)).map(([key, value]) => 
                                        <MenuItem key={key} value={Number(key)}>{value}</MenuItem>
                                    ).sort((a, b) => String(a.props.value).localeCompare(String(b.props.value)))}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            label="Zip Code"
                            value={neighbor.location?.zipCode} 
                            onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, zipCode: event.target.value}})}
                            variant="outlined"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="Arrival Date" 
                                value={dayjs(neighbor.location?.arrivalDate)}
                                onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, arrivalDate: event?.toDate()}})}
                            />
                        </LocalizationProvider>
                        <FormControlLabel 
                            control=
                            {<Switch
                                checked={neighbor.location?.isLegal}
                                onChange={(event) => setNeighbor({...neighbor, location: {...neighbor.location, isLegal: event.target.checked}})}
                            />}
                            label="Is Legal"
                        />
                    </div> : null }
                    {showNeeds ? 
                    <div className="edit-field">
                        <h3>Needs</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='needs-form'>
                                <InputLabel>Needs</InputLabel>
                                <Select
                                    label="Needs"
                                    multiple
                                    value={neighbor.needIds}
                                    renderValue={(ids) => ids.map(id => lookups.need[Number(id)]).join(', ')}
                                    onChange={(event) => setNeighbor({...neighbor, needIds: setIds(event, neighbor.needIds, updateNeedInDb, deleteNeedFromDb)})}
                                >
                                    {Object.keys(lookups.need).map(id =>
                                        <MenuItem key={`Need-${id}`} value={id}>
                                            {lookups.need[Number(id)]}
                                        </MenuItem>
                                    ).sort((a, b) => lookups.need[Number(a.props.value)].localeCompare(lookups.need[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div> 
                    </div>: null }
                    {showDisabilities ?
                    <div className='edit-field'>
                        <h3>Disabilities</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='disability-form'>
                                <InputLabel>Disabilities</InputLabel>
                                <Select
                                    label="Disabilities"
                                    multiple
                                    value={neighbor.disabilityIds}
                                    renderValue={(ids) => ids.map(id => lookups.disability[Number(id)]).join(', ')}
                                    onChange={(event) => setNeighbor({...neighbor, disabilityIds: setIds(event, neighbor.disabilityIds, updateDisabilityInDb, deleteDisabilityFromDb)})}
                                >
                                    {Object.keys(lookups.disability).map(id =>
                                        <MenuItem key={`Disability-${id}`} value={id}>
                                            {lookups.disability[Number(id)]}
                                        </MenuItem>
                                    ).sort((a, b) => lookups.disability[Number(a.props.value)].localeCompare(lookups.disability[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div>
                    </div> : null }
                    {showHousingStatus ?
                    <div className="edit-field">
                        <h3>Housing Status</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='housing-status-form'>
                                <InputLabel>Housing Status</InputLabel>
                                <Select 
                                    label="Housing Status"
                                    value={neighbor.housingStatusId}
                                    onChange={(event) => setNeighbor({...neighbor, housingStatusId: Number(event.target.value)})}
                                >
                                    {Object.keys(lookups.housingStatus).map(id => 
                                        <MenuItem key={`Housing Status-${id}`} value={id}>{lookups.housingStatus[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <h4>Case Manager</h4>
                        <TextField
                            label="First Name"
                            value={neighbor.caseManager?.firstName}
                            onChange={(event) => setNeighbor({...neighbor, caseManager: {...neighbor.caseManager, firstName: event.target.value}})}
                            variant="outlined"
                        />
                        <TextField
                            label="Last Name" 
                            value={neighbor.caseManager?.lastName}
                            onChange={(event) => setNeighbor({...neighbor, caseManager: {...neighbor.caseManager, lastName: event.target.value}})}
                            variant="outlined"
                        />
                        <TextField
                            label="Phone Number" 
                            value={neighbor.caseManager?.phoneNumber}
                            onChange={(event) => setNeighbor({...neighbor, caseManager: {...neighbor.caseManager, phoneNumber: event.target.value}})}
                            variant="outlined"
                        />
                        <TextField 
                            label="Email Address" 
                            value={neighbor.caseManager?.emailAddress}
                            onChange={(event) => setNeighbor({...neighbor, caseManager: {...neighbor.caseManager, emailAddress: event.target.value}})}
                            variant="outlined"
                        />
                    </div> : null}
                    {showCircumstances ? 
                    <div className="edit-field">
                        <h3>Circumstances</h3>
                        <FormControlLabel 
                            control=
                            {<Switch
                                checked={neighbor.isHoused}
                                onChange={(event) => setNeighbor({...neighbor, isHoused: event.target.checked})}
                            />}
                            label="Is Housed"
                        />
                        <FormControlLabel 
                            control=
                            {<Switch
                                checked={neighbor.isVeteran}
                                onChange={(event) => setNeighbor({...neighbor, isVeteran: event.target.checked})}
                            />}
                            label="Is Veteran"
                        />
                        <FormControlLabel 
                            control=
                            {<Switch
                                checked={neighbor.isCitizen}
                                onChange={(event) => setNeighbor({...neighbor, isCitizen: event.target.checked})}
                            />}
                            label="Is Citizen"
                        />
                        <FormControlLabel 
                            control=
                            {<Switch
                                checked={neighbor.hasIdentification}
                                onChange={(event) => setNeighbor({...neighbor, hasIdentification: event.target.checked})}
                            />}
                            label="Has Identification"
                        />
                    </div> : null }
                    {showSkillsIncome ? 
                    <div className="edit-field">
                        <h3>Skills & Income</h3>
                        TODO
                    </div> : null }
                    {showLanguage ? 
                    <div className="edit-field">
                        <h3>Language</h3>
                        TODO
                    </div> : null }
                    {showClothing ? 
                    <div className="edit-field">
                        <h3>Clothing</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='shoes-form'>
                                <InputLabel>Shoe Size</InputLabel>
                                <Select
                                    label="Shoe Size"
                                    value={neighbor.shoeSizeId}
                                    onChange={(event) => setNeighbor({...neighbor, shoeSizeId: event.target.value as number })}
                                >
                                    {Object.keys(lookups.shoeSize).map(id => 
                                        <MenuItem key={`Shoes-${id}`} value={id}>{lookups.shoeSize[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='dropdown'>
                            <FormControl fullWidth id='pants-form'>
                                <InputLabel>Pants Size</InputLabel>
                                <Select
                                    label="Pants Size"
                                    value={neighbor.pantsSizeId}
                                    onChange={(event) => setNeighbor({...neighbor, pantsSizeId:  event.target.value as number})}
                                >
                                    {Object.keys(lookups.pantsSize).map(id => 
                                        <MenuItem key={`Pants-${id}`} value={id}>{lookups.pantsSize[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='dropdown'>
                            <FormControl fullWidth id='shirt-form'>
                                <InputLabel>Shirt Size</InputLabel>
                                <Select
                                    label="Shirt Size"
                                    value={neighbor.shirtSizeId}
                                    onChange={(event) => setNeighbor({...neighbor, shirtSizeId:  event.target.value as number})}
                                >
                                    {Object.keys(lookups.shirtSize).map(id => 
                                        <MenuItem key={`Shirt-${id}`} value={id}>{lookups.shirtSize[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                    </div> : null }
                    {showComments ?
                    <div className="edit-field">
                        <h3>Comments</h3>
                        <textarea
                            value={neighbor.comments}
                            placeholder="Comments"
                            onChange={(event) => setNeighbor({...neighbor, comments: event.target.value})}
                        />
                    </div> : null }
                </div>
            </div>
        </Box>
    );
}
