import { Location } from "../../../mapping";
import { CaseManager } from "../../../support-services";
import { Neighbor } from "../..";
import { FamilyMember, Tent } from "..";

export interface HousingInsecureNeighbor extends Neighbor
{
    housingInsecureNeighborId: number;
    ethnicityIds: number[];
    disabilityIds: number[];
    familyMembers: FamilyMember[];
    requestIds: number[];
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
    desiredLocation?: Location;
    tents: Tent[];
    cushionTypeId?: number;
    cushionConditionId?: number;
    blanketCount?: number;
    hasSleepingBag?: boolean;
    sleepingBagConditionId?: number;
    sleepingBagTemperatureThresholdFahrenheit?: number;
}
