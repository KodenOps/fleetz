export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'FleetZ.Admin',
	description:
		"FleetZ is a modern fleet management dashboard designed to streamline operations, enhance efficiency, and provide real-time insights into your fleet's performance. Whether you're managing a small fleet or a large transportation network, FleetZ offers the tools you need to optimize routes, monitor vehicle health, and ensure timely deliveries.",
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Docs',
			href: '/docs',
		},
		{
			label: 'Pricing',
			href: '/pricing',
		},
		{
			label: 'Blog',
			href: '/blog',
		},
		{
			label: 'About',
			href: '/about',
		},
	],
	navMenuItems: [
		{
			label: 'Profile',
			href: '/profile',
		},
		{
			label: 'Dashboard',
			href: '/dashboard',
		},
		{
			label: 'Projects',
			href: '/projects',
		},
		{
			label: 'Team',
			href: '/team',
		},
		{
			label: 'Calendar',
			href: '/calendar',
		},
		{
			label: 'Settings',
			href: '/settings',
		},
		{
			label: 'Help & Feedback',
			href: '/help-feedback',
		},
		{
			label: 'Logout',
			href: '/logout',
		},
	],
	links: {
		github: 'https://github.com/heroui-inc/heroui',
		twitter: 'https://twitter.com/hero_ui',
		docs: 'https://heroui.com',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
