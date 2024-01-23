import { Location } from "react-router-dom";

export interface Tent
{
    tentId: number;
    location: Location;
    personSize?: number;
    tentConditionId?: number;
    tarpCount?: number;
    tentUsageId?: number;
    comments?: string;
}
