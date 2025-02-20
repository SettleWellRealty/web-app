import { metadata } from "@/components/ui/brand";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Manrope } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/ui/mode-toggle";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${manrope.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<div className="fixed bottom-4 left-4 z-50">
						<ModeToggle />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
