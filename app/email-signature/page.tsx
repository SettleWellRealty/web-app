"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import type React from "react";
import { useEffect, useRef, useState } from "react";

const formatTitle = (title: string): string => {
	// Special case for known acronyms (add more as needed)
	const knownAcronyms = ["cto", "ceo", "cfo", "coo"];
	const inputTitle = title.toLowerCase();

	// If the input is already in all caps and it's a known acronym, keep it
	if (title === title.toUpperCase() && knownAcronyms.includes(inputTitle)) {
		return title;
	}

	// For known acronyms in any case
	if (knownAcronyms.includes(inputTitle)) {
		return inputTitle.toUpperCase();
	}

	// For multi-word titles (if they contain spaces or hyphens)
	if (title.includes(" ") || title.includes("-")) {
		return title
			.split(/[\s-]+/)
			.map((word) => {
				if (knownAcronyms.includes(word.toLowerCase())) {
					return word.toUpperCase();
				}
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ");
	}

	// Single word that's not an acronym
	return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

export default function EmailSignature() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		title: "",
		phone: "",
		useFirstNameOnly: false,
	});
	const previewRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Preload icons
		const iconUrls = [
			"https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/phone-icon-1.png",
			"https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/email-icon-1.png",
			"https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/link-icon-1.png",
		];

		Promise.all(
			iconUrls.map((url) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.onload = () => resolve(url);
					img.onerror = reject;
					img.src = url;
				});
			}),
		).catch((error) => console.error("Failed to preload icons:", error));

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const formatPhoneNumber = (input: string): string => {
		// Remove all non-digits
		const cleaned = input.replace(/\D/g, "");
		// Take only the first 10 digits
		const digits = cleaned.slice(0, 10);

		if (digits.length === 10) {
			// Format as: +1 (XXX) XXX-XXXX
			return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
		}
		// Return the digits as is while typing
		return digits;
	};

	const capitalizeFirstLetter = (str: string): string => {
		if (!str) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const generateEmail = (): string => {
		const firstName = formData.firstName.toLowerCase();
		const lastName = formData.lastName.toLowerCase();
		return formData.useFirstNameOnly
			? `${firstName}@settlewellrealty.com`
			: `${firstName}.${lastName}@settlewellrealty.com`;
	};

	const generateSignatureHTML = () => {
		const formattedPhone = formatPhoneNumber(formData.phone);
		const email = generateEmail();
		const formattedTitle = formatTitle(formData.title);

		return `<div style="max-width: 100%; overflow-x: auto;">
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="
          border-collapse: collapse;
          border-spacing: 0;
          border: 0 !important;
          outline: 0 !important;
          font-family: Arial, sans-serif;
          font-size: medium;
          max-width: 750px;
          margin: 0;
          padding: 8px 0;
          background: transparent;
          box-shadow: none;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          transform-origin: left top;
          vertical-align: middle;
          ${isMobile ? "transform: scale(0.75);" : ""}
        "
      >
        <tbody style="border: 0 !important; outline: 0 !important;">
          <tr style="border: 0 !important; outline: 0 !important; border-spacing: 0;">
            <!-- 1) Logo -->
            <td style="vertical-align: middle; padding: 0 10px 0 0; width: 130px; height: 140px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly; font-size: 0; line-height: 0;">
              <img
                src="https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/swr-icon.png"
                width="130"
                height="130"
                alt="Settle Well Realty Logo"
                style="display: block; width: 130px; height: 130px; max-width: 130px; border: 0; margin: 0; padding: 0;"
              />
            </td>

            <!-- 2) Name, Title, Company -->
            <td style="vertical-align: middle; padding: 0; width: 220px; min-width: 220px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly; mso-width-percent: 100;">
              <div style="padding: 0 10px; width: 100%; min-width: 220px;">
                <h2
                  style="
                    margin: 0;
                    padding: 0;
                    font-size: 18px;
                    color: #000;
                    font-weight: 600;
                    border: 0;
                    white-space: nowrap;
                    width: 100%;
                  "
                >
                  ${capitalizeFirstLetter(formData.firstName)} ${capitalizeFirstLetter(formData.lastName)}
                </h2>
                <p
                  style="
                    margin: 0;
                    padding: 0;
                    font-size: 14px;
                    color: #000;
                    font-weight: 500;
                    line-height: 22px;
                    white-space: nowrap;
                    border: 0;
                  "
                >
                  ${formattedTitle}&nbsp;|&nbsp;Settle&nbsp;Well&nbsp;Realty
                </p>
                <p
                  style="
                    margin: 5px 0 0 0;
                    padding: 0;
                    font-size: 12px;
                    color: #666;
                    font-weight: 400;
                    line-height: 18px;
                    border: 0;
                  "
                >
                  Settle Well, Live Better.
                </p>
              </div>
            </td>

            <!-- 3) Solid Separator -->
            <td
              style="
                width: 1px;
                border: 0 !important;
                border-left: 1px solid #ccc !important;
                height: auto;
                padding: 5px 0;
                outline: 0 !important;
                mso-line-height-rule: exactly;
              "
            ></td>

            <!-- 4) Contact Info -->
            <td style="vertical-align: middle; padding-left: 15px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly;">
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  border-collapse: collapse;
                  border: 0 !important;
                  outline: 0 !important;
                  background: transparent;
                  box-shadow: none;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                "
              >
                <tbody style="border: 0 !important; outline: 0 !important;">
                  <!-- Phone -->
                  <tr style="border: 0 !important; outline: 0 !important;">
                    <td style="vertical-align: middle; padding-right: 5px; padding-bottom: 5px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly;">
                      <img
                        src="https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/phone-icon-1.png"
                        width="25"
                        height="25"
                        alt="Phone Icon"
                        style="display: block; border: 0; min-width: 25px; min-height: 25px; max-width: 25px; max-height: 25px;"
                      />
                    </td>
                    <td style="border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly; white-space: nowrap; width: 200px; min-width: 200px;">
                      <a
                        href="tel:${formattedPhone}"
                        style="
                          text-decoration: none;
                          color: #000;
                          font-size: 12px;
                          border: 0;
                          white-space: nowrap;
                        "
                      >
                        ${formattedPhone}
                      </a>
                    </td>
                  </tr>

                  <!-- Email -->
                  <tr style="border: 0 !important; outline: 0 !important;">
                    <td style="vertical-align: middle; padding-right: 5px; padding-bottom: 5px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly;">
                      <img
                        src="https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/email-icon-1.png"
                        width="25"
                        height="25"
                        alt="Email Icon"
                        style="display: block; border: 0; min-width: 25px; min-height: 25px; max-width: 25px; max-height: 25px;"
                      />
                    </td>
                    <td style="border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly; white-space: nowrap; width: 200px; min-width: 200px;">
                      <a
                        href="mailto:${email}"
                        style="
                          text-decoration: none;
                          color: #000;
                          font-size: 12px;
                          border: 0;
                          white-space: nowrap;
                        "
                      >
                        ${email}
                      </a>
                    </td>
                  </tr>

                  <!-- Website -->
                  <tr style="border: 0 !important; outline: 0 !important;">
                    <td style="vertical-align: middle; padding-right: 5px; border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly;">
                      <img
                        src="https://8092761.fs1.hubspotusercontent-na1.net/hubfs/8092761/Company%20Media/swr/link-icon-1.png"
                        width="25"
                        height="25"
                        alt="Website Icon"
                        style="display: block; border: 0; min-width: 25px; min-height: 25px; max-width: 25px; max-height: 25px;"
                      />
                    </td>
                    <td style="border: 0 !important; outline: 0 !important; mso-line-height-rule: exactly; white-space: nowrap; width: 200px; min-width: 200px;">
                      <a
                        href="https://settlewellrealty.com"
                        style="
                          text-decoration: none;
                          color: #000;
                          font-size: 12px;
                          border: 0;
                          white-space: nowrap;
                        "
                      >
                        https://settlewellrealty.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === "phone") {
			// Only allow digits
			const digits = value.replace(/\D/g, "").slice(0, 10);
			setFormData((prev) => ({ ...prev, [name]: digits }));
		} else if (name === "title") {
			setFormData((prev) => ({ ...prev, [name]: formatTitle(value) }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const copyToClipboard = async (type: "HTML" | "Signature") => {
		// Check if all required fields are filled
		if (
			!formData.firstName ||
			!formData.lastName ||
			!formData.title ||
			formData.phone.replace(/\D/g, "").length !== 10
		) {
			toast({
				title: "Missing Information",
				description: "Please fill in all required fields before copying.",
				variant: "destructive",
			});
			return;
		}

		try {
			if (type === "HTML") {
				// Copy the raw HTML source code
				await navigator.clipboard.writeText(generateSignatureHTML());
			} else {
				// Copy the rendered signature
				if (previewRef.current) {
					const range = document.createRange();
					range.selectNode(previewRef.current);
					const selection = window.getSelection();
					if (selection) {
						selection.removeAllRanges();
						selection.addRange(range);
						document.execCommand("copy");
						selection.removeAllRanges();
					}
				}
			}

			toast({
				title: "Copied!",
				description: `${type === "HTML" ? "HTML source code" : "Signature"} has been copied to your clipboard.`,
			});
		} catch (_err) {
			toast({
				title: "Error",
				description: "Failed to copy to clipboard. Please try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="min-h-screen flex flex-col dark:bg-zinc-900">
			<main className="flex-grow container mx-auto px-4 py-4 sm:py-8 max-w-4xl">
				<div className="space-y-6 sm:space-y-8">
					<div>
						<h1 className="text-3xl sm:text-4xl font-semibold mb-2 dark:text-white">
							Email Signature Generator
						</h1>
						<p className="text-gray-600 dark:text-gray-300">
							Create your professional Settle Well Realty email signature by
							filling out the form below.
						</p>
					</div>

					<div className="grid gap-4 sm:gap-6 p-4 sm:p-6 border rounded-lg bg-white dark:bg-zinc-800 dark:border-zinc-700">
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name *</Label>
								<Input
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleInputChange}
									placeholder="King"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name *</Label>
								<Input
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleInputChange}
									placeholder="Tutankhamun"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="title">Title *</Label>
							<Input
								id="title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
								placeholder="CEO"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="phone">Phone *</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								value={formData.phone}
								onChange={handleInputChange}
								placeholder="8675309123"
								maxLength={10}
								required
							/>
							<p className="text-sm text-gray-500">
								Please enter your 10-digit phone number - it will be formatted
								automatically
							</p>
						</div>

						<div className="flex items-center space-x-2">
							<Switch
								id="email-format"
								checked={formData.useFirstNameOnly}
								onCheckedChange={(checked) =>
									setFormData((prev) => ({
										...prev,
										useFirstNameOnly: checked,
									}))
								}
							/>
							<Label htmlFor="email-format" className="dark:text-gray-200">
								Use first name only for email address
							</Label>
						</div>
					</div>

					<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
						<Button
							onClick={() => copyToClipboard("HTML")}
							className="w-full dark:hover:bg-primary/70"
							size="lg"
						>
							Copy Source Code
						</Button>
						<Button
							onClick={() => copyToClipboard("Signature")}
							className="w-full dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-700"
							size="lg"
							variant="outline"
						>
							Copy Signature
						</Button>
					</div>

					<div className="border rounded-lg p-4 sm:p-6 bg-white dark:bg-zinc-800 dark:border-zinc-700">
						<h2 className="text-xl font-semibold mb-4 dark:text-white">
							Preview
						</h2>
						<div
							ref={previewRef}
							className="rounded overflow-x-auto"
							style={{ background: "white" }}
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: generateSignatureHTML() }}
						/>
					</div>

					<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
						<a
							href="https://knowledge.hubspot.com/account-management/add-an-email-signature-in-the-crm"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#FF7A59] hover:bg-[#ff8f73] text-white font-medium transition-colors"
						>
							How to Add Signature to HubSpot
						</a>
						<a
							href="https://support.microsoft.com/en-us/office/create-and-add-an-email-signature-in-outlook-web-app-0f230564-11b9-4239-83de-f10cbe4dfdfc"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#0078D4] hover:bg-[#106EBE] text-white font-medium transition-colors"
						>
							How to Add Signature to Outlook
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
