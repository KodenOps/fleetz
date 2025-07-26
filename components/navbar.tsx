import React, { useEffect, useState } from 'react';
import { Input } from '@heroui/input';
import { FiSearch, FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { useTheme } from 'next-themes';
import logo from '@/public/assets/logo.svg';
import logodark from '@/public/assets/logo-dark.svg';
import Image from 'next/image';
const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, [theme]);
	return (
		<div className='flex justify-between items-center py-4 bg-[#fbfbfb] dark:bg-[#1F1F1F] text-white dark:text-white shadow-md h-full px-4 w-full '>
			<div className='mobileMenu px-2 md:hidden flex items-center justify-between w-full'>
				{mounted && (
					<Image
						src={theme === 'light' ? logodark : logo}
						alt='Logo'
						className='w-[40%]'
						priority
					/>
				)}

				<FiMenu
					size={32}
					className='dark:text-[var(--primary-color)] text-[var(--header-light-color)] cursor-pointer'
				/>
			</div>
			<div className='md:block hidden search w-1/2 '>
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

			<div className=' md:flex hidden userprofile  items-center justify-between gap-8'>
				<div className='icon flex items-center gap-8 justify-center'>
					<IoMdNotificationsOutline
						size={24}
						className='text-[var(--header-light-color)] dark:text-[var(--primary-color)]'
					/>
					<div>
						{/* Theme switcher */}
						{mounted &&
							(theme === 'light' ? (
								<FiMoon
									size={24}
									onClick={() => setTheme('dark')}
									className='cursor-pointer text-[var(--header-light-color)] dark:text-[var(--primary-color)]'
								/>
							) : (
								<FiSun
									size={24}
									onClick={() => setTheme('light')}
									className='cursor-pointer text-orange-400'
								/>
							))}
					</div>
				</div>
				<div className='flex items-center gap-4 cursor-pointer hover:bg-[#51CEDF] hover:text-[#333333] p-2 rounded-lg transition-all duration-150 ease-in-out'>
					<img
						src='@/../assets/image.png'
						alt='User Profile'
						className='w-10 h-10 rounded-full border-2 border-white object-cover hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer'
					/>
					<div className='deets'>
						<h5 className='font-medium text-lg dark:text-white text-[var(--header-light-color)] '>
							Amah, Danny
						</h5>
						<p className='text-sm dark:text-gray-300 text-gray-700'>
							Fleet Admin
						</p>
					</div>
					<IoIosArrowDown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
