import { HousingInsecureNeighbor, Tent } from '../../neighbors/housing-insecure';
import { Location } from '..';

export class LocationWithNeighbor extends Location
{
    housingInsecureNeighbors: HousingInsecureNeighbor[] = [];
    tent?: Tent;

    constructor(json: any) {
        super(json);
        json.housingInsecureNeighbors.forEach((neighbor: any) => this.housingInsecureNeighbors.push(new HousingInsecureNeighbor(neighbor)));
        this.tent = json?.tent;
    }
}