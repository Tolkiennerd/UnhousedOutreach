import { useEffect, useState } from 'react';
import {
    HousingInsecureNeighbor,
    HousingInsecureNeighborsTableView} from '../features/neighbors/housing-insecure';
import axios from 'axios';


const HousingInsecureNeighbors = () => {
    // GET THE DATA.
    const [housingInsecureNeighborsData, setHousingInsecureNeighborsData] = useState([] as HousingInsecureNeighbor[]);
    useEffect(() => {
        // TODO: Get OTID from user data.
        axios
            .get(`${process.env.REACT_APP_API_URL}/housing-insecure-neighbors?otid=1`)
            .then(response => setHousingInsecureNeighborsData(response.data))
            .catch(error => console.log(error));
    }, []);

    // CONTENT.
    return (
        <div style={{paddingTop: '20px'}}>
            <HousingInsecureNeighborsTableView housingInsecureNeighbors={housingInsecureNeighborsData} />
        </div>
    );
}
export default HousingInsecureNeighbors;
