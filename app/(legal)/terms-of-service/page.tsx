import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Brand } from "@/components/ui/brand";

export default function TermsOfService() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="max-w-3xl mx-auto space-y-12">
						<div className="space-y-4 border-b pb-8">
							<h1 className="text-4xl font-bold tracking-tight">
								Terms of Service
							</h1>
							<p className="text-muted-foreground">
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>

						<section className="prose prose-slate dark:prose-invert max-w-none">
							<div className="rounded-lg bg-muted/50 p-6 mb-12">
								<p className="text-lg leading-relaxed m-0">
									Welcome to {Brand.name} ({Brand.legalName}). These terms
									govern your use of our services. By accessing our website or
									using our services, you agree to these terms.
								</p>
							</div>

							<div className="flex items-center gap-3 p-4 border rounded-lg bg-background mb-12">
								<div className="p-2 rounded-full bg-brand/10">
									<Brand.icon className="h-6 w-6 text-brand" />
								</div>
								<div>
									<p className="font-medium text-sm">
										Colorado Real Estate License
									</p>
									<p className="text-muted-foreground text-sm">
										{Brand.licenseNumber}
									</p>	
								</div>
							</div>

							<div className="space-y-12">
								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										1. Real Estate Services
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										Our brokerage provides property management and real estate
										services in compliance with Colorado state laws and
										regulations. All our agents are licensed professionals
										operating under {Brand.legalName}.
									</p>
								</section>

								<section className="space-y-6">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										2. Property Management Services
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="rounded-lg border bg-card p-6 hover:bg-muted/50 transition-colors">
											<h3 className="text-lg font-semibold mb-3">
												Property Marketing
											</h3>
											<p className="text-muted-foreground">
												Professional listing services and tenant screening
											</p>
										</div>
										<div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
											<h3 className="font-semibold mb-2">
												Financial Management
											</h3>
											<p className="text-sm text-muted-foreground">
												Rent collection and detailed reporting
											</p>
										</div>
										<div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
											<h3 className="font-semibold mb-2">Maintenance</h3>
											<p className="text-sm text-muted-foreground">
												24/7 emergency response and coordination
											</p>
										</div>
										<div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
											<h3 className="font-semibold mb-2">Legal Compliance</h3>
											<p className="text-sm text-muted-foreground">
												Documentation and regulatory adherence
											</p>
										</div>
									</div>
								</section>

								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										3. Fair Housing Compliance
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										We strictly adhere to Fair Housing laws and do not
										discriminate based on race, color, religion, sex, handicap,
										familial status, or national origin.
									</p>
								</section>

								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										4. Fees and Payments
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										Our fee structure is transparent and based on the services
										provided. All fees will be clearly outlined in your
										management agreement or service contract.
									</p>
								</section>

								<section className="space-y-4">
									<h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
										5. Limitation of Liability
									</h2>
									<p className="text-base leading-relaxed text-muted-foreground">
										While we strive for excellence, {Brand.name} is not liable
										for circumstances beyond our reasonable control.
									</p>
								</section>
							</div>

							<div className="mt-16 rounded-lg bg-gradient-to-br from-brand to-brand/90 text-brand-foreground p-8">
								<h2 className="text-xl font-semibold mb-4 text-brand-foreground">
									Contact Information
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<p className="font-medium">{Brand.name}</p>
										<p className="mt-2 text-brand-foreground/90">
											{Brand.location.street}
											<br />
											{Brand.location.suite}
											<br />
											{Brand.location.city}, {Brand.location.state}{" "}
											{Brand.location.zip}
										</p>
									</div>
									<div>
										<div className="space-y-2">
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
											<p>
												<span className="text-brand-foreground/75">
													License:{" "}
												</span>
												{Brand.licenseNumber}
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
