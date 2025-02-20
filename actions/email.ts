"use server";

import { Resend } from "resend";
import { z } from "zod";

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendEmail(values: ContactFormData) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		// Validate the input data
		const validatedData = formSchema.parse(values);

		await resend.emails.send({
			from: "contact@updates.settlewellrealty.com",
			to: "accounts@settlewellrealty.com",
			subject: "Web App Contact Form",
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
		});

		return { success: true as const };
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false as const,
			error: "Failed to send email",
		};
	}
}
