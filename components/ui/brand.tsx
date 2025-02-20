import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { FC } from "react";

// Define strict types for our data structures
type CompanyInfo = {
	readonly name: string;
	readonly legalName: string;
	readonly tagline: string;
	readonly description: string;
	readonly founding: number;
	readonly domain: string;
	readonly email: string;
	readonly phone: string;
	readonly licenseNumber: string;
};

type LocationInfo = {
	readonly street: string;
	readonly suite: string;
	readonly city: string;
	readonly state: string;
	readonly zip: string;
	readonly country: string;
	readonly full: string;
	readonly cityState: string;
};

type SocialInfo = {
	readonly facebook: string;
	readonly instagram: string;
	readonly linkedin: string;
	readonly twitter: string;
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	titleId?: string;
}

export const BrandIcon: FC<IconProps> = ({
	className,
	titleId = "settlewell-icon",
	...props
}) => {
	return (
		<svg
			width="220"
			height="220"
			viewBox="0 0 220 220"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("text-primary-foreground", className)}
			aria-labelledby={titleId}
			{...props}
		>
			<title id={titleId}>SettleWell Realty Icon</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M145.151 5.84502C161.996 11.4944 177.336 21.3591 189.586 34.2169C200.102 45.2549 208.31 58.4602 213.465 72.8172C219.299 88.8854 221.141 106.241 219.164 123.205C217.322 138.687 212.124 153.75 204.008 167.064C200.705 172.871 196.599 178.086 192.161 183.062C182.29 183.062 172.42 183.067 162.556 183.056C162.561 176 162.545 168.938 162.561 161.876C162.29 149.024 162.469 136.161 162.425 123.309C162.061 107.539 162.507 91.7535 162.132 75.9844C145.477 66.0652 128.811 56.1681 112.162 46.2327C96.1208 55.8475 80.1342 65.5491 64.1043 75.1802C64.0933 79.2705 64.1096 83.3666 64.0933 87.457C64.3814 100.853 64.1638 114.259 64.24 127.654C64.4954 135.433 64.3215 143.228 64.3704 151.013C56.309 151.023 48.2533 150.991 40.1921 151.023C34.6676 151.246 29.1432 151.116 23.6079 151.148C33.3531 171.367 50.1547 187.956 70.6334 197.185C86.0228 204.204 103.248 206.919 120.06 205.143C133.087 203.753 145.906 199.679 157.248 193.095C158.215 192.503 159.117 192.394 160.236 192.41C167.732 192.465 175.229 192.394 182.725 192.454C176.684 197.826 170.025 202.509 162.947 206.409C147.878 214.774 130.913 219.327 113.705 220H106.176C87.6741 219.283 69.4548 214.025 53.5822 204.448C36.8839 194.469 22.9452 180.014 13.5748 162.968C9.20199 154.815 5.28542 145.961 3.33531 136.889C8.92495 136.856 14.5091 136.981 20.0988 136.764C30.0558 136.737 40.0128 136.759 49.9697 136.753C49.9266 127.383 50.1001 118.007 49.8341 108.642C49.8068 94.7956 49.9371 80.9548 49.6927 67.1082C70.4489 54.5002 91.2971 42.0392 112.075 29.4746C133.581 42.2348 155.054 55.049 176.543 67.8305C176.598 79.6238 176.413 91.4223 176.684 103.21C176.733 115.883 176.543 128.567 176.82 141.235C176.81 150.377 176.815 159.519 176.82 168.661C179.672 168.672 182.518 168.656 185.37 168.683C196.713 154.386 203.666 136.585 205.23 118.414C206.512 104.242 204.513 89.7654 199.499 76.4513C193.518 60.6007 183.273 46.4119 170.09 35.7704C156.575 24.765 140.023 17.5675 122.744 15.2751C106.361 13.0208 89.4231 15.1828 74.1045 21.4134C57.0154 28.3339 42.088 40.3171 31.5442 55.4348C22.4454 68.3956 16.6928 83.66 14.9328 99.3965C14.2104 105.79 14.2267 112.276 14.7156 118.691C9.91902 118.691 5.11704 118.702 0.320494 118.686C0.239012 116.839 0.108642 115.003 0 113.162V106.725C0.657283 87.7719 6.06764 69.1127 15.9975 52.9357C26.5847 35.5477 42.1096 21.1146 60.2963 11.9452C86.2673 -1.39599 117.529 -3.55796 145.151 5.84502Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M88.4127 88.6792C95.1541 88.6735 101.895 88.6792 108.636 88.6792C108.647 95.377 108.642 102.075 108.636 108.778C101.895 108.778 95.1541 108.783 88.4127 108.773C88.4021 102.075 88.4021 95.377 88.4127 88.6792Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M111.553 88.7387C118.219 88.5814 124.916 88.7281 131.587 88.6792C131.598 95.377 131.598 102.075 131.587 108.773C124.89 108.783 118.192 108.783 111.494 108.773C111.543 102.102 111.396 95.4039 111.553 88.7387Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M108.636 111.081C108.647 117.784 108.647 124.487 108.636 131.191C101.89 131.18 95.1488 131.202 88.4074 131.174C88.4074 124.482 88.4074 117.79 88.4074 111.097C95.1488 111.07 101.89 111.092 108.636 111.081Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M111.494 111.092C118.192 111.081 124.89 111.081 131.593 111.092C131.593 117.79 131.593 124.482 131.593 131.18C124.89 131.191 118.192 131.191 111.494 131.18C111.494 124.482 111.494 117.79 111.494 111.092Z"
				className="fill-current"
			/>
		</svg>
	);
};

