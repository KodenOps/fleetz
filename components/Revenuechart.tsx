import React, { useState, PureComponent } from 'react';

import 'react-circular-progressbar/dist/styles.css';
import {
	Line,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const Revenuechart = () => {
	// chart details using rechart
	const data = [
		{
			name: '0',
			this_week: 0,
			last_week: 0,
			amt: 0,
		},
		{
			name: 'w-1',
			this_week: 4000,
			last_week: 2400,
			amt: 2400,
		},
		{
			name: 'w-2',
			this_week: 3000,
			last_week: 1398,
			amt: 2210,
		},
		{
			name: 'w-3',
			this_week: 2000,
			last_week: 9800,
			amt: 2290,
		},
		{
			name: 'w-4',
			this_week: 2780,
			last_week: 3908,
			amt: 2000,
		},
		{
			name: 'w-5',
			this_week: 1890,
			last_week: 4800,
			amt: 2181,
		},
		{
			name: 'w-6',
			this_week: 2390,
			last_week: 3800,
			amt: 2500,
		},
		{
			name: 'w-7',
			this_week: 3490,
			last_week: 120,
			amt: 2100,
		},
		{
			name: 'w-8',
			this_week: 2100,
			last_week: 1800,
			amt: 2100,
		},
	];
	return (
		<div className='revenuechart md:flex-1 dark:bg-[#1F1F1F] bg-[#fff] shadow-sm md:my-0 my-2 rounded-sm'>
			<div className='title flex w-full justify-between items-center p-6'>
				<h3 className='text-xl text-[var(--header-light-color)] dark:text-[var(--primary-color)]  font-bold'>
					Weekly Revenue Flow
				</h3>
				<select
					name='date'
					className='dark:bg-[#262626] bg-white outline-0 dark:text-white text-black py-2 px-4 rounded-md font-medium shadow-sm'
					id='date'>
					<option value='2025'>2025</option>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
				</select>
			</div>
			<div className='pb-6 px-2  rounded-sm w-full h-[280px]'>
				<ResponsiveContainer
					width='100%'
					height='100%'>
					<AreaChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='last_week'
							stroke='#8884d8'
							fill='#8884d8'
						/>
						<Line
							type='monotone'
							dataKey='this_week'
							stroke='#8884d8'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			{/* guage section */}

			{/*  */}
		</div>
	);
};

export default Revenuechart;
