import { HousingInsecureNeighbor, Tent } from '../../neighbors/housing-insecure';
import { Location } from '..';

export interface LocationWithNeighbor extends Location
{
    housingInsecureNeighbors: HousingInsecureNeighbor[];
    tent?: Tent;
}