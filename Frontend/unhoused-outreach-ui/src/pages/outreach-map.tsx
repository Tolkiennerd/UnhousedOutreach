import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { OutreachMapDesktopView, OutreachMapMobileView } from '../features/mapping';


const OutreachMap = () => {
    // GET PARAMETERS.
    const { latitude, longitude} = useParams();

    // CHECK FOR MOBILE.
    const [detectedScreenWidthInPixels, setDetectedScreenWidthInPixels] = useState(window.innerWidth);
    window.addEventListener('resize', () => setDetectedScreenWidthInPixels(window.innerWidth));
    const isMobile = detectedScreenWidthInPixels <= 500;

    // CONTENT.
    return (
        <div>
        {isMobile ?
            <OutreachMapMobileView /> :
            <OutreachMapDesktopView startingLatitude={Number(latitude)} startingLongitude={Number(longitude)}/>
        }
        </div>
    );
}
export default OutreachMap;
