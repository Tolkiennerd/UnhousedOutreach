import { useEffect, useState } from 'react';
import {
    HousingInsecureNeighbor,
    HousingInsecureNeighborsAccordionView, 
    HousingInsecureNeighborsTableView} from '../features/neighbors/housing-insecure';
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

    // CONTENT.
    return (
        <div style={{paddingTop: '20px'}}>
            <HousingInsecureNeighborsTableView housingInsecureNeighborsData={housingInsecureNeighborsData} />
        </div>
    );
}
export default HousingInsecureNeighbors;
