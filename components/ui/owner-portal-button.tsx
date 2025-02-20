"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Brand } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";

export function OwnerPortalButton() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Owner Portal</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Redirecting to DoorLoop</AlertDialogTitle>
					<AlertDialogDescription>
						You are about to be redirected to DoorLoop.com, our property
						management platform.
					</AlertDialogDescription>
					<AlertDialogDescription>
						If you haven&apos;t created an account yet, please contact us first:
					</AlertDialogDescription>
					<div className="mt-2 space-y-1 text-sm text-muted-foreground">
						<div>
							Email:{" "}
							<a href={`mailto:${Brand.email}`} className="hover:underline">
								{Brand.email}
							</a>
						</div>
						<div>
							Phone:{" "}
							<a href={`tel:${Brand.phone}`} className="hover:underline">
								{Brand.phone}
							</a>
						</div>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={() => window.open("https://doorloop.com", "_blank")}
					>
						Continue to DoorLoop
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
