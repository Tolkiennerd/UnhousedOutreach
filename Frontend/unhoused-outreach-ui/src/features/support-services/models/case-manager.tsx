import { Organization } from "..";
import { Neighbor } from "../../neighbors";

export class CaseManager extends Neighbor
{
    caseManagerId: number = 0;
    organization?: Organization;

    constructor(json: any) {
        super(json);
        this.caseManagerId = json?.caseManagerId;
        this.organization = json?.organization;
    }
}