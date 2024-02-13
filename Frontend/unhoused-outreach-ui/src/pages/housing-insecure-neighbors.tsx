import { useEffect, useState } from 'react';
import {
    HousingInsecureNeighbor,
    HousingInsecureNeighborsAccordionView,
    HousingInsecureNeighborsTableView } from '../features/neighbors/housing-insecure';
import axios from 'axios';


const HousingInsecureNeighbors = () => {
    // TODO: Use react-responsive to detect screen size and write site so the layout auto-adjusts
    // without needing to entirely rewrite the page.

    // GET THE DATA.
    const [housingInsecureNeighborsData, setHousingInsecureNeighborsData] = useState([] as HousingInsecureNeighbor[]);
    useEffect(() => {
        // TODO: Get OTID from user data.
        axios.get(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbors?otid=1`)
            .then(response => {
                setHousingInsecureNeighborsData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    // CHECK VIEW.
    // TODO: Implement toggle to switch between table and accordion view.
    const useAccordionView = true;

    // CONTENT.
    return (
        <div style={{paddingTop: '20px'}}>
        {useAccordionView ?
            <HousingInsecureNeighborsAccordionView housingInsecureNeighborsData={housingInsecureNeighborsData} /> :
            <HousingInsecureNeighborsTableView housingInsecureNeighborsData={housingInsecureNeighborsData} />
        }
        </div>
    );
}
export default HousingInsecureNeighbors;