// Helper function to create social media URLs
const createSocialUrls = (companyName: string): SocialInfo => {
	const normalizedName = companyName.toLowerCase().replace(/\s/g, "");
	return {
		facebook: `https://facebook.com/${normalizedName}`,
		instagram: `https://instagram.com/${normalizedName}`,
		linkedin: `https://linkedin.com/company/${normalizedName}`,
		twitter: `https://twitter.com/${normalizedName}`,
	};
};

// Define company information
const company: CompanyInfo = {
	name: "SettleWell Realty",
	legalName: "SettleWell Realty LLC",
	tagline: "Full-Service Realty & Property Management",
	description:
		"Denver-based property management and real estate brokerage focused on delivering exceptional service and reliable property management solutions.",
	founding: 2024,
	domain: "settlewellrealty.com",
	email: "contact@settlewellrealty.com",
	phone: "(720) 555-0123", // TODO: Replace with actual phone number
	licenseNumber: "EC.XXXXX", // TODO: Replace with actual Colorado Real Estate License number
} as const;

// Define location information
const location: LocationInfo = {
	street: "123 Market Street", // TODO: Replace with actual street address
	suite: "Suite 200", // TODO: Replace with actual suite number
	city: "Denver",
	state: "CO",
	zip: "80202", // TODO: Replace with actual zip code
	country: "United States",
	get full() {
		return `${this.street}, ${this.suite}, ${this.city}, ${this.state} ${this.zip}`;
	},
	get cityState() {
		return `${this.city}, ${this.state}`;
	},
} as const;

const social = createSocialUrls(company.name);

const brand = {
	colors: {
		primary: "hsl(var(--primary))",
		secondary: "hsl(var(--secondary))",
		accent: "hsl(var(--accent))",
	},
	logo: {
		favicon: "/favicon.ico",
	},
} as const;

export const metadata: Metadata = {
	title: {
		default: company.name,
		template: `%s | ${company.name}`,
	},
	description: company.description,
	keywords: [
		"Denver Property Management",
		"Real Estate",
		"Property Management",
		"Denver Real Estate",
		"Rental Property Management",
		"Property Manager Denver",
	],
	authors: [
		{
			name: company.name,
			url: `https://${company.domain}`,
		},
	],
	creator: company.name,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: `https://${company.domain}`,
		title: company.name,
		description: company.description,
		siteName: company.name,
		images: [
			{
				url: "/settlewell-realty-og.png",
				width: 1200,
				height: 630,
				alt: `${company.name} - ${company.tagline}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: company.name,
		description: company.description,
		creator: `@${company.name.toLowerCase().replace(/\s/g, "")}`,
		images: ["/settlewell-realty-og.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const Brand = {
	...company,
	location,
	social,
	brand,
	icon: BrandIcon,
} as const;

export const { name, legalName, tagline, description, email, phone } = company;
