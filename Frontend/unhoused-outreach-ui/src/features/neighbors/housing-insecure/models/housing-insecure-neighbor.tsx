import { Location } from "features/mapping";
import { CaseManager } from "features/support-services";
import { Neighbor } from "features/neighbors"
import { FamilyMember, Tent } from "..";

export interface HousingInsecureNeighbor extends Neighbor
{
    housingInsecureNeighborId: number;
    ethnicityIds: number[];
    disabilityIds: number[];
    familyMembers: FamilyMember[];
    needIds: number[];
    skillIds: number[];
    housingStatusId?: number;
    isHoused?: boolean;
    isVeteran?: boolean;
    hasIdentification?: boolean;
    isCitizen?: boolean;
    coatOrJacketCount?: number;
    shirtSizeId?: number;
    shoeSizeId?: number;
    pantsSizeId?: number;
    caseManager: CaseManager;
    location: Location;
    desiredLocation: Location;
    tents: Tent[];
    englishLevelId?: number;
    cushionTypeId?: number;
    cushionConditionId?: number;
    blanketCount?: number;
    hasSleepingBag?: boolean;
    sleepingBagConditionId?: number;
    sleepingBagTemperatureThresholdFahrenheit?: number;
}
