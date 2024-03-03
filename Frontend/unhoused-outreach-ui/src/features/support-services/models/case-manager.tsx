import { Organization } from "..";
import { Neighbor } from "../../neighbors";

export class CaseManager extends Neighbor
{
    caseManagerId: number = 0;
    organization?: Organization;

    constructor(json: any) {
        // Call base class constructor.
        super(json);

        // Assign all built-in types.
        Object.assign(this, json);

        // Assign all custom types.
        this.organization = json?.organization;
    }
}