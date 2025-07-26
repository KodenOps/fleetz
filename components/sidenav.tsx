'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiBarChartSquare } from 'react-icons/bi';
import { PiCarSimpleThin, PiTicketThin, PiUserListBold } from 'react-icons/pi';
import { RiMic2AiLine } from 'react-icons/ri';
import { FaGear, FaWpforms } from 'react-icons/fa6';
import { TbLogout2 } from 'react-icons/tb';
import { useTheme } from 'next-themes';

interface SidenavLink {
	icon: React.ElementType;
	title: string;
	id: string;
}

const sidenavLinks: SidenavLink[] = [
	{ icon: BiBarChartSquare, title: 'Dashboard', id: 'dashboard' },
	{
		icon: PiCarSimpleThin,
		title: 'Vehicles Management',
		id: 'Vehicles Management',
	},
	{ icon: PiTicketThin, title: 'Bookings', id: 'Bookings' },
	{ icon: PiUserListBold, title: 'Complaints', id: 'Complaints' },
	{ icon: RiMic2AiLine, title: 'Broadcast', id: 'Broadcast' },
	{
		icon: FaWpforms,
		title: 'Onboarding & Offboarding',
		id: 'Onboarding & Offboarding',
	},
	{
		icon: FaGear,
		title: 'Settings & Configurations',
		id: 'Settings & Configurations',
	},
	{ icon: TbLogout2, title: 'Logout', id: 'Logout' },
];

const Sidenav = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className='left w-[360px] hidden md:block fixed left-0 dark:bg-[#1F1F1F] bg-white h-screen py-8 px-4'>
			<div className='logo'>
				{mounted ? (
					<Image
						src={
							theme === 'light' ? '/assets/logo-dark.svg' : '/assets/logo.svg'
						}
						alt='Logo'
						width={160}
						height={50}
						className='p-2'
						priority
					/>
				) : null}
			</div>

			<div className='overflow-y-auto max-h-[90vh] scrollbar-hide mt-6'>
				<div className='links py-4 px-2 dark:bg-[#262626] bg-[#fff] shadow-lg dark:border-0 border border-[#e8e8e8] rounded-sm w-full'>
					<ul>
						{sidenavLinks.map((link) => (
							<li
								key={link.id}
								className='flex items-center gap-4 dark:text-white text-[var(--secondary-color)] text-lg font-medium cursor-pointer hover:bg-[#51CEDF] hover:text-[#333333] p-4 rounded-lg transition-all duration-150 ease-in-out'>
								<link.icon className='text-2xl' />
								<span>{link.title}</span>
							</li>
						))}
					</ul>
				</div>

				<div className='logo w-full mt-2'>
					<Image
						src='/assets/cta.png'
						alt='Call to Action'
						width={360}
						height={160}
						className='w-full'
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
