export class Organization
{
    supportServiceOrganizationId: number;
    name?: string;
    comments?: string;

    constructor(json: any) {
        this.supportServiceOrganizationId = json.supportServiceOrganizationId;
        this.name = json.name;
        this.comments = json.comments;
    }
}