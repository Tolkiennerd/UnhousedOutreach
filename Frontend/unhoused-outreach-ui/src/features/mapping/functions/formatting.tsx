import { Link } from 'react-router-dom';
import { Avatar, Chip } from '@mui/material';
import { Location } from '../models/location';

export const getLocationLink = (iconPath: string, locationTypeLookup: Record<number, string>, location?: Location) => {
    if (!location) {
        return null;
    }

    const mapLink = `/map/${location.latitude}/${location.longitude}`;
    return (
        <Link to={mapLink}>
            <Chip
                avatar={<Avatar src={iconPath} />}
                label={getLocationLabel(location, locationTypeLookup)}
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

export const getLocationLabel = (location: Location, locationTypeLookup: Record<number, string>) => {
    return location.name ?? locationTypeLookup[location.locationTypeId];
};