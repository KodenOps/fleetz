import { useTheme } from 'next-themes';
import React from 'react';
// import { Form, Input, Button } from '@heroui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
const PercentageBox = () => {
	const { theme, setTheme } = useTheme();

	// some placeholder variables for the circular progress bar
	const percentage_satisfaction = 80; // Example percentage value
	const application_uptime = 90; // Example percentage value
	return (
		<div className='flex  flex-wrap justify-between items-center md:gap-4  gap-2 w-full my-2'>
			<div className='perc-ride  p-4 h-[200px] dark:bg-[#1F1F1F] bg-[#fff] shadow-md flex-1 rounded-sm md:my-0 my-2'>
				<p className='flex items-center  gap-2 rounded-full w-[90px] justify-center  py-[5px] border-green-400 border-2 text-sm'>
					1.2%{' '}
					<span className='text-lg text-[#51CEDF]'>
						<IoMdArrowDropup />
					</span>
				</p>
				<div className='chart flex justify-between w-full  items-center mt-4 '>
					<h4 className='text-xl w-1/2 text-[var(--header-light-color)] dark:text-[var(--primary-color)] font-semibold'>
						Percentage Ride Satisfaction
					</h4>
					<div className='w-[120px] h-[120px] mx-auto'>
						<CircularProgressbar
							value={percentage_satisfaction}
							text={`${percentage_satisfaction}%`}
							strokeWidth={10}
							styles={buildStyles({
								pathColor: `${theme === 'dark' ? '#A0F9AF' : 'green'}`,
								trailColor: '#333333',
								textColor: `${theme === 'dark' ? '#A0F9AF' : 'green'}`,
							})}
						/>
					</div>
				</div>
			</div>
			<div className='perc-ride  p-4 h-[200px] dark:bg-[#1F1F1F] bg-[#fff] shadow-sm flex-1 rounded-sm md:my-0 my-2'>
				<p className='flex items-center  gap-2 rounded-full w-[90px] justify-center  py-[5px] border-[#FF4141] border-2 text-sm'>
					1.2%{' '}
					<span className='text-lg text-[#FF4141]'>
						<IoMdArrowDropdown />
					</span>
				</p>
				<div className='chart flex justify-between items-center mt-4 '>
					<h4 className='text-xl w-1/2 text-[var(--header-light-color)] dark:text-[var(--primary-color)] font-semibold'>
						Percentage Ride Satisfaction
					</h4>
					<div className='w-[120px] h-[120px] mx-auto'>
						<CircularProgressbar
							value={application_uptime}
							text={`${application_uptime}%`}
							strokeWidth={10}
							styles={buildStyles({
								pathColor: `${theme === 'dark' ? '#A0F9AF' : 'green'}`,
								trailColor: '#333333',
								textColor: `${theme === 'dark' ? '#A0F9AF' : 'green'}`,
							})}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PercentageBox;
