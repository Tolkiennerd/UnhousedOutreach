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
import { Location, State } from "features/mapping";
import axios from 'axios';
import { CaseManager } from "features/support-services";
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

    const updateLocationInDb = (location: Location) => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/location?otid=1`, location)
            .catch(error => console.log(error));
    };
    const updateCaseManagerInDb = (caseManager: CaseManager) => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/case-manager?otid=1`, caseManager)
            .catch(error => console.log(error));
    };
    const updateEthnicityInDb = (neighborId: number, ethnicityId: number) => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbor-ethnicity?nid=${neighborId}&otid=1`, ethnicityId, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .catch(error => console.log(error));
    }
    const deleteEthnicityFromDb = (neighborId: number, ethnicityId: number) => {
        // TODO: Get OTID from user data.
        axios
            .delete(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbor-ethnicity?id=${ethnicityId}&nid=${neighborId}&otid=1`)
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
    const setIds = (event: any, ids: number[], setMethod: any, deleteMethod: any): number[] => {
        const selectedId = getSelectedId(event);
        const selectedIdIndexInExistingList = ids.indexOf(selectedId);
        let returnedIds = [];
        if (selectedIdIndexInExistingList === -1) {
            returnedIds = [...ids, selectedId];
            setMethod(neighbor.housingInsecureNeighborId, selectedId);
        }
        else {
            returnedIds = ids.splice(selectedIdIndexInExistingList, 1);
            deleteMethod(neighbor.housingInsecureNeighborId, selectedId);
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
                        <h3 style={{textAlign: 'left'}}>Name</h3>
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
                        <h3 style={{textAlign: 'left'}}>Contact</h3>
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
                        <h3 style={{textAlign: 'left'}}>Demographics</h3>
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
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                    </div> : null }
                    {showLocation ?
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Location</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='location-type-form'>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    label="Type"
                                    defaultValue={neighbor.location?.locationTypeId} 
                                    onChange={(event) => { if (neighbor.location) neighbor.location.locationTypeId = event.target.value as number }}
                                    onBlur={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                                >
                                    {Object.keys(lookups.locationType).map(id => 
                                        <MenuItem key={`Type-${id}`} value={id}>{lookups.locationType[Number(id)]}</MenuItem>
                                    ).sort((a, b) => lookups.locationType[Number(a.props.value)].localeCompare(lookups.locationType[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            label="Address" 
                            defaultValue={neighbor.location?.address} 
                            onChange={(event) => { if (neighbor.location) neighbor.location.address = event.target.value as string }}
                            onBlur={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                            variant="outlined" 
                        />
                        <TextField
                            label="City"
                            defaultValue={neighbor.location?.city}
                            onChange={(event) => { if (neighbor.location) neighbor.location.city = event.target.value as string }}
                            onBlur={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                            variant="outlined" 
                        />
                        <div className='dropdown'>
                            <FormControl fullWidth id='state-form'>
                                <InputLabel>State</InputLabel>
                                <Select
                                    label="State"
                                    defaultValue={neighbor.location?.state}
                                    onChange={(event) => { if (neighbor.location) neighbor.location.state = event.target.value as number }}
                                    onBlur={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                                >
                                    {Object.entries(State).filter(([key, value]) => !isNaN(+key)).map(([key, value]) => 
                                        <MenuItem key={key} value={Number(key)}>{value}</MenuItem>
                                    ).sort((a, b) => String(a.props.value).localeCompare(String(b.props.value)))}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            label="Zip Code" 
                            defaultValue={neighbor.location?.zipCode} 
                            onChange={(event) => { if (neighbor.location) neighbor.location.zipCode = event.target.value as string }}
                            onBlur={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                            variant="outlined" 
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Arrival Date" 
                                defaultValue={dayjs(neighbor.location?.arrivalDate)} 
                                onChange={(event) => { if (neighbor.location) neighbor.location.arrivalDate = event?.toDate() }}
                                onClose={() => { if (neighbor.location) updateLocationInDb(neighbor.location)}}
                            />
                        </LocalizationProvider>
                        <FormControlLabel 
                            control=
                            {<Switch
                                defaultChecked={neighbor.location?.isLegal} 
                                onChange={(event) => { 
                                    if (neighbor.location) {
                                        neighbor.location.isLegal = !Boolean(event.target.value);
                                        updateLocationInDb(neighbor.location);
                                    }
                                }}
                            />}
                            label="Is Legal"
                        />
                    </div> : null }
                    {showNeeds ? 
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Needs</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='needs-form'>
                                <InputLabel>Needs</InputLabel>
                                <Select 
                                    label="Needs"
                                    multiple
                                    defaultValue={neighbor.needIds} 
                                    onChange={(event) => neighbor.needIds = event.target.value as number[]}
                                >
                                    {Object.keys(lookups.need).map(id => 
                                        <MenuItem key={`Needs-${id}`} value={id}>{lookups.need[Number(id)]}</MenuItem>
                                    ).sort((a, b) => lookups.need[Number(a.props.value)].localeCompare(lookups.need[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div> 
                    </div>: null }
                    {showDisabilities ?
                    <div className='edit-field'>
                        <h3 style={{textAlign: 'left'}}>Disabilities</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='disability-form'>
                                <InputLabel>Disabilities</InputLabel>
                                <Select 
                                    label="Disabilities"
                                    multiple
                                    defaultValue={neighbor.disabilityIds}
                                    onChange={(event) => neighbor.disabilityIds = event.target.value as number[]}
                                >
                                    {Object.keys(lookups.disability).map(id => 
                                        <MenuItem key={`Disability-${id}`} value={id}>{lookups.disability[Number(id)]}</MenuItem>
                                    ).sort((a, b) => lookups.disability[Number(a.props.value)].localeCompare(lookups.disability[Number(b.props.value)]))}
                                </Select>
                            </FormControl>
                        </div>
                    </div> : null }
                    {showHousingStatus ?
                    <div className="edit-field">
                    <h3 style={{textAlign: 'left'}}>Housing Status</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='housing-status-form'>
                                <InputLabel>Housing Status</InputLabel>
                                <Select 
                                    label="Housing Status"
                                    multiple
                                    defaultValue={neighbor.housingStatusId}
                                    onChange={(event) => neighbor.housingStatusId = event.target.value as number}
                                >
                                    {Object.keys(lookups.housingStatus).map(id => 
                                        <MenuItem key={`Housing Status-${id}`} value={id}>{lookups.housingStatus[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            label="First Name" 
                            defaultValue={neighbor.caseManager?.firstName}
                            onChange={(event) => { if (neighbor.caseManager) neighbor.caseManager.firstName = event.target.value as string}}
                            onBlur={() => { if (neighbor.caseManager) updateCaseManagerInDb(neighbor.caseManager) }}
                            variant="outlined"
                        />
                        <TextField
                            label="Last Name" 
                            defaultValue={neighbor.caseManager?.lastName}
                            onChange={(event) => { if (neighbor.caseManager) neighbor.caseManager.lastName = event.target.value as string}}
                            onBlur={() => { if (neighbor.caseManager) updateCaseManagerInDb(neighbor.caseManager) }}
                            variant="outlined"
                        />
                        <TextField
                            label="Phone Number" 
                            defaultValue={neighbor.caseManager?.phoneNumber}
                            onChange={(event) => { if (neighbor.caseManager) neighbor.caseManager.phoneNumber = event.target.value as string}}
                            onBlur={() => { if (neighbor.caseManager) updateCaseManagerInDb(neighbor.caseManager) }}
                            variant="outlined"
                        />
                        <TextField defaultValue={neighbor.caseManager?.emailAddress} label="Email Address" variant="outlined" />
                    </div> : null}
                    {showCircumstances ? 
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Circumstances</h3>
                        TODO
                    </div> : null }
                    {showSkillsIncome ? 
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Skills & Income</h3>
                        TODO
                    </div> : null }
                    {showLanguage ? 
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Language</h3>
                        TODO
                    </div> : null }
                    {showClothing ? 
                    <div className="edit-field">
                        <h3 style={{textAlign: 'left'}}>Clothing</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='shoes-form'>
                                <InputLabel>Shoe Size</InputLabel>
                                <Select
                                    label="Shoe Size"
                                    defaultValue={neighbor.shoeSizeId}
                                    onChange={(event) => neighbor.shoeSizeId = event.target.value as number}
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
                                    defaultValue={neighbor.pantsSizeId}
                                    onChange={(event) => neighbor.pantsSizeId = event.target.value as number}
                                >
                                    {Object.keys(lookups.pantsSize).map(id => 
                                        <MenuItem key={`Pants-${id}`} value={id}>{lookups.pantsSize[Number(id)]}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <div className='dropdown'>
                            <FormControl fullWidth id='pants-form'>
                                <InputLabel>Shirt Size</InputLabel>
                                <Select
                                    label="Shirt Size"
                                    multiple
                                    defaultValue={neighbor.shirtSizeId}
                                    onChange={(event) => neighbor.shirtSizeId = event.target.value as number}
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
                        <h3 style={{textAlign: 'left'}}>Comments</h3>
                        <textarea
                            value={neighbor.comments}
                            placeholder="Comments"
                            onChange={(event) => neighbor.comments = event.target.value as string}
                        />
                    </div> : null }
                </div>
            </div>
        </Box>
    );
}
