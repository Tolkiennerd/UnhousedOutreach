import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, MenuList, Paper, Select, Switch, TextField, Typography } from "@mui/material";
import { HousingInsecureNeighbor } from "../..";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './view-edit.css';
import { useContext, useEffect, useState } from "react";
import { LookupsContext } from "App";
import { Lookups } from "features/lookups";
import dayjs from "dayjs";
import { getLocationLabel, Location, State } from "features/mapping";
import axios from 'axios';
import { getFullName } from "features/neighbors/functions/formatting";
import { ViewEditName } from "./name";
import { ViewEditContact } from "./contact";
import { ViewEditDemographics } from "./demographics";


interface ViewEditHousingInsecureNeighborProps {
    neighbor: HousingInsecureNeighbor;
    setNeighbor: React.Dispatch<React.SetStateAction<HousingInsecureNeighbor>>;
    onClose: () => void;
};

export function ViewEditHousingInsecureNeighbor({neighbor, setNeighbor, onClose} : ViewEditHousingInsecureNeighborProps) {

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
    const switchView = (showView: React.Dispatch<React.SetStateAction<boolean>>): void => {
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
        showView(true);
    };

    const updateEthnicityInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-ethnicity');
    };
    const deleteEthnicityFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-ethnicity');
    };
    const updateNeedInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-need');
    };
    const deleteNeedFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-need');
    };
    const updateDisabilityInDb = (ethnicityId: number) => {
        updateLookupInDb(ethnicityId, 'housing-insecure-neighbor-disability');
    };
    const deleteDisabilityFromDb = (ethnicityId: number) => {
        deleteLookupFromDb(ethnicityId, 'housing-insecure-neighbor-disability');
    };
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
    };
    const deleteLookupFromDb = (lookupId: number, endpoint: string) => {
        // TODO: Get OTID from user data.
        axios
            .delete(`${process.env.REACT_APP_API_URL}/${endpoint}?id=${lookupId}&nid=${neighbor.housingInsecureNeighborId}&otid=1`)
            .catch(error => console.log(error));
    };

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
    };
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
    };

    const [locationIdsToLocations, setLocationIdsToLocations] = useState({} as {[locationId: number]: Location});
    useEffect(() => {
        // TODO: Get OTID from user data.
        axios
            .get(`${process.env.REACT_APP_API_URL}/locations?otid=1`)
            .then(response => {
                const newLocation: Location = {
                    locationId: 0,
                    locationTypeId: 0,
                    city: '',
                    state: 0,
                };            
                setLocationIdsToLocations({0: newLocation});
                
                const locations: Location[] = response.data;
                locations.forEach(location => {
                    setLocationIdsToLocations(l => ({...l, [location.locationId]: location}));
                });
            })
            .catch(error => console.log(error));
    }, []);

    const style = {
        bgcolor: '#223',
        p: 4,
        color: 'white'
    };

    return (
        <Box sx={style}>
            <Button className="back-arrow" onClick={onClose}>
                <ArrowBackIcon id="back-arrow" />
                <span>Back to Neighbors</span>
            </Button>

            <Typography id="modal-title" variant="h6" component="h2">
                Edit {getFullName(neighbor)}
            </Typography>

            <div className="menu-and-edit-container">
                <div className="menu-and-edit">

                    <Paper className="menu">
                        <MenuList>
                            <MenuItem onClick={() => switchView(setShowName)}>Name</MenuItem>
                            <MenuItem onClick={() => switchView(setShowContact)}>Contact</MenuItem>
                            <MenuItem onClick={() => switchView(setShowDemographics)}>Demographics</MenuItem>
                            <MenuItem onClick={() => switchView(setShowLocation)}>Location</MenuItem>
                            <MenuItem onClick={() => switchView(setShowNeeds)}>Needs</MenuItem>
                            <MenuItem onClick={() => switchView(setShowDisabilities)}>Disabilities</MenuItem>
                            <MenuItem onClick={() => switchView(setShowHousingStatus)}>Housing Status</MenuItem>
                            <MenuItem onClick={() => switchView(setShowCircumstances)}>Circumstances</MenuItem>
                            <MenuItem onClick={() => switchView(setShowSkillsIncome)}>Skills and Income</MenuItem>
                            <MenuItem onClick={() => switchView(setShowLanguage)}>Language</MenuItem>
                            <MenuItem onClick={() => switchView(setShowClothing)}>Clothing</MenuItem>
                            <MenuItem onClick={() => switchView(setShowComments)}>Comments</MenuItem>
                        </MenuList>
                    </Paper>

                    {showName ? 
                        <ViewEditName neighbor={neighbor} setNeighbor={setNeighbor}></ViewEditName> : 
                        null
                    }
                    {showContact ?
                        <ViewEditContact neighbor={neighbor} setNeighbor={setNeighbor}></ViewEditContact> : 
                        null
                    }

                    {showDemographics ?
                        <ViewEditDemographics
                            neighbor={neighbor}
                            setNeighbor={setNeighbor}
                            setIds={setIds}
                            updateEthnicityInDb={updateEthnicityInDb}
                            deleteEthnicityFromDb={deleteEthnicityFromDb}
                        >
                        </ViewEditDemographics> :
                        null
                    }

                    {!showLocation ? null :
                    <div className="edit-field">
                        <h3>Location</h3>
                        <div className='dropdown'>
                            <FormControl fullWidth id='location-form'>
                                <InputLabel>Location</InputLabel>
                                <Select
                                    label="Location"
                                    value={neighbor.location}
                                    renderValue={(location) => getLocationLabel(location, lookups.locationType)}
                                    onChange={(event) => setNeighbor({...neighbor, location: locationIdsToLocations[Number(event.target.value)]})}
                                >
                                    {Object.keys(locationIdsToLocations).map(id => 
                                        <MenuItem 
                                            id={`Location-${id}`}
                                            key={`Location-${id}`}
                                            value={id}
                                        >
                                            {(Number(id) === 0) ? 
                                                '+ Add New Location' : 
                                                getLocationLabel(locationIdsToLocations[Number(id)], lookups.locationType)
                                            }
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </div>
                        <h4>{neighbor.location ? getLocationLabel(neighbor.location, lookups.locationType) : 'New Location'}</h4>
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
                    </div>}

                    {!showNeeds ? null :
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
                    </div>}

                    {!showDisabilities ? null :
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
                    </div>}

                    {!showHousingStatus ? null :
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
                    </div>}

                    {!showCircumstances ? null :
                    <div className="edit-field">
                        <h3>Circumstances</h3>
                        <FormControlLabel 
                            control={
                                <Switch
                                    checked={neighbor.isHoused}
                                    onChange={(event) => setNeighbor({...neighbor, isHoused: event.target.checked})}
                                />
                            }
                            label="Is Housed"
                        />
                        <FormControlLabel 
                            control={
                                <Switch
                                    checked={neighbor.isVeteran}
                                    onChange={(event) => setNeighbor({...neighbor, isVeteran: event.target.checked})}
                                />
                            }
                            label="Is Veteran"
                        />
                        <FormControlLabel 
                            control={
                                <Switch
                                    checked={neighbor.isCitizen}
                                    onChange={(event) => setNeighbor({...neighbor, isCitizen: event.target.checked})}
                                />
                            }
                            label="Is Citizen"
                        />
                        <FormControlLabel 
                            control={
                                <Switch
                                    checked={neighbor.hasIdentification}
                                    onChange={(event) => setNeighbor({...neighbor, hasIdentification: event.target.checked})}
                                />
                            }
                            label="Has Identification"
                        />
                    </div>}

                    {!showSkillsIncome ? null :
                    <div className="edit-field">
                        <h3>Skills & Income</h3>
                        TODO
                    </div>}

                    {!showLanguage ? null :
                    <div className="edit-field">
                        <h3>Language</h3>
                        TODO
                    </div>}

                    {!showClothing ? null :
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
                    </div>}

                    {!showComments ? null :
                    <div className="edit-field">
                        <h3>Comments</h3>
                        <textarea
                            value={neighbor.comments}
                            placeholder="Comments"
                            onChange={(event) => setNeighbor({...neighbor, comments: event.target.value})}
                        />
                    </div>}
                </div>
            </div>
        </Box>
    );
}
