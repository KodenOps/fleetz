import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@heroui/link';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Navbar from '@/components/navbar';
import { ThemeProvider } from 'next-themes';

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
			<body>
				<ThemeProvider attribute='class'>
					<div className='relative flex flex-col'>
						<main className='container flex-grow '>{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
