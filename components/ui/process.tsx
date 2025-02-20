import { Brand } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactDialog } from "@/components/ui/contact-form";
import { cn } from "@/lib/utils";
import { ClipboardCheck, Key, MessageSquare } from "lucide-react";

const processSteps = [
	{
		icon: MessageSquare,
		title: "Initial Consultation",
		description:
			"Meet with our local experts to discuss your property goals and receive a customized management strategy.",
		step: "Step 1",
	},
	{
		icon: ClipboardCheck,
		title: "Property Assessment",
		description:
			"We'll conduct a thorough evaluation of your property and provide detailed recommendations for optimization.",
		step: "Step 2",
	},
	{
		icon: Key,
		title: "Onboarding",
		description:
			"Quick and seamless transition to our management services with dedicated support throughout the process.",
		step: "Step 3",
	},
] as const;

export function Process() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
			<div className="bg-brand rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-foreground">
						Simple, Transparent Process
					</h2>
					<p className="text-lg text-brand-foreground/90 max-w-2xl mx-auto">
						Partner with {Brand.name} in three easy steps. We handle the details
						while you focus on what matters most.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
					{processSteps.map((step) => (
						<div key={step.title} className="relative">
							<Card
								className={cn(
									"relative h-full transition-all duration-300",
									"bg-white/10 backdrop-blur-sm border-white/10",
									"hover:bg-white/15 hover:shadow-lg hover:scale-[1.02]",
								)}
							>
								<CardContent className="flex flex-col items-center pt-8 px-6 pb-6 h-full">
									{/* Step number */}
									<span className="text-sm font-medium text-brand-foreground/70 mb-4">
										{step.step}
									</span>

									{/* Icon */}
									<div className="mb-4">
										<div className="p-3 bg-white/10 rounded-full">
											<step.icon className="h-6 w-6 text-brand-foreground" />
										</div>
									</div>

									{/* Content */}
									<div className="text-center space-y-2 flex-1 flex flex-col">
										<h3 className="text-xl font-semibold text-brand-foreground">
											{step.title}
										</h3>
										<p className="text-brand-foreground/80 flex-1">
											{step.description}
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="max-w-2xl mx-auto space-y-4">
						<h3 className="text-2xl font-semibold text-brand-foreground">
							Ready to Get Started?
						</h3>
						<p className="text-brand-foreground/90">
							Join the growing number of property owners in{" "}
							{Brand.location.cityState} who trust {Brand.name}.
						</p>
						<ContactDialog>
							<Button
								size="lg"
								className={cn(
									"mt-4 bg-white text-brand hover:bg-white/90",
									"transition-all duration-300",
								)}
							>
								Contact Our Team ↗
							</Button>
						</ContactDialog>
					</div>
				</div>
			</div>
		</div>
	);
}
