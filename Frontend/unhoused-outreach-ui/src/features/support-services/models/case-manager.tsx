import { Organization } from "..";

export interface CaseManager
{
    caseManagerId: number;
    firstName?: string;
    lastName?: string;
    preferredName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    organization?: Organization;
    comments?: string;
}