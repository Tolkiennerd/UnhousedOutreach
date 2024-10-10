import { useContext, useState } from 'react';
import { TableRow, TableCell, Box, Collapse, Chip, Drawer, } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { HousingInsecureNeighbor, InfoCard, ViewEditHousingInsecureNeighbor } from 'features/neighbors/housing-insecure';
import { LookupsContext } from 'App';
import { Lookups, getCsvList, getLookupString, getLookupValue } from 'features/lookups';
import tentIcon from 'assets/tent.png';
import supportServicesIcon from 'assets/cornerstones.png';
import shoeIcon from 'assets/shoe.png';
import shirtIcon from 'assets/shirt.png';
import pantsIcon from 'assets/pants.png';
import './table.css';
import { getAge, getContact, getFullName } from 'features/neighbors';
import { getLocationLink } from 'features/mapping';
import axios from 'axios';
import { CaseManager } from 'features/support-services';
import { Location } from 'features/mapping';


interface CellProps {
    text: string | JSX.Element | number;
    underText?: string;
    className: string;
    onClick: () => void;
}

function Cell({ text, underText, className, onClick }: CellProps) {
    return (
        <TableCell onClick={onClick} className={className}>
            <div>{text}</div>
            {underText ? <div style={{color: 'darkgray', marginTop: '5px'}}>{underText}</div> : null}
        </TableCell>
    );
}

