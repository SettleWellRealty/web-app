"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContactDialog } from "@/components/ui/contact-form";

const pricingTiers = [
	{
		title: "Single Property",
		percentage: "9%",
		properties: "1",
	},
	{
		title: "2 Properties",
		percentage: "8.5%",
		properties: "2",
	},
	{
		title: "3-4 Properties",
		percentage: "8%",
		properties: "3-4",
	},
	{
		title: "5+ Properties",
		percentage: "7.5%",
		properties: "5+",
	},
] as const;

export function Pricing() {
	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
			<div className="text-center space-y-4 mb-12">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					What Does It Cost?
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Comprehensive property management including professional rent
					collection, instant 24/7 maintenance response, stress-free tenant
					handling, modern payment solutions, and complete tax documentation.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{pricingTiers.map((tier) => (
					<Card
						key={tier.title}
						className="relative overflow-hidden hover:shadow-md"
					>
						<CardHeader className="text-center pb-4">
							<h3 className="text-lg font-semibold">{tier.title}</h3>
						</CardHeader>
						<CardContent className="text-center space-y-6">
							<div className="space-y-2">
								<p className="text-6xl font-bold tracking-tight">
									{tier.percentage}
								</p>
								<p className="text-sm text-muted-foreground">Monthly Rent</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="mt-12 text-center space-y-4">
				<ContactDialog>
					<Button size="lg" className="bg-brand text-white hover:bg-brand/90">
						Get Started
					</Button>
				</ContactDialog>
			</div>
		</section>
	);
}
