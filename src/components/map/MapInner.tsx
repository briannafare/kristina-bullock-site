"use client";

import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const areas = [
  { name: "Portland", lat: 45.5051, lng: -122.675, radius: 12000, color: "#C4704F" },
  { name: "Beaverton", lat: 45.4871, lng: -122.8037, radius: 8000, color: "#2E7D52" },
  { name: "Lake Oswego", lat: 45.4206, lng: -122.7007, radius: 6000, color: "#1A4A6B" },
  { name: "Tigard", lat: 45.4312, lng: -122.7715, radius: 7000, color: "#8B5E3C" },
  { name: "Gresham", lat: 45.4979, lng: -122.4302, radius: 8000, color: "#6B3D7A" },
  { name: "Hillsboro", lat: 45.5229, lng: -122.9898, radius: 9000, color: "#C4704F" },
  { name: "Vancouver, WA", lat: 45.6387, lng: -122.6615, radius: 8000, color: "#2E7D52" },
];

export default function MapInner() {
  return (
    <MapContainer
      center={[45.5051, -122.675]}
      zoom={10}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {areas.map((area) => (
        <Circle
          key={area.name}
          center={[area.lat, area.lng]}
          radius={area.radius}
          pathOptions={{ color: area.color, fillColor: area.color, fillOpacity: 0.25, weight: 2 }}
        >
          <Tooltip permanent direction="center" className="map-tooltip">
            {area.name}
          </Tooltip>
        </Circle>
      ))}
    </MapContainer>
  );
}
