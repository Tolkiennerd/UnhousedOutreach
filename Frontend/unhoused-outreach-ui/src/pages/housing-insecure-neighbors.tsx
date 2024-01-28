import { useState } from 'react';
import {
    HousingInsecureNeighborsDesktopView,
    HousingInsecureNeighborsMobileView } from '../features/neighbors/housing-insecure';

function HousingInsecureNeighbors() {
    // CHECK FOR MOBILE.
    const [detectedScreenWidthInPixels, setDetectedScreenWidthInPixels] = useState(window.innerWidth);
    window.addEventListener('resize', () => setDetectedScreenWidthInPixels(window.innerWidth));
    const isMobile = detectedScreenWidthInPixels <= 500;

    // CONTENT.
    return (
        <div>
        {isMobile ?
            <HousingInsecureNeighborsMobileView/> :
            <HousingInsecureNeighborsDesktopView/>
        }
        </div>
    );
}
export default HousingInsecureNeighbors;
