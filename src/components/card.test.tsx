import { cleanup, fireEvent, render, screen } from "@testing-library/react";
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

	it("does not render spotlight overlay by default", () => {
		render(<Card data-testid="card">Content</Card>);
		const card = screen.getByTestId("card");
		expect(card.querySelector(".pointer-events-none")).toBeNull();
	});

	it("renders spotlight overlay when spotlight is true", () => {
		render(
			<Card data-testid="card" spotlight>
				Content
			</Card>,
		);
		const card = screen.getByTestId("card");
		expect(card.querySelector(".pointer-events-none")).toBeInTheDocument();
	});

	it("shows spotlight on mouse enter", () => {
		render(
			<Card data-testid="card" spotlight>
				Content
			</Card>,
		);
		const card = screen.getByTestId("card");
		const spotlight = card.querySelector(".pointer-events-none");

		expect(spotlight).toHaveStyle({ opacity: "0" });
		fireEvent.mouseEnter(card);
		expect(spotlight).toHaveStyle({ opacity: "0.6" });
	});

	it("hides spotlight on mouse leave", () => {
		render(
			<Card data-testid="card" spotlight>
				Content
			</Card>,
		);
		const card = screen.getByTestId("card");
		const spotlight = card.querySelector(".pointer-events-none");

		fireEvent.mouseEnter(card);
		fireEvent.mouseLeave(card);
		expect(spotlight).toHaveStyle({ opacity: "0" });
	});
});
