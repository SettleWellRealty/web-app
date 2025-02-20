"use client";

import { sendEmail } from "@/actions/email";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters")
		.regex(
			/^[a-zA-Z\s'-]+$/,
			"Name can only contain letters, spaces, hyphens and apostrophes",
		)
		.trim(),
	email: z
		.string()
		.email("Please enter a valid email address")
		.min(5, "Email must be at least 5 characters")
		.max(100, "Email must be less than 100 characters")
		.trim()
		.toLowerCase(),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be less than 1000 characters")
		.trim(),
});

type ContactFormData = z.infer<typeof formSchema>;

interface ContactDialogProps {
	children?: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
	const [open, setOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const form = useForm<ContactFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: ContactFormData) {
		try {
			setIsSubmitting(true);

			const result = await sendEmail(values);

			if (!result.success) {
				throw new Error(result.error);
			}

			toast({
				title: "Message sent successfully!",
				description: "We'll get back to you as soon as possible.",
				variant: "brand",
			});

			setOpen(false);
			form.reset();
		} catch (error) {
			console.error("Failed to submit form:", error);
			toast({
				title: "Something went wrong.",
				description: "Please try again later.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{children || <Button>Contact Us</Button>}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Get in Touch</DialogTitle>
					<DialogDescription>
						Send us a message and we'll get back to you as soon as possible.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Your name"
											autoComplete="name"
											disabled={isSubmitting}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="your@email.com"
											type="email"
											autoComplete="email"
											disabled={isSubmitting}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="What would you like to tell us?"
											className="min-h-[100px]"
											autoComplete="off"
											disabled={isSubmitting}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
