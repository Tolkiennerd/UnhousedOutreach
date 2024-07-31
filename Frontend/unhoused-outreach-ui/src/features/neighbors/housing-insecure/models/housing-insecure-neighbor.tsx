import { Location } from "../../../mapping";
import { CaseManager } from "../../../support-services";
import { Neighbor } from "../..";
import { FamilyMember, Tent } from "..";

export class HousingInsecureNeighbor extends Neighbor
{
    housingInsecureNeighborId: number = 0;
    ethnicityIds: number[] = [];
    disabilityIds: number[] = [];
    familyMembers: FamilyMember[] = [];
    needIds: number[] = [];
    skillIds: number[] = [];
    housingStatusId?: number;
    isHoused?: boolean;
    isVeteran?: boolean;
    hasIdentification?: boolean;
    isCitizen?: boolean;
    coatOrJacketCount?: number;
    shirtSizeId?: number;
    shoeSizeId?: number;
    pantsSizeId?: number;
    caseManager?: CaseManager;
    location?: Location;
    desiredLocation?: Location;
    tents: Tent[] = [];
    cushionTypeId?: number;
    cushionConditionId?: number;
    blanketCount?: number;
    hasSleepingBag?: boolean;
    sleepingBagConditionId?: number;
    sleepingBagTemperatureThresholdFahrenheit?: number;

    constructor(json: any) {
        // Call base class constructor.
        super(json);

        // Assign all built-in types.
        Object.assign(this, json);

        // Assign all custom types.
        this.caseManager = json?.caseManager ? new CaseManager(json.caseManager) : undefined;
        this.location = json?.location ? new Location(json.location) : undefined;
        this.desiredLocation = json?.desiredLocation ? new Location(json.desiredLocation) : undefined;
        this.tents = json?.tents;
    }
}
