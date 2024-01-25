import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function OutreachMapMobileView() {
    return (
        <>
            <MapContainer center={[38.96577, -77.35503]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.96577, -77.35503]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}