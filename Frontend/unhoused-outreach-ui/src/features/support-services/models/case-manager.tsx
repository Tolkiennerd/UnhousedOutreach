import { Organization } from "..";
import { Neighbor } from "../../neighbors";

export interface CaseManager extends Neighbor
{
    caseManagerId: number;
    organization?: Organization;
}