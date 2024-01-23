import { Location } from "../../mapping";

export interface Neighbor
{
    firstName?: string;
    lastName?: string;
    preferredName?: string;
    dateOfBirth?: Date;
    genderId?: number;
    phoneNumber?: string;
    emailAddress?: string;
    location?: Location;
    comments?: string;
}
