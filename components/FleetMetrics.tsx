import React from 'react';

interface cardprops {
	id: string;
	title: string;
	value: string;
	bottomText?: string;
}
const FleetMetrics = () => {
	const topMetrics: cardprops[] = [
		{
			id: '1',
			title: 'Total Fleets',
			value: '1,234',
			bottomText: 'Buses',
		},
		{
			id: '2',
			title: 'Total Month Trips',
			value: '10.3K',
			bottomText: 'Rides',
		},
		{
			id: '3',
			title: 'This Month Revenue',
			value: '12.2M',
			bottomText: 'Naira',
		},
		{
			id: '4',
			title: 'This Month Expenses',
			value: '2.8M',
			bottomText: 'Naira',
		},
	];

	return (
		<section className='cards grid  grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-2'>
			{topMetrics.map((card) => (
				<div
					key={card.id}
					className='card bg-[#262626] hover:-translate-y-1.5 h-[130px] sm:h-[150px] md:h-[180px] p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all duration-1500 ease-in-out'>
					<h4 className='text-xs sm:text-sm md:text-base font-medium text-[#51CEDF]'>
						{card.title}
					</h4>
					<p className='text-3xl sm:text-5xl md:text-6xl font-bold text-white'>
						{card.value}
					</p>
					{card.bottomText && (
						<p className='text-xs sm:text-sm md:text-base text-gray-400'>
							{card.bottomText}
						</p>
					)}
				</div>
			))}
		</section>
	);
};

export default FleetMetrics;
