import { State } from '../';

export interface Location
{
    locationId: number;
    locationTypeId: number;
    latitude?: number;
    longitude?: number;
    address?: string;
    city: string;
    state: State
    zipCode: string;
    isLegal?: boolean;
    comments?: string;
}