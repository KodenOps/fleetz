'use client';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef, useState } from 'react';
import { FaBus, FaIdBadge, FaUser } from 'react-icons/fa';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const BusTracker = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const markerRef = useRef<mapboxgl.Marker | null>(null);

	const [coordinates, setCoordinates] = useState<[number, number][]>([
		[3.4021, 6.5244],
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCoordinates((prevCoords) => {
				const last = prevCoords[prevCoords.length - 1];
				const newCoord: [number, number] = [
					last[0] + (Math.random() - 0.5) * 0.001,
					last[1] + (Math.random() - 0.5) * 0.001,
				];
				return [...prevCoords, newCoord];
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!mapContainerRef.current) return;

		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/dark-v11',
			center: coordinates[0],
			zoom: 15,
			attributionControl: false,
		});

		mapRef.current = map;

		const el = document.createElement('div');
		el.className =
			'w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center';
		el.innerHTML = '🚌';

		const marker = new mapboxgl.Marker(el).setLngLat(coordinates[0]).addTo(map);
		markerRef.current = marker;

		map.on('load', () => {
			map.addSource('bus-trail', {
				type: 'geojson',
				data: {
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'LineString',
						coordinates: coordinates,
					},
				},
			});

			map.addLayer({
				id: 'bus-trail-layer',
				type: 'line',
				source: 'bus-trail',
				layout: {
					'line-join': 'round',
					'line-cap': 'round',
				},
				paint: {
					'line-color': '#00FFFF',
					'line-width': 4,
					'line-dasharray': [2, 2],
				},
			});
		});

		return () => map.remove();
	}, []);

	useEffect(() => {
		if (!mapRef.current || !markerRef.current) return;

		const latest = coordinates[coordinates.length - 1];
		markerRef.current.setLngLat(latest);
		mapRef.current.setCenter(latest);

		const source = mapRef.current.getSource(
			'bus-trail'
		) as mapboxgl.GeoJSONSource;
		if (source) {
			source.setData({
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: coordinates,
				},
			});
		}
	}, [coordinates]);

	return (
		<div className='w-full h-screen bg-[#0d0d0d] text-white flex flex-col rounded-lg overflow-hidden font-sans'>
			{/* Header */}
			<div className='flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#101010]'>
				<h2 className='text-cyan-400 text-xl font-bold'>Bus Movement</h2>
				<div className='flex items-center gap-2 text-white'>
					<span className='bg-[#1f1f1f] p-2 rounded-full'>
						<FaBus className='text-cyan-400' />
					</span>
					<span>Bus 021 ▾</span>
				</div>
			</div>

			{/* Map */}
			<div className='relative w-full h-full bg-red-400 min-h-[400px]'>
				<div
					ref={mapContainerRef}
					className='absolute object-cover w-full h-full '
				/>
			</div>

			{/* Info Panel */}
			<div className='bg-[#1a1a1a] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-gray-800'>
				{/* Driver Info */}
				<div>
					<h3 className='text-white font-semibold text-lg'>Driver</h3>
					<p className='text-sm mt-1 flex items-center gap-2'>
						<FaUser className='text-gray-400' />
						Chike Moghalu
					</p>
					<p className='text-sm mt-1 flex items-center gap-2'>
						<FaIdBadge className='text-gray-400' />
						KJA-231-FL
					</p>
					<p className='text-sm mt-1 flex items-center gap-2'>
						👥 32 seater Coaster Bus
					</p>
				</div>

				{/* Status + Stops */}
				<div className='flex flex-col items-start gap-2'>
					<span className='text-green-400 border border-green-400 px-3 py-1 rounded-full text-sm font-medium'>
						En-route
					</span>
					<div>
						<h4 className='text-cyan-400 text-sm font-semibold mb-1'>
							Bus Stops
						</h4>
						<p className='text-sm text-gray-300'>
							Idejo | Oworo | Charley Boy | Charity | Sango
						</p>
					</div>
				</div>

				{/* Contact Button */}
				<div>
					<button className='bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-4 py-2 rounded-md'>
						Contact Driver
					</button>
				</div>
			</div>
		</div>
	);
};

export default BusTracker;
