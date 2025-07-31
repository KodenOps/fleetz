'use client';
import React, { useState, PureComponent } from 'react';
import { Form, Input, Button } from '@heroui/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import '@/styles/globals.css';
import Navbar from '@/components/navbar';
import Sidenav from '@/components/sidenav';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';
import Revenuechart from '@/components/Revenuechart';
import FleetMetrics from '@/components/FleetMetrics';
import PercentageBox from '@/components/PercentageBox';
import DriverOfTheMonth from '@/components/DriverOfTheMonth';
import BusTracker from '@/components/MapBus';

export default function App() {
	return (
		<div className='flex items-top w-screen  overflow-hidden h-auto'>
			<div className='mainpage md:block hidden md:w-[20vw] fixed top-0 h-screen '>
				<Sidenav />
			</div>
			<div className=' md:w-[20vw] md:block hidden'>-</div>
			<div className='sideContent  md:block flex-1 w-full relative  sidenav-scrollbar dark:bg-[#1A1A1A] h-full '>
				{' '}
				<div className='fixed right-0 md:w-[80%] w-full h-[80px] z-50 top-0'>
					<Navbar />
				</div>
				<div className='mainbody mt-[80px] bg-slate-50 dark:bg-[#1a1a1a] md:px-4 px-2 py-4 sidenav-scrollbar h-full '>
					<section className='title flex md:flex-row flex-col w-full md:items-center justify-between mb-4 px-4 md:mt-[10px] mt-[0px]'>
						<div className='left'>
							<h3 className='text-2xl font-bold text-[var(--header-light-color)] dark:text-[var(--primary-color)]'>
								Overview
							</h3>
							<p className='md:text-lg text-[#383838] dark:text-[var(--text-color)] w-full'>
								Stay updated on the general information about our rides
							</p>
						</div>
						<div className='right'>
							<h4 className=' items-center gap-2 text-lg font-medium text-[var(--header-light-color)] dark:text-[var(--primary-color)] cursor-pointer hover:text-[#333333] transition-all duration-150 ease-in-out md:flex hidden'>
								<span>Download Report </span>
								<FaCloudDownloadAlt size={24} />
							</h4>
							<button className='w-full bg-[var(--header-light-color)] dark:text-white text-white font-medium flex items-center justify-center gap-2 px-4 py-4 mt-4 rounded-lg md:hidden'>
								<span>Download Report </span>
								<FaCloudDownloadAlt size={24} />
							</button>
						</div>
					</section>
					<FleetMetrics />
					<section className='flex md:flex-row flex-col gap-2 px-2 justify-between w-full my-4 '>
						<div className='left flex-1 h-full  w-full  '>
							<Revenuechart />
							<PercentageBox />
							<DriverOfTheMonth />
						</div>
						<div className='right flex-1 w-full h-full'>
							<BusTracker />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
