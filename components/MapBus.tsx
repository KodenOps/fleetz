'use client';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaBus, FaIdBadge, FaUser } from 'react-icons/fa';
import DriverImg from '@/public/assets/driver1.png';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const BusTracker = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const markerRef = useRef<mapboxgl.Marker | null>(null);

	const [coordinates, setCoordinates] = useState<[number, number][]>([
		[3.4021, 6.5244],
	]);

	const getTheme = () =>
		typeof window !== 'undefined' &&
		document.documentElement.classList.contains('dark')
			? 'dark'
			: 'light';
	const [theme, setTheme] = useState<'light' | 'dark'>(getTheme());
	useEffect(() => {
		const observer = new MutationObserver(() => {
			setTheme(getTheme());
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCoordinates((prevCoords) => {
				const last = prevCoords[prevCoords.length - 1];
				const newCoord: [number, number] = [
					last[0] + (Math.random() - 0.5) * 0.001,
					last[1] + 0.001,
					// last[0] + (Math.random() - 0.5) * 0.001,
					// last[1] + (Math.random() - 0.5) * 0.001,
				];
				return [...prevCoords, newCoord];
			});
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!mapContainerRef.current) return;

		const theme = getTheme();
		const mapStyle =
			theme === 'dark'
				? 'mapbox://styles/mapbox/dark-v11'
				: 'mapbox://styles/mapbox/light-v11';

		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: mapStyle,
			center: coordinates[0],
			zoom: 15,
			attributionControl: false,
		});

		mapRef.current = map;

		const el = document.createElement('div');
		el.className =
			'w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center';
		el.innerHTML = '🚐';

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
	}, [theme]);

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
		<div className='w-full h-full bg-white dark:bg-[#0d0d0d] text-black dark:text-white flex flex-col rounded-lg overflow-hidden font-sans '>
			{/* Header */}
			<div className=' flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white shadow-sm dark:bg-[#101010]'>
				<h2 className='text-xl text-[var(--header-light-color)] dark:text-[var(--primary-color)]  font-bold'>
					Bus Movement
				</h2>
				<div className='flex items-center gap-2 '>
					<span className='bg-gray-200 dark:bg-[#1f1f1f] p-2 rounded-full'>
						<FaBus className='text-[var(--header-light-color)] dark:text-[var(--primary-color)]' />
					</span>
					<span>Bus 021 ▾</span>
				</div>
			</div>

			{/* Map */}
			<div
				ref={mapContainerRef}
				className='w-full h-[500px] '
			/>

			{/* Info Panel */}
			<div className='bg-gray-100 dark:bg-[#000000] p-6 flex justify-between items-start md:items-center gap-4 border-t border-gray-200 dark:border-gray-800'>
				{/* Driver Info */}
				<div className='w-full'>
					<div className='driverInfo flex items-center justify-start gap-2'>
						<Image
							src={DriverImg}
							alt='driver png'
							className='md:w-[50px] w-[38px] object-cover rounded-full border-2 border-[#c4c4c4] md:h-[50px] h-[38px]'
						/>
						<div>
							<h3 className='font-semibold md:text-lg text-md w-full'>
								Driver
							</h3>
							<p className='md:text-sm text-[12px]  mt-1  flex items-center gap-2'>
								Chike Moghalu
							</p>
						</div>
					</div>
					<p className='md:text-sm text-[12px]  mt-2 flex items-center gap-2'>
						<FaIdBadge className='text-gray-600 dark:text-gray-400' />
						KJA-231-FL
					</p>
					<p className='md:text-sm text-[12px] mt-2 flex items-center gap-2'>
						👥 32 seater Coaster Bus
					</p>
					<div>
						<button className='mt-4 bg-cyan-600 hover:bg-cyan-500 text-white dark:text-black dark:bg-cyan-400 font-semibold cursor-pointer px-4 py-2 rounded-md md:text-md text-sm transition-all duration-150 ease-in-out'>
							Contact Driver
						</button>
					</div>
				</div>

				{/* Status + Stops */}
				<div className='flex flex-col justify-end w-full items-end gap-2'>
					<span className='text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 px-3 py-1 rounded-full md:text-sm text-[12px] font-medium'>
						En-route
					</span>
					<div className='flex flex-col items-end'>
						<h4 className='text-cyan-600 dark:text-cyan-400 text-right text-sm font-semibold mb-1'>
							Bus Stops
						</h4>
						<p className='md:text-sm text-[12px] text-gray-700 dark:text-gray-300 w-[80%] text-right'>
							Idejo | Oworo | Charley Boy | Charity | Sango
						</p>
					</div>
				</div>

				{/* Contact Button */}
			</div>
		</div>
	);
};

export default BusTracker;
