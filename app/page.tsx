import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/ui/hero";
import { Pricing } from "@/components/ui/pricing";
import { Process } from "@/components/ui/process";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main className="flex-1">
				<Hero />
				<Process />
				<Pricing />
			</main>
			<Footer />
		</div>
	);
}
