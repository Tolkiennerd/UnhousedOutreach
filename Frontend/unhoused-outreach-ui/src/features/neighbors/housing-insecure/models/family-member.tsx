import { Neighbor } from "../..";
import { Relationship } from "./relationship";

export interface FamilyMember extends Neighbor
{
    familyMemberId: number;
    housingInsecureNeighborId: number;
    relationshipToNeighbor?: Relationship;
    isHoused?: boolean;
}
