import { useContext, useState } from 'react';
import { HousingInsecureNeighbor, InfoCard } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups, getCsvList, getLookupString, getLookupValue } from '../../../lookups';
import { Table, TableHead, TableRow, TableBody, TableContainer, TableCell, Box, Collapse } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Edit } from '@mui/icons-material';
import tentIcon from '../../../../assets/tent.png';
import supportServicesIcon from '../../../../assets/cornerstones.png';
import './table.css';
import shoeIcon from '../../../../assets/shoe.png';
import shirtIcon from '../../../../assets/shirt.png';
import pantsIcon from '../../../../assets/pants.png';


// FIELD FORMATTING FUNCTIONS.
function Row({ neighbor }: { neighbor: HousingInsecureNeighbor }) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;
    const [open, setOpen] = useState(false);

    const displayNullableBoolean = (nullableBoolean: boolean | undefined): string => {
        if (nullableBoolean === undefined) {
            return 'Unknown';
        }
        return nullableBoolean ? 'Yes' : 'No';
    }

    // CONTENT.
    return (
        <>
            <TableRow onClick={() => setOpen(!open)} sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell className='extra-small-screen edit'><Edit/></TableCell>
                <TableCell className='extra-small-screen'>
                    <div>{neighbor.getFullName()}</div>
                    <div style={{color: 'darkgray'}}>{neighbor.getContact()}</div>
                </TableCell>
                <TableCell className='small-screen'>
                    <div>{neighbor.location?.getLocationLink(tentIcon, lookups.locationType) ?? 'Unknown'}</div>
                    <div style={{color: 'darkgray'}}>{neighbor.location?.arrivalDate?.toLocaleDateString() ?? ''}</div>
                </TableCell>
                <TableCell className='small-screen'>
                    <div>{getLookupString(neighbor.housingStatusId, lookups.housingStatus)}</div>
                    <div style={{color: 'darkgray'}}>{neighbor?.caseManager?.getFullName() ?? ''}</div>
                </TableCell>
                <TableCell className='small-screen'>{neighbor.requestIds.length}</TableCell>
                <TableCell className='medium-screen'>{neighbor.getAge()}</TableCell>
                <TableCell className='medium-screen'>{getCsvList(neighbor.ethnicityIds, lookups.ethnicity)}</TableCell>
                <TableCell className='medium-screen'>{getLookupString(neighbor.genderId, lookups.gender)}</TableCell>
                <TableCell className='large-screen'>TODO: English Level</TableCell>
                <TableCell className='large-screen'>{displayNullableBoolean(neighbor.isHoused)}</TableCell>
                <TableCell className='large-screen'>{displayNullableBoolean(neighbor.isCitizen)}</TableCell>
                <TableCell className='extra-large-screen'>{displayNullableBoolean(neighbor.hasIdentification)}</TableCell>
                <TableCell className='extra-large-screen'>{displayNullableBoolean(neighbor.isVeteran)}</TableCell>
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
                                    {label: getLookupValue(neighbor.housingStatusId, lookups.housingStatus), icon: supportServicesIcon},
                                    {label: neighbor.caseManager?.getFullName()},
                                    {label: neighbor.caseManager?.getContact()}
                                ]}
                            />
                            <InfoCard
                                title='Demographics' 
                                hide={!neighbor.dateOfBirth && !neighbor.genderId && neighbor.ethnicityIds.length === 0}
                                backgroundColor='rgb(215, 104, 60)' 
                                className='box-card small-screen'
                                chips={[
                                    {label: neighbor.dateOfBirth ? neighbor.getAge() : undefined},
                                    {label: getLookupValue(neighbor.genderId, lookups.gender)},
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
                                title='Clothing Sizes'
                                hide={!neighbor.shoeSizeId}
                                backgroundColor='rgb(24, 174, 104)'
                                className='box-card'
                                chips={[
                                    {label: getLookupValue(neighbor.shoeSizeId, lookups.shoeSize), icon: shoeIcon},
                                    {label: getLookupValue(neighbor.shirtSizeId, lookups.shirtSize), icon: shirtIcon},
                                    {label: getLookupValue(neighbor.pantsSizeId, lookups.pantsSize), icon: pantsIcon}
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
        </>
    )
}

export function HousingInsecureNeighborsTableView({ housingInsecureNeighbors }: { housingInsecureNeighbors: HousingInsecureNeighbor[] }) {
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
                    {housingInsecureNeighbors.map((neighbor) => (
                        <Row key={neighbor.housingInsecureNeighborId} neighbor={neighbor} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
