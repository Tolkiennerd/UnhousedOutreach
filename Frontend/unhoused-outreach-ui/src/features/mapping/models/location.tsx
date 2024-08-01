export interface Location
{
    locationId: number;
    name?: string;
    locationTypeId: number;
    latitude?: number;
    longitude?: number;
    address?: string;
    city: string;
    state: number;
    zipCode?: string;
    isLegal?: boolean;
    arrivalDate?: Date;
    comments?: string;
}