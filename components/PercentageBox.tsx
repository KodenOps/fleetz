'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import 'react-circular-progressbar/dist/styles.css';

const PercentageBox = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const percentageSatisfaction = 80;
	const applicationUptime = 90;

	// Shared styles
	const getProgressStyles = () =>
		buildStyles({
			pathColor: theme === 'dark' ? '#A0F9AF' : 'green',
			trailColor: '#333333',
			textColor: theme === 'dark' ? '#A0F9AF' : 'green',
		});

	if (!mounted) return null;

	return (
		<div className='flex flex-wrap justify-between items-center md:gap-4 gap-2 w-full my-2'>
			{/* Ride Satisfaction Box */}
			<div className='p-4 h-[200px] dark:bg-[#1F1F1F] bg-white shadow-md flex-1 rounded-sm'>
				<p className='flex items-center gap-2 rounded-full w-[90px] justify-center py-[5px] border-green-400 border-2 text-sm'>
					1.2%
					<span className='text-lg text-[#51CEDF]'>
						<IoMdArrowDropup />
					</span>
				</p>
				<div className='chart flex justify-between w-full items-center mt-4'>
					<h4 className='text-xl w-1/2 text-[var(--header-light-color)] dark:text-[var(--primary-color)] font-semibold'>
						Percentage Ride Satisfaction
					</h4>
					<div className='w-[120px] h-[120px] mx-auto'>
						<CircularProgressbar
							value={percentageSatisfaction}
							text={`${percentageSatisfaction}%`}
							strokeWidth={10}
							styles={getProgressStyles()}
						/>
					</div>
				</div>
			</div>

			{/* Application Uptime Box */}
			<div className='p-4 h-[200px] dark:bg-[#1F1F1F] bg-white shadow-md flex-1 rounded-sm'>
				<p className='flex items-center gap-2 rounded-full w-[90px] justify-center py-[5px] border-[#FF4141] border-2 text-sm'>
					1.2%
					<span className='text-lg text-[#FF4141]'>
						<IoMdArrowDropdown />
					</span>
				</p>
				<div className='chart flex justify-between w-full items-center mt-4'>
					<h4 className='text-xl w-1/2 text-[var(--header-light-color)] dark:text-[var(--primary-color)] font-semibold'>
						Application Uptime
					</h4>
					<div className='w-[120px] h-[120px] mx-auto'>
						<CircularProgressbar
							value={applicationUptime}
							text={`${applicationUptime}%`}
							strokeWidth={10}
							styles={getProgressStyles()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PercentageBox;
