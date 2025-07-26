import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@heroui/link';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			suppressHydrationWarning
			lang='en'>
			<head />
			<body
				className={clsx(
					' text-foreground bg-[#1A1A1A] font-sans max-w-screen antialiased overflow-x-hidden',
					fontSans.variable
				)}>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
					<div className='relative flex flex-col '>
						<main className='container flex-grow'>
							{/* <Navbar /> */}
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
