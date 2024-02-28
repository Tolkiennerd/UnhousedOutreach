import { useContext, useState } from 'react';
import { HousingInsecureNeighbor, InfoCard } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups } from '../../../lookups';
import { Table, TableHead, TableRow, TableBody, TableContainer, TableCell, Box, Collapse, Chip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { HousingInsecureNeighborPageProps } from '../../models/props';
import { Neighbor } from '../../models/neighbor';
import Paper from '@mui/material/Paper';
import { Edit } from '@mui/icons-material';
import tentIcon from '../../../../assets/tent.png';
import supportServicesIcon from '../../../../assets/cornerstones.png';
import './table.css';

// FIELD FORMATTING FUNCTIONS.
const getFullName = (neighbor: Neighbor | undefined, defaultName: string = 'Unknown'): string => {
    if (!neighbor) {
        return defaultName;
    }

    const firstName = neighbor.firstName ?? '';
    const preferredName = neighbor.preferredName ? ` "${neighbor.preferredName}"`: '';
    const lastName = neighbor.lastName ?? '';
    return `${firstName}${preferredName} ${lastName}`
};
const getAge = (neighbor: HousingInsecureNeighbor): string => {
    if (!neighbor.dateOfBirth) {
        return 'Unknown';
    }
    const birthDate = moment(neighbor.dateOfBirth);
    const currentDate = moment(new Date());
    const age = currentDate.diff(birthDate, 'years');
    return String(age);
};
const getContact = (neighbor: Neighbor): string => neighbor.phoneNumber ?? neighbor.emailAddress ?? '';
const getLocation = (neighbor: HousingInsecureNeighbor, locationTypeLookup: Record<number, string>) => {
    if (!neighbor.location) {
        return 'Unknown';
    }
    const mapLink = `/map/${neighbor.location.latitude}/${neighbor.location.longitude}`;
    return (
        <Link to={mapLink}>
            <Chip
                avatar={<Avatar src={tentIcon} />}
                label={neighbor.location.name ?? locationTypeLookup[neighbor.location.locationTypeId]}
                clickable={true}
                className='location-link'
                sx={{
                height: 'auto',
                '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                }
                }}
            />
        </Link>
    );
};
const getCsvList = (ids: number[], lookup: Record<number, string>) => {
    if (ids.length === 0) {
        return 'None';
    }
    return ids.map(id => lookup[id]).join(', ');
}
const getHousingStatus = (neighbor: HousingInsecureNeighbor, housingStatusLookup: Record<number, string>): string => {
    if (!neighbor.housingStatusId) {
        return 'Unknown';
    }
    return housingStatusLookup[neighbor.housingStatusId];
}
const getGender = (genderId: number | undefined, genderLookup: Record<number, string>) => {
    if (!genderId) {
        return 'Unknown';
    }
    return genderLookup[genderId];
}

function Row({ neighbor }: { neighbor: HousingInsecureNeighbor }) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;
    const [open, setOpen] = useState(false);

    // CONTENT.
    return (
        <>
            <TableRow onClick={() => setOpen(!open)} sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell className='extra-small-screen'><Edit/></TableCell>
                <TableCell className='extra-small-screen'>
                    <div>{getFullName(neighbor)}</div>
                    <div style={{color: 'darkgray'}}>{getContact(neighbor)}</div>
                </TableCell>
                <TableCell className='small-screen'>
                    <div>{getLocation(neighbor, lookups.locationType)}</div>
                    <div style={{color: 'darkgray'}}>{neighbor.location?.arrivalDate?.toLocaleDateString() ?? ''}</div>
                </TableCell>
                <TableCell className='small-screen'>
                    <div>{getHousingStatus(neighbor, lookups.housingStatus)}</div>
                    <div style={{color: 'darkgray'}}>{getFullName(neighbor?.caseManager, '')}</div>
                </TableCell>
                <TableCell className='small-screen'>{neighbor.requestIds.length}</TableCell>
                <TableCell className='medium-screen'>{getAge(neighbor)}</TableCell>
                <TableCell className='medium-screen'>{getCsvList(neighbor.ethnicityIds, lookups.ethnicity)}</TableCell>
                <TableCell className='medium-screen'>{getGender(neighbor.genderId, lookups.gender)}</TableCell>
                <TableCell className='large-screen'>TODO: English Level</TableCell>
                <TableCell className='large-screen'>{neighbor.isHoused ? 'Yes' : 'No'}</TableCell>
                <TableCell className='large-screen'>{neighbor.isCitizen ? 'Yes' : 'No'}</TableCell>
                <TableCell className='extra-large-screen'>{neighbor.hasIdentification ? 'Yes' : 'No'}</TableCell>
                <TableCell className='extra-large-screen'>{neighbor.isVeteran ? 'Yes' : 'No'}</TableCell>
                <TableCell className='extra-large-screen'>TODO: Income</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='collapsible-table-cell' />
                <TableCell className='collapsible-table-cell' colSpan={15}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box className='box'>
                            <InfoCard
                                title='Location' 
                                hide={!neighbor.location}
                                backgroundColor='rgb(102, 102, 0)'
                                className='box-card extra-small-screen'
                                chips={[
                                    {
                                        label: neighbor.location?.name ?? lookups.locationType[neighbor.location?.locationTypeId ?? 0],
                                        icon: tentIcon, 
                                        link: `/map/${neighbor.location?.latitude}/${neighbor.location?.longitude}`
                                    },
                                    {label: neighbor.location?.arrivalDate ? neighbor.location.arrivalDate.toLocaleDateString() : undefined}
                                ]}
                            />
                            <InfoCard
                                title='Housing Status' 
                                hide={!neighbor.housingStatusId}
                                backgroundColor='rgb(14, 3, 138)' 
                                className='box-card extra-small-screen'
                                chips={[
                                    {label: getHousingStatus(neighbor, lookups.housingStatus), icon: supportServicesIcon},
                                    {label: neighbor.caseManager ? getFullName(neighbor.caseManager) : undefined},
                                    {label: neighbor.caseManager?.phoneNumber || neighbor.caseManager?.emailAddress ? getContact(neighbor.caseManager) : undefined}
                                ]}
                            />
                            <InfoCard
                                title='Demographics' 
                                hide={!neighbor.dateOfBirth && !neighbor.genderId && neighbor.ethnicityIds.length === 0}
                                backgroundColor='rgb(215, 104, 60)' 
                                className='box-card medium-screen'
                                chips={[
                                    {label: neighbor.dateOfBirth ? getAge(neighbor) : undefined},
                                    {label: neighbor.genderId ? getGender(neighbor.genderId, lookups.gender) : undefined},
                                    {label: neighbor.ethnicityIds.length > 0 ? getCsvList(neighbor.ethnicityIds, lookups.ethnicity) : undefined}
                                ]}
                            />
                            <InfoCard
                                title='Circumstances'
                                backgroundColor='purple'
                                className='box-card large-screen'
                                chips={[
                                    {label: typeof(neighbor.isHoused)===typeof(true) ? neighbor.isHoused ? 'Housed' : 'Unhoused' : undefined},
                                    {label: neighbor.isVeteran ? 'Veteran' : undefined },
                                    {label: neighbor.isCitizen === false ? 'Undocumented' : undefined},
                                    {label: neighbor.hasIdentification === false ? 'Needs ID' : undefined},
                                ]}
                            />
                            <InfoCard
                                title='Requests' 
                                hide={neighbor.requestIds.length === 0}
                                backgroundColor='rgb(217, 36, 36)' 
                                className='box-card'
                                chips={neighbor.requestIds.map(requestId => {
                                    return {label: lookups.request[requestId]}
                                })}
                            />
                            <InfoCard
                                title='Disabilities'
                                hide={neighbor.disabilityIds.length === 0}
                                backgroundColor='rgb(174, 131, 24)'
                                className='box-card'
                                chips={neighbor.disabilityIds.map(disabilityId => {
                                    return {label: lookups.disability[disabilityId]}
                                })}
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
        </>
    )
}

