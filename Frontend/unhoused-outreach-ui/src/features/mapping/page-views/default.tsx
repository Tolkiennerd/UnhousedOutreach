import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Lookups } from '../../lookups';
import { LookupsContext } from '../../../App';
import { useContext, useEffect, useState } from 'react';
import tentIcon from "../../../assets/tent.png"
import { Icon, LatLngExpression } from 'leaflet'
import axios from 'axios';
import { LocationWithNeighbor } from '../models/location-with-neighbor';
import { MapProps } from '..';


export function OutreachMapDefaultView({startingLatitude, startingLongitude}: MapProps) {
    // GET LOOKUPS.
    const lookups = useContext(LookupsContext) as Lookups;

    // GET THE DATA.
    const [locationsWithNeighbors, setLocationsWithNeighbors] = useState([] as LocationWithNeighbor[]);
    const tentMarkerIcon = new Icon({iconUrl: tentIcon, iconSize: [40, 50], iconAnchor: [20, 25]});
    useEffect(() => {
        // TODO: Get OTID from user data.
        axios.get(`${process.env.REACT_APP_API_URL}/locations-with-neighbors?otid=1`)
            .then(response => setLocationsWithNeighbors(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <MapContainer style={{height: '92.5vh', width: '100vw'}} center={[startingLatitude, startingLongitude]} zoom={18}>
                <TileLayer
                    maxNativeZoom={19} maxZoom={21}
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locationsWithNeighbors.map((locationWithNeighbors) =>
                    locationWithNeighbors.latitude && locationWithNeighbors.longitude ?
                    <Marker position={getCoordinatesFromLocation(locationWithNeighbors)} icon={tentMarkerIcon} key={locationWithNeighbors.locationId}>
                        <Popup>
                            {locationWithNeighbors.tent && locationWithNeighbors.tent?.tentUsageId ?
                                <div>{lookups.tentUsage[locationWithNeighbors.tent.tentUsageId]}</div> :
                                null
                            }
                            {locationWithNeighbors.housingInsecureNeighbors.map((housingInsecureNeighbor) =>
                                <div key={housingInsecureNeighbor.housingInsecureNeighborId}>
                                    <div style={{fontWeight: 'bold'}}>{`${housingInsecureNeighbor.firstName} ${housingInsecureNeighbor.lastName}`}</div>
                                    {locationWithNeighbors.arrivalDate ? <div>Here since: {locationWithNeighbors.arrivalDate?.toLocaleDateString()}</div> : null}
                                    {housingInsecureNeighbor.genderId ? <div>Gender: {lookups.gender[housingInsecureNeighbor.genderId]}</div> : null}
                                    <div >
                                        Ethnicity:
                                        {housingInsecureNeighbor.ethnicityIds.map((ethnicityId, index) => 
                                            <span>{index > 0 ? ', ' : ' '}{lookups.ethnicity[ethnicityId]}</span>
                                        )}
                                    </div>
                                    <div >
                                        Requests:
                                        {housingInsecureNeighbor.requestIds.map((requestId) => 
                                            <span>{lookups.request[requestId]}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </Marker> :
                    null
                )}
            </MapContainer>
        </>
    )
}

const getCoordinatesFromLocation = (location: LocationWithNeighbor): LatLngExpression => {
    if (!location.latitude || !location.longitude) {
        return [0,0];
    }
    return [Number(location.latitude), Number(location.longitude)];
};