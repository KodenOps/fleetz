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

export default function App() {
	return (
		<div className='flex items-top justify-between w-screen overscroll-y-auto  bg-[#1A1A1A] h-auto'>
			<div className='mainpage w-full flex justify-evenly '>
				<Sidenav />
				<div className='sideContent w-full flex-1 md:ml-[360px] sidenav-scrollbar bg-white dark:bg-[#1A1A1A] h-full '>
					{' '}
					<div className='fixed md:w-[calc(100%-360px)] w-full h-[100px] z-50 '>
						<Navbar />
					</div>
					<div className='mainbody  p-4  h-full '>
						<section className='title flex items-center justify-between mb-4 px-4 mt-[100px]'>
							<div className='left'>
								<h3 className='text-2xl font-bold text-[var(--header-light-color)] dark:text-[var(--primary-color)]'>
									Overview
								</h3>
								<p className='text-lg text-[#383838] dark:text-[var(--text-color)]'>
									Stay updated on the general information about our rides
								</p>
							</div>
							<div className='right'>
								<h4 className='flex items-center gap-2 text-lg font-medium text-[var(--header-light-color)] dark:text-[var(--primary-color)] cursor-pointer hover:text-[#333333] transition-all duration-150 ease-in-out'>
									Download Report <FaCloudDownloadAlt size={24} />
								</h4>
							</div>
						</section>
						<FleetMetrics />
						<section className='flex md:flex-row flex-col gap-2 justify-between w-full my-4 '>
							<div className='left flex-1  w-full  '>
								<Revenuechart />
								<PercentageBox />
								<DriverOfTheMonth />
							</div>
							<div className='right flex-1'>hello</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
