import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

afterEach(cleanup);

describe("Card", () => {
	it("renders with content", () => {
		render(
			<Card>
				<CardContent>Hello</CardContent>
			</Card>,
		);
		expect(screen.getByText("Hello")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<Card data-testid="card">Content</Card>);
		expect(screen.getByTestId("card")).toHaveAttribute("data-slot", "card");
	});

	it("renders full card structure", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>Body</CardContent>
				<CardFooter>Footer</CardFooter>
			</Card>,
		);
		expect(screen.getByText("Title")).toBeInTheDocument();
		expect(screen.getByText("Description")).toBeInTheDocument();
		expect(screen.getByText("Body")).toBeInTheDocument();
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});

	it("applies custom className", () => {
		render(
			<Card data-testid="card" className="custom">
				Content
			</Card>,
		);
		expect(screen.getByTestId("card").className).toContain("custom");
	});

	it("renders CardTitle with font-semibold", () => {
		render(<CardTitle>Title</CardTitle>);
		expect(screen.getByText("Title")).toHaveClass("font-semibold");
	});

	it("renders CardDescription with muted style", () => {
		render(<CardDescription>Desc</CardDescription>);
		expect(screen.getByText("Desc")).toHaveClass(
			"text-muted-foreground",
			"text-sm",
		);
	});
});
