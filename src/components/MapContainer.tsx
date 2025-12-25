import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { tripPoints } from '../data/tripData';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent: React.FC = () => {
    // Center roughly between Phoenix and San Diego
    const centerPosition: [number, number] = [33.0, -114.5];

    return (
        <div className="h-full w-full relative z-0">
            <MapContainer center={centerPosition} zoom={7} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {tripPoints.map((point) => (
                    <Marker key={point.id} position={[point.lat, point.lng]}>
                        <Popup>
                            <div className="text-center">
                                <h3 className="font-bold text-lg text-kid-purple">{point.name}</h3>
                                <p className="text-sm">{point.description}</p>
                                <span className="inline-block bg-kid-yellow text-xs font-bold px-2 py-1 rounded-full mt-1">
                                    Day {point.day === 0 ? 'Start' : point.day}
                                </span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
