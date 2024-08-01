import { useContext } from 'react';
import { HousingInsecureNeighbor } from '../../../neighbors/housing-insecure';
import { LookupsContext } from '../../../../App';
import { Lookups, getCsvList } from '../../../lookups';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import './accordion.css';
import tentIcon from '../../../../assets/tent.png';


export function HousingInsecureNeighborsAccordionView({ housingInsecureNeighbors }: { housingInsecureNeighbors: HousingInsecureNeighbor[] }) {
    // GET THE DATA.
    const lookups = useContext(LookupsContext) as Lookups;
    
    // CONTENT.
    return (
        <>
            <h3>Housing Insecure Neighbors</h3>
            <div style={{paddingTop: '20px'}}>
            {housingInsecureNeighbors.map(neighbor =>
                <Accordion key={neighbor.housingInsecureNeighborId} className="accordion">
                    <AccordionSummary expandIcon={<ExpandMore style={{color: 'white'}}/>} id={String(neighbor.housingInsecureNeighborId)}>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{flex:1}}>{neighbor.getFullName()}</div>
                            <div style={{flex:1}}>{neighbor.getAge()}</div>
                            <div style={{flex:1}}>{neighbor.getContact()}</div>
                            <div style={{flex:1}}>{neighbor.englishLevel}</div>
                            <div style={{flex:1}}>{neighbor.location?.getLocationLink(tentIcon, lookups.locationType) ?? 'Unknown'}</div>
                            <div style={{flex:1}}>Needs: {neighbor.needIds.length}</div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{display: 'flex', width: '100%'}}>
                            <div style={{flex: 1}}>
                                {neighbor.genderId ? `${lookups.gender[neighbor.genderId]} | ` : '' }
                                {getCsvList(neighbor.ethnicityIds, lookups.ethnicity)}
                            </div>
                            <div style={{flex: 1}}>
                                Case Manager: {neighbor.caseManager?.getFullName() ?? 'Unknown'}
                            </div>
                            <div style={{flex: 1}}>
                                Housing Status: {neighbor.housingStatusId ? lookups.housingStatus[neighbor.housingStatusId] : 'Unknown'}
                            </div>
                            <div style={{flex: 1}}>
                                Needs: {getCsvList(neighbor.needIds, lookups.need)}
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
