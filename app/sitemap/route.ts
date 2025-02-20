import { Brand } from "@/components/ui/brand";
import { NextResponse } from "next/server";

export async function GET() {
	const baseUrl = `https://${Brand.domain}`;

	const staticPages = [
		{ path: "/", changefreq: "daily", priority: 1.0 },
		{ path: "/terms-of-service", changefreq: "yearly", priority: 0.7 },
		{ path: "/privacy-policy", changefreq: "yearly", priority: 0.7 },
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
				.map(
					(page) => `
        <url>
          <loc>${baseUrl}${page.path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`,
				)
				.join("")}
    </urlset>`;

	return new NextResponse(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
