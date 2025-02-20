import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Brand } from "@/components/ui/brand";
import { Bell, Lock, Shield, Users } from "lucide-react";

export default function PrivacyPolicy() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="max-w-3xl mx-auto space-y-12">
						{/* Header Section */}
						<div className="space-y-4 border-b pb-8">
							<h1 className="text-4xl font-bold tracking-tight">
								Privacy Policy
							</h1>
							<p className="text-muted-foreground">
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>

						<section className="prose prose-slate dark:prose-invert max-w-none">
							{/* Introduction */}
							<div className="rounded-lg bg-muted/50 p-6 mb-12">
								<p className="text-lg leading-relaxed m-0">
									At {Brand.name}, we take your privacy seriously. This policy
									outlines how we collect, use, and protect your personal
									information.
								</p>
							</div>

							<div className="space-y-12">
								{/* Information Collection Section */}
								<section className="space-y-6">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										1. Information Collection
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors">
											<h3 className="text-lg font-semibold mb-3">
												Personal Details
											</h3>
											<ul className="space-y-2 text-muted-foreground list-none p-0 m-0">
												<li>Contact information</li>
												<li>Property preferences</li>
												<li>Financial records</li>
											</ul>
										</div>
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors">
											<h3 className="text-lg font-semibold mb-3">Usage Data</h3>
											<ul className="space-y-2 text-muted-foreground list-none p-0 m-0">
												<li>Website analytics</li>
												<li>Communication history</li>
												<li>Service interactions</li>
											</ul>
										</div>
									</div>
								</section>

								{/* Data Protection Section */}
								<section className="space-y-6">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										2. Data Protection Measures
									</h2>
									<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors flex flex-col items-center text-center">
											<Shield className="h-8 w-8 text-brand mb-3" />
											<p className="font-medium">Secure Storage</p>
										</div>
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors flex flex-col items-center text-center">
											<Lock className="h-8 w-8 text-brand mb-3" />
											<p className="font-medium">Encryption</p>
										</div>
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors flex flex-col items-center text-center">
											<Users className="h-8 w-8 text-brand mb-3" />
											<p className="font-medium">Access Control</p>
										</div>
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors flex flex-col items-center text-center">
											<Bell className="h-8 w-8 text-brand mb-3" />
											<p className="font-medium">Monitoring</p>
										</div>
									</div>
								</section>

								{/* Information Usage Section */}
								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										3. Information Usage
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										We use your information to provide and improve our real
										estate and property management services, process
										transactions, and communicate with you about your property
										needs.
									</p>
								</section>

								{/* Information Sharing Section */}
								<section className="space-y-6">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										4. Information Sharing
									</h2>
									<div className="rounded-lg border bg-card p-6">
										<p className="font-medium mb-4">
											We share information only with:
										</p>
										<ul className="space-y-2 text-muted-foreground">
											<li>Property owners and tenants (as necessary)</li>
											<li>Authorized service providers</li>
											<li>Legal and regulatory authorities</li>
										</ul>
									</div>
								</section>

								{/* Privacy Rights Section */}
								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										5. Your Privacy Rights
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										You have the right to access, correct, or delete your
										personal information. Contact us to exercise these rights.
									</p>
								</section>

								{/* Cookies Section */}
								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										6. Cookies and Tracking
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										Our website uses cookies and similar technologies to enhance
										user experience and analyze website traffic.
									</p>
								</section>

								{/* Contact Section */}
								<div className="mt-16 rounded-lg bg-gradient-to-br from-brand to-brand/90 text-brand-foreground p-8">
									<h2 className="text-xl font-semibold mb-6 text-brand-foreground">
										Privacy Inquiries
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-2">
											<p className="font-medium">Privacy Officer</p>
											<p className="text-brand-foreground/90">
												{Brand.name}
												<br />
												{Brand.location.street}
												<br />
												{Brand.location.suite}
												<br />
												{Brand.location.city}, {Brand.location.state}{" "}
												{Brand.location.zip}
											</p>
										</div>
										<div className="space-y-3">
											<p>
												<span className="text-brand-foreground/75">
													Phone:{" "}
												</span>
												{Brand.phone}
											</p>
											<p>
												<span className="text-brand-foreground/75">
													Email:{" "}
												</span>
												{Brand.email}
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
