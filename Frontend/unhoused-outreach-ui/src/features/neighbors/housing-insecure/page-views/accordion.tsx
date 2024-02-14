import { useContext } from 'react';
import { HousingInsecureNeighbor } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups } from '../../../lookups';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import moment from 'moment';
import { HousingInsecureNeighborPageProps } from '../../models/props';
import './accordion.css';


export function HousingInsecureNeighborsAccordionView({ housingInsecureNeighborsData }: HousingInsecureNeighborPageProps) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;

    // FIELD FORMATTING FUNCTIONS.
    const getFullName = (neighbor: HousingInsecureNeighbor): string => {
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
                <Link to={mapLink} style={{color: 'drakblue'}}>
                    {neighbor.location.name ?? lookups.locationType[neighbor.location.locationTypeId]}
                </Link>
            </>
        );
    };

    // CONTENT.
    return (
        <>
            <h3>Housing Insecure Neighbors</h3>
            <div style={{paddingTop: '20px'}}>
            {housingInsecureNeighborsData.map(neighbor =>
                <Accordion key={neighbor.housingInsecureNeighborId} className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore style={{color: 'white'}}/>} id={String(neighbor.housingInsecureNeighborId)}>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{flex:1}}>{getFullName(neighbor)}</div>
                            <div style={{flex:1}}>{getAge(neighbor)}</div>
                            <div style={{flex:1}}>{getContact(neighbor)}</div>
                            <div style={{flex:1}}>{getLocation(neighbor)}</div>
                            <div style={{flex:1}}>Requests: {neighbor.requestIds.length}</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex'}}>
                            <div style={{flex: 1}}>
                                Gender: {neighbor.genderId ? lookups.gender[neighbor.genderId] : 'Unknown'}
                            </div>
                            <div style={{flex: 1}}>
                                Ethnicities: {neighbor.ethnicityIds.map(ethnicityId => lookups.ethnicity[ethnicityId])}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
            </div>
        </>
    );
}
