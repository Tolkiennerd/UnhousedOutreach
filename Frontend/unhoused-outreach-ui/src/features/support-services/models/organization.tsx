export class Organization
{
    supportServiceOrganizationId: number = 0;
    name?: string;
    comments?: string;

    constructor(json: any) {
        Object.assign(this, json);
    }
}