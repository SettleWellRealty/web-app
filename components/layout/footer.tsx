import { Brand } from "@/components/ui/brand";
import Link from "next/link";

const footerLinks = [
	{ title: "Terms of Service", href: "/terms-of-service" },
	{ title: "Privacy Policy", href: "/privacy-policy" },
] as const;

const socialLinks = [
	{ title: "LinkedIn", href: Brand.social.linkedin },
	{ title: "Facebook", href: Brand.social.facebook },
	{ title: "Instagram", href: Brand.social.instagram },
	{ title: "Twitter", href: Brand.social.twitter },
] as const;

export function Footer() {
	return (
		<footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col md:flex-row justify-between gap-8">
					{/* Brand Section */}
					<div className="space-y-4 md:max-w-xs">
						<Link href="/" className="flex items-center gap-2.5">
							<div className="rounded-md bg-primary p-1.5">
								<Brand.icon className="h-5 w-5 text-primary-foreground" />
							</div>
							<span className="font-medium text-lg">{Brand.name}</span>
						</Link>
						<p className="text-sm text-muted-foreground">{Brand.description}</p>
					</div>

					{/* Links Section */}
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
						{/* Contact Info */}
						<div className="space-y-3">
							<h3 className="text-sm font-semibold">Contact</h3>
							<ul className="space-y-2">
								<li>
									<a
										href={`tel:${Brand.phone}`}
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										{Brand.phone}
									</a>
								</li>
								<li>
									<a
										href={`mailto:${Brand.email}`}
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										{Brand.email}
									</a>
								</li>
							</ul>
						</div>

						{/* Legal Links */}
						<div className="space-y-3">
							<h3 className="text-sm font-semibold">Legal</h3>
							<ul className="space-y-2">
								{footerLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Social Links */}
						<div className="space-y-3">
							<h3 className="text-sm font-semibold">Social</h3>
							<ul className="space-y-2">
								{socialLinks.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-foreground"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 border-t pt-8 opacity-50">
					<p className="text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} {Brand.legalName}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
