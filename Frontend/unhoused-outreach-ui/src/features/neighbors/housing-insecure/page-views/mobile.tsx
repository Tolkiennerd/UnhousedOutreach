import { useContext } from "react";
import { LookupsContext } from "../../../../App";
import { Lookups } from "../../../lookups";

export function HousingInsecureNeighborsMobileView() {
    const lookups = useContext(LookupsContext) as Lookups;
    return (
        <div>
            <span style={{fontWeight: 'bold', padding: '1vw'}}>Housing Insecure Neighbors</span>
            Mobile!
        </div>
    )
}
