import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { FaGem } from 'react-icons/fa6';
interface DriverOfTheMonthProps {
	name: string;
	rank: string;
	points: number;
	imageUrl: string;
}
const DriverOfTheMonth = () => {
	const topDrivers: DriverOfTheMonthProps[] = [
		{
			name: 'Amah, Dan',
			rank: '1st',
			points: 199,
			imageUrl: '@/../assets/driver1.png',
		},
		{
			name: 'Sunny Ojo',
			rank: '2nd',
			points: 182,
			imageUrl: '@/../assets/driver2.png',
		},
		{
			name: 'Mary Jane',
			rank: '3rd',
			points: 165,
			imageUrl: '@/../assets/driver3.png',
		},
	];
	return (
		<div className='w-full'>
			<div className='w-full p-4 mt-2  bg-[#1F1F1F] rounded-lg'>
				<h4 className='text-xl w-1/2 text-[#51CEDF] font-semibold'>
					Driver of the month
				</h4>
				<div className='md:grid grid-cols-3  gap-2 mt-4'>
					{topDrivers.map((driver, index) => (
						<div
							key={index}
							className='TopDriver flex mb-2  items-center h-[120px] gap-4  bg-[#323232] p-4 rounded-lg  relative'>
							<span className='absolute md:top-2 top-6 md:right-2 right-6 text-[#fff] text-[12px]  gap-2 px-2 py-[2px] font-medium flex items-center justify-center rounded-full border-2 border-[#5CFF41]'>
								{driver.points} <FaGem color='#5CFF41' />
							</span>
							<img
								src={driver.imageUrl}
								alt='TopDriver Profile'
								className='w-14 h-14 rounded-full border-2 border-white object-cover hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer'
							/>
							<div className='w-full'>
								<h5 className='text-xl font-bold'>{driver.rank}</h5>
								<p className='text-md w-full text-[#EAEAEA]'>{driver.name}</p>
							</div>
						</div>
					))}

					{/* end of TopDriver 1 */}
				</div>
			</div>
		</div>
	);
};

export default DriverOfTheMonth;
