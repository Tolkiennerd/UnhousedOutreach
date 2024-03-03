import { Link } from 'react-router-dom';
import { State } from '../';
import { Avatar, Chip } from '@mui/material';

export class Location
{
    locationId: number = 0;
    name?: string;
    locationTypeId: number = 0;
    latitude?: number;
    longitude?: number;
    address?: string;
    city: string = '';
    state: State = State.Undefined;
    zipCode?: string;
    isLegal?: boolean;
    arrivalDate?: Date;
    comments?: string;

    constructor(json: any) {
        // Assign all built-in types.
        Object.assign(this, json);

        // Assign all custom types.
        this.state = json?.state ?? State.Undefined;
    }

    getLocationLink(iconPath: string, locationTypeLookup: Record<number, string>) {
        const mapLink = `/map/${this.latitude}/${this.longitude}`;
        return (
            <Link to={mapLink}>
                <Chip
                    avatar={<Avatar src={iconPath} />}
                    label={this.name ?? locationTypeLookup[this.locationTypeId]}
                    clickable={true}
                    className='location-link'
                    sx={{
                    height: 'auto',
                    '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                    }
                    }}
                />
            </Link>
        );
    };
}