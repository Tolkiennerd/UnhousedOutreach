import { HousingInsecureNeighbor } from "../models/housing-insecure-neighbor";


export function ViewEditHousingInsecureNeighbor(neighbor: HousingInsecureNeighbor) {
    return (
        <>
            <h3>Edit {neighbor.getFullName()}</h3>
        </>
    );
}
