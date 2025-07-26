import React from 'react';
import { Input } from '@heroui/input';
import { FiSearch, FiSun } from 'react-icons/fi';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
	return (
		<div className='flex justify-between  items-center p-4 bg-[#272727] shadow-md  h-full px-8'>
			<div className='search w-1/2'>
				<Input
					label=''
					labelPlacement='outside'
					size='lg'
					placeholder='Search - CTRL + K'
					radius='sm'
					variant='bordered'
					startContent={
						<FiSearch className='text-2xl text-default-400 pointer-events-none shrink-0' />
					}
					type='text'
				/>
			</div>

			<div className='userprofile flex items-center justify-between gap-8'>
				<div className='icon flex items-center gap-8 justify-center'>
					<IoMdNotificationsOutline size={24} />
					<FiSun size={24} />
				</div>
				<div className='flex items-center gap-4 cursor-pointer hover:bg-[#51CEDF] hover:text-[#333333] p-2 rounded-lg transition-all duration-150 ease-in-out'>
					<img
						src='@/../assets/image.png'
						alt='User Profile'
						className='w-10 h-10 rounded-full border-2 border-white object-cover hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer'
					/>
					<div className='deets'>
						<h5 className='font-medium text-lg'>Amah, Danny</h5>
						<p className='text-sm '>Fleet Admin</p>
					</div>
					<IoIosArrowDown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
