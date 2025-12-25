import React from 'react';
import MapComponent from '../components/MapContainer';

const MapPage: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="bg-white p-2 text-center shadow-sm z-10">
                <h2 className="text-xl font-bold text-kid-green">World Explorer Map</h2>
                <p className="text-xs text-slate-500">Tap the markers to see where we are going!</p>
            </div>
            <div className="flex-1">
                <MapComponent />
            </div>
        </div>
    );
};

export default MapPage;
