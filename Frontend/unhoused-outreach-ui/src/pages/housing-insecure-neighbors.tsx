import { useContext, useState } from 'react';
import { 
    useReactTable,
    getCoreRowModel
} from '@tanstack/react-table';
import {
    HousingInsecureNeighborsDesktopView,
    HousingInsecureNeighborsMobileView,
    housingInsecureNeighborsColumns } from '../features/neighbors/housing-insecure';
import { LookupsContext } from '../App';
import { LookupsContextType } from '../features/lookups';

function HousingInsecureNeighbors() {
    // DEFINE THE TABLE.
    const { gender } = useContext(LookupsContext) as LookupsContextType;
    const housingInsecureNeighborsData: [] = [];
    const table = useReactTable({
        columns: housingInsecureNeighborsColumns(gender),
        data: housingInsecureNeighborsData,
        getCoreRowModel: getCoreRowModel() });

    // CHECK FOR MOBILE.
    const [detectedScreenWidthInPixels, setDetectedScreenWidthInPixels] = useState(window.innerWidth);
    window.addEventListener('resize', () => setDetectedScreenWidthInPixels(window.innerWidth));
    const isMobile = detectedScreenWidthInPixels <= 500;

    // CONTENT.
    return (
        <div className="content">
        {isMobile ?
            <HousingInsecureNeighborsMobileView/> :
            <HousingInsecureNeighborsDesktopView table={table}/>
        }
        </div>
    );
}
export default HousingInsecureNeighbors;
