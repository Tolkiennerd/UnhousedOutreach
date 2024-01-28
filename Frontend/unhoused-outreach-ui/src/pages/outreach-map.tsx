import { useState } from 'react';
import { OutreachMapDesktopView, OutreachMapMobileView } from '../features/mapping';

function OutreachMap() {
    // CHECK FOR MOBILE.
    const [detectedScreenWidthInPixels, setDetectedScreenWidthInPixels] = useState(window.innerWidth);
    window.addEventListener('resize', () => setDetectedScreenWidthInPixels(window.innerWidth));
    const isMobile = detectedScreenWidthInPixels <= 500;

    // CONTENT.
    return (
        <div>
        {isMobile ?
            <OutreachMapMobileView/> :
            <OutreachMapDesktopView/>
        }
        </div>
    );
}
export default OutreachMap;