export function HousingInsecureNeighborsTableView({ housingInsecureNeighborsData }: HousingInsecureNeighborPageProps) {
    const columns = [
        {name: '', class: 'extra-small-screen'},
        {name: 'Name', class: 'extra-small-screen'},
        {name: 'Location', class: 'small-screen'},
        {name: 'Housing Status', class: 'small-screen'},
        {name: 'Requests', class: 'small-screen'},
        {name: 'Age', class: 'medium-screen'},
        {name: 'Ethnicity', class: 'medium-screen'},
        {name: 'Gender', class: 'medium-screen'},
        {name: 'English Level', class: 'large-screen'},
        {name: 'Housed?', class: 'large-screen'},
        {name: 'Citizen?', class: 'large-screen'},
        {name: 'Has ID?', class: 'extra-large-screen'},
        {name: 'Veteran?', class: 'extra-large-screen'},
        {name: 'Income', class: 'extra-large-screen'}
    ]

    return (
        <>
            <h3>Housing Insecure Neighbors</h3>
            <TableContainer component={Paper} className='table'>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        {columns.map(col =>
                            <TableCell key={`${col.name}-Column`} className={col.class}>{col.name}</TableCell>
                        )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {housingInsecureNeighborsData.map((neighbor) => (
                        <Row key={neighbor.housingInsecureNeighborId} neighbor={neighbor} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
