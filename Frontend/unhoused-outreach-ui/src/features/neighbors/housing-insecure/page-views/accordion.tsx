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
import { Neighbor } from '../../models/neighbor';


export function HousingInsecureNeighborsAccordionView({ housingInsecureNeighborsData }: HousingInsecureNeighborPageProps) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;

    // FIELD FORMATTING FUNCTIONS.
    const getFullName = (neighbor: Neighbor | undefined): string => {
        if (!neighbor) {
            return 'Unknown';
        }

        const firstName = neighbor.firstName ?? '';
        const preferredName = neighbor.preferredName ? ` "${neighbor.preferredName}"`: '';
        const lastName = neighbor.lastName ?? '';
        return `${firstName}${preferredName} ${lastName}`
    };
    const getAge = (neighbor: HousingInsecureNeighbor): string => {
        if (!neighbor.dateOfBirth) {
            return 'Unknown age';
        }
        const birthDate = moment(neighbor.dateOfBirth);
        const currentDate = moment(new Date());
        const age = currentDate.diff(birthDate, "years");
        return `${String(age)} years old`;
    };
    const getContact = (neighbor: HousingInsecureNeighbor): string => neighbor.phoneNumber ?? neighbor.emailAddress ?? 'No contact info';
    const getLocation = (neighbor: HousingInsecureNeighbor) => {
        if (!neighbor.location) {
            return 'Unknown location';
        }
        const mapLink = `/map/${neighbor.location.latitude}/${neighbor.location.longitude}`;
        return (
            <Link to={mapLink} style={{color: 'drakblue'}}>
                {neighbor.location.name ?? lookups.locationType[neighbor.location.locationTypeId]}
            </Link>
        );
    };
    const getCsvList = (ids: number[], lookup: Record<number, string>) => {
        if (ids.length === 0) {
            return "None";
        }
        return ids.map((id, index) => `${lookup[id]}${index === ids.length - 1 ? '' : ', '}`);
    }

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
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{flex: 1}}>
                                {neighbor.genderId ? `${lookups.gender[neighbor.genderId]} | ` : '' }
                                {getCsvList(neighbor.ethnicityIds, lookups.ethnicity)}
                            </div>
                            <div style={{flex: 1}}>
                                Case Manager: {getFullName(neighbor.caseManager)}
                            </div>
                            <div style={{flex: 1}}>
                                Housing Status: {neighbor.housingStatusId ? lookups.housingStatus[neighbor.housingStatusId] : 'Unknown'}
                            </div>
                            <div style={{flex: 1}}>
                                Requests: {getCsvList(neighbor.requestIds, lookups.request)}
                            </div>
                            <div style={{flex: 1}}>
                                Disabilities: {getCsvList(neighbor.disabilityIds, lookups.disability)}
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
            </div>
        </>
    );
}
