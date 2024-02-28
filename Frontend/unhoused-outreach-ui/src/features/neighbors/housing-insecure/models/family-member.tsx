import { Neighbor } from "../..";
import { Relationship } from "./relationship";

export class FamilyMember extends Neighbor
{
    familyMemberId: number = 0;
    housingInsecureNeighborId: number = 0;
    relationshipToNeighbor?: Relationship;
    isHoused?: boolean;

    constructor(json: any) {
        super(json);
        this.familyMemberId = json.familyMemberId;
        this.housingInsecureNeighborId = json.housingInsecureNeighborId;
        this.relationshipToNeighbor = json.relationshipToNeighbor;
        this.isHoused = json.isHoused;
    }
}
