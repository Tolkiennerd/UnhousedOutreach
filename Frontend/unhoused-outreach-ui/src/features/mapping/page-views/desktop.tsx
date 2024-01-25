import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LookupsContextType } from '../../lookups';
import { LookupsContext } from '../../../App';
import { useContext } from 'react';
import tentIcon from "../../../assets/tent.png"
import { Icon } from 'leaflet'


export function OutreachMapDesktopView() {
    const lookups = useContext(LookupsContext) as LookupsContextType;
    const tentMarkerIcon = new Icon({iconUrl: tentIcon, iconSize: [40, 50], iconAnchor: [20, 25]});
    return (
        <>
            <MapContainer style={{height: '100vh', width: '100vw'}} center={[38.9645, -77.357]} zoom={18}>
                <TileLayer
                    maxNativeZoom={19} maxZoom={21}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.9645, -77.357]} icon={tentMarkerIcon}>
                    <Popup>
                        <>
                            <div style={{fontWeight: 'bold'}}>Firstname Lastname</div>
                            <div>Other info...</div>
                            <div>Other info...</div>
                            <div>Other info...</div>
                        </>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}