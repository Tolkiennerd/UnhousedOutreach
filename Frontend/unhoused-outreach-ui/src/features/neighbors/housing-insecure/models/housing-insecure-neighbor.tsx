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
    requestIds: number[] = [];
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
        super(json);
        this.housingInsecureNeighborId = json?.housingInsecureNeighborId;
        this.ethnicityIds = json?.ethnicityIds;
        this.disabilityIds = json?.disabilityIds;
        this.familyMembers = json?.familyMembers;
        this.requestIds = json?.requestIds;
        this.skillIds = json?.skillIds;
        this.housingStatusId = json?.housingStatusId;
        this.isHoused = json?.isHoused;
        this.isVeteran = json?.isVeteran;
        this.hasIdentification = json?.hasIdentification;
        this.isCitizen = json?.isCitizen;
        this.coatOrJacketCount = json?.coatOrJacketCount;
        this.shirtSizeId = json?.shirtSizeId;
        this.shoeSizeId = json?.shoeSizeId;
        this.pantsSizeId = json?.pantsSizeId;
        this.caseManager = json?.caseManager ? new CaseManager(json.caseManager) : undefined;
        this.location = json?.location ? new Location(json.location) : undefined;
        this.desiredLocation = json?.desiredLocation ? new Location(json.desiredLocation) : undefined;
        this.tents = json?.tents;
        this.cushionTypeId = json?.cushionTypeId;
        this.cushionConditionId = json?.cushionConditionId;
        this.blanketCount = json?.blanketCount;
        this.hasSleepingBag = json?.hasSleepingBag;
        this.sleepingBagConditionId = json?.sleepingBagConditionId;
        this.sleepingBagTemperatureThresholdFahrenheit = json?.sleepingBagTemperatureThresholdFahrenheit;
    }

    getHousingStatus = (housingStatusLookup: Record<number, string>): string => {
        if (!this.housingStatusId) {
            return 'Unknown';
        }
        return housingStatusLookup[this.housingStatusId];
    }
}
