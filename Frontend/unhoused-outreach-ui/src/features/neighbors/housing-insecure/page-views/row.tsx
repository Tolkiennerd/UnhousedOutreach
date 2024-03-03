import { useContext, useState } from 'react';
import { TableRow, TableCell, Box, Collapse, } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { HousingInsecureNeighbor, InfoCard } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups, getCsvList, getLookupString, getLookupValue } from '../../../lookups';
import tentIcon from '../../../../assets/tent.png';
import supportServicesIcon from '../../../../assets/cornerstones.png';
import shoeIcon from '../../../../assets/shoe.png';
import shirtIcon from '../../../../assets/shirt.png';
import pantsIcon from '../../../../assets/pants.png';
import './table.css';


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
            {underText ? <div style={{color: 'darkgray'}}>{underText}</div> : null}
        </TableCell>
    );
}

// FIELD FORMATTING FUNCTIONS.
export function Row({ neighbor, onEditClick }: { neighbor: HousingInsecureNeighbor, onEditClick: (neighbor: HousingInsecureNeighbor) => void }) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;
    const [open, setOpen] = useState(false);

    // CELL CLICK FUNCTIONS.
    const expandRow = () => {setOpen(!open)};
    const openEditModal = () => {onEditClick(neighbor)};

    // DATA FORMATTING.
    const displayNullableBoolean = (nullableBoolean: boolean | undefined): string => {
        if (nullableBoolean === undefined) {
            return 'Unknown';
        }
        return nullableBoolean ? 'Yes' : 'No';
    }

    // CONTENT.
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <Cell text={<Edit />} className='extra-small-screen edit' onClick={openEditModal} />
                <Cell text={neighbor.getFullName()} underText={neighbor.getContact()} className='extra-small-screen' onClick={expandRow} />
                <Cell 
                    text={neighbor.location?.getLocationLink(tentIcon, lookups.locationType) ?? 'Unknown'}
                    underText={neighbor.location?.arrivalDate?.toLocaleDateString() ?? ''}
                    className='extra-small-screen'
                    onClick={expandRow} 
                />
                <Cell
                    text={getLookupString(neighbor.housingStatusId, lookups.housingStatus)}
                    underText={neighbor?.caseManager?.getFullName() ?? ''}
                    className='small-screen'
                    onClick={expandRow} 
                />
                <Cell text={neighbor.requestIds.length} className='small-screen' onClick={expandRow} />
                <Cell text={neighbor.getAge()} className='small-screen' onClick={expandRow} />
                <Cell text={getCsvList(neighbor.ethnicityIds, lookups.ethnicity)} className='medium-screen' onClick={expandRow} />
                <Cell text={getLookupString(neighbor.genderId, lookups.gender)} className='medium-screen' onClick={expandRow} />
                <Cell text='TODO: English Level' className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.isHoused)} className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.isCitizen)} className='large-screen' onClick={expandRow} />
                <Cell text={displayNullableBoolean(neighbor.hasIdentification)} className='extra-large-screen' onClick={expandRow} />
                <Cell text='TODO: Income' className='extra-large-screen' onClick={expandRow} />
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
                                title='Clothing'
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