// FIELD FORMATTING FUNCTIONS.
export function Row({ initialNeighbor }: { initialNeighbor: HousingInsecureNeighbor }) {
    // GET THE DATA.
    const [neighbor, setNeighbor] = useState(initialNeighbor);
    const lookups = useContext(LookupsContext) as Lookups;
    const [rowExpanded, setRowExpanded] = useState(false);
    const [editPanelOpen, setEditPanelOpen] = useState(false);

    const updateNeighborInDb = () => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbor?otid=1`, neighbor)
            .catch(error => console.log(error));
    };
    const updateEthnicitiesInDb = () => {
        // TODO: Get OTID from user data.
        axios
            .put(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbor-ethnicities?otid=1`, neighbor.ethnicityIds)
            .catch(error => console.log(error));
    };
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

    // CELL CLICK FUNCTIONS.
    const expandRow = () => setRowExpanded(!rowExpanded);
    const openDrawer = () => setEditPanelOpen(true);
    const closeDrawer = () => {
        setEditPanelOpen(false);
        updateNeighborInDb();
        updateEthnicitiesInDb();
        if (neighbor.location) {
            updateLocationInDb(neighbor.location);
        }
        if (neighbor.caseManager) {
            updateCaseManagerInDb(neighbor.caseManager);
        }
    }

    // DATA FORMATTING.
    const displayNullableBoolean = (nullableBoolean: boolean | undefined): string => {
        if (nullableBoolean === undefined) {
            return 'Unknown';
        }
        return nullableBoolean ? 'Yes' : 'No';
    }
    const getNumberChip = (value: number, backgroundColor: string): JSX.Element => {
        return (
            value ?
                <Chip label={value} style={{backgroundColor: backgroundColor, border: 'none'}} variant="outlined" />
            : <div>{value}</div>
        );
    }

    // CONTENT.
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <Cell text={<Edit />} className='extra-small-screen edit' onClick={openDrawer} />
                <Cell text={getFullName(neighbor)} underText={getContact(neighbor)} className='extra-small-screen' onClick={expandRow} />
                <Cell 
                    text={getLocationLink(tentIcon, lookups.locationType, neighbor.location) ?? 'Unknown'}
                    underText={neighbor.location?.arrivalDate ? new Date(neighbor.location?.arrivalDate).toLocaleDateString() : ''}
                    className='small-screen'
                    onClick={expandRow} 
                />
                <Cell
                    text={getLookupString(neighbor.housingStatusId, lookups.housingStatus)}
                    underText={getFullName(neighbor?.caseManager)}
                    className='small-screen'
                    onClick={expandRow} 
                />
                <Cell text={getNumberChip(neighbor.needIds.length, 'var(--needs-color)')} className='small-screen' onClick={expandRow} />
                <Cell text={getAge(neighbor)} className='small-screen' onClick={expandRow} />
                <Cell text={getCsvList(neighbor.ethnicityIds, lookups.ethnicity)} className='medium-screen' onClick={expandRow} />
                <Cell text={getLookupString(neighbor.genderId, lookups.gender)} className='medium-screen' onClick={expandRow} />
                <Cell text={getLookupString(neighbor.englishLevelId, lookups.englishLevel)} className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.isHoused)} className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.isCitizen)} className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.hasIdentification)} className='extra-large-screen' onClick={expandRow} />
                <Cell text='TODO: Income' className='extra-large-screen' onClick={expandRow} />
            </TableRow>
            <TableRow>
                <TableCell className='collapsible-table-cell' />
                <TableCell className='collapsible-table-cell' colSpan={15}>
                    <Collapse in={rowExpanded} timeout="auto" unmountOnExit>
                        <Box className='box'>
                            <InfoCard
                                title='Location' 
                                hide={!neighbor.location}
                                backgroundColor='var(--location-color)'
                                className='box-card extra-small-screen'
                                chips={[
                                    {
                                        label: neighbor.location?.name ?? lookups.locationType[neighbor.location?.locationTypeId ?? 0],
                                        icon: tentIcon, 
                                        link: `/map/${neighbor.location?.latitude}/${neighbor.location?.longitude}`
                                    },
                                    {label: neighbor.location?.arrivalDate ? new Date(neighbor.location.arrivalDate).toLocaleDateString() : undefined}
                                ]}
                            />
                            <InfoCard
                                title='Housing Status' 
                                hide={!neighbor.housingStatusId}
                                backgroundColor='var(--housing-status-color)' 
                                className='box-card extra-small-screen'
                                chips={[
                                    {label: getLookupValue(neighbor.housingStatusId, lookups.housingStatus), icon: supportServicesIcon},
                                    {label: getFullName(neighbor.caseManager)},
                                    {label: getContact(neighbor.caseManager)}
                                ]}
                            />
                            <InfoCard
                                title='Demographics' 
                                hide={!neighbor.dateOfBirth && !neighbor.genderId && neighbor.ethnicityIds.length === 0}
                                backgroundColor='var(--demographics-color)' 
                                className='box-card small-screen'
                                chips={[
                                    {label: neighbor.dateOfBirth ? getAge(neighbor) : undefined},
                                    {label: getLookupValue(neighbor.genderId, lookups.gender)},
                                    {label: neighbor.ethnicityIds.length > 0 ? getCsvList(neighbor.ethnicityIds, lookups.ethnicity) : undefined}
                                ]}
                            />
                            <InfoCard
                                title='Circumstances'
                                backgroundColor='var(--circumstances-color)'
                                className='box-card large-screen'
                                chips={[
                                    {label: typeof(neighbor.isHoused)===typeof(true) ? neighbor.isHoused ? 'Housed' : 'Unhoused' : undefined},
                                    {label: neighbor.isVeteran ? 'Veteran' : undefined },
                                    {label: neighbor.isCitizen === false ? 'Undocumented' : undefined},
                                    {label: neighbor.hasIdentification === false ? 'Needs ID' : undefined},
                                ]}
                            />
                            <InfoCard
                                title='Needs' 
                                hide={neighbor.needIds.length === 0}
                                backgroundColor='var(--needs-color)' 
                                className='box-card'
                                chips={neighbor.needIds.map(needId => {
                                    return {label: lookups.need[needId]}
                                })}
                            />
                            <InfoCard
                                title='Disabilities'
                                hide={neighbor.disabilityIds.length === 0}
                                backgroundColor='var(--disability-color)'
                                className='box-card'
                                chips={neighbor.disabilityIds.map(disabilityId => {
                                    return {label: lookups.disability[disabilityId]}
                                })}
                            />
                            <InfoCard
                                title='Clothing'
                                hide={!neighbor.shoeSizeId}
                                backgroundColor='var(--clothing-color)'
                                className='box-card'
                                chips={[
                                    {label: getLookupValue(neighbor.shoeSizeId, lookups.shoeSize), icon: shoeIcon, type: 'shoe'},
                                    {label: getLookupValue(neighbor.shirtSizeId, lookups.shirtSize), icon: shirtIcon, type: 'shirt'},
                                    {label: getLookupValue(neighbor.pantsSizeId, lookups.pantsSize), icon: pantsIcon, type: 'pants'}
                                ]}
                            />
                            <InfoCard
                                title='Language'
                                // TODO: Add EnglishLevel and Languages
                                // hide={!neighbor.englishLevelId && neighbor.languageIds.length === 0}
                                hide={true}
                                backgroundColor='rgb(174, 131, 24)'
                                className='box-card'
                                chips={[
                                    // {label: neighbor.englishLevelId ? lookups.englishLevel[neighbor.englishLevelId] : undefined },
                                    // ...neighbor.languageIds.map(languageId => {return {label: lookups.language[languageId]}})
                                ]}
                            />
                            <InfoCard
                                title='Comments'
                                hide={!neighbor.comments}
                                titleColor='black'
                                backgroundColor='white' 
                                className='box-card comments'
                                text={neighbor.comments}
                            />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

            <Drawer open={editPanelOpen} anchor='right' onClose={() => closeDrawer()}>
                <ViewEditHousingInsecureNeighbor 
                    neighbor={neighbor} 
                    setNeighbor={setNeighbor} 
                    onClose={() => closeDrawer()} />
            </Drawer>
        </>
    )
}
