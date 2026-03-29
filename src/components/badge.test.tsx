import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Badge } from "./badge";

afterEach(cleanup);

describe("Badge", () => {
	it("renders with text", () => {
		render(<Badge>Label</Badge>);
		expect(screen.getByText("Label")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<Badge>Slot</Badge>);
		expect(screen.getByText("Slot")).toHaveAttribute("data-slot", "badge");
	});

	it("applies default variant", () => {
		render(<Badge>Default</Badge>);
		expect(screen.getByText("Default").className).toContain("bg-primary");
	});

	it("applies secondary variant", () => {
		render(<Badge variant="secondary">Secondary</Badge>);
		expect(screen.getByText("Secondary").className).toContain("bg-secondary");
	});

	it("applies destructive variant", () => {
		render(<Badge variant="destructive">Destructive</Badge>);
		expect(screen.getByText("Destructive").className).toContain(
			"bg-destructive",
		);
	});

	it("applies outline variant", () => {
		render(<Badge variant="outline">Outline</Badge>);
		expect(screen.getByText("Outline").className).toContain("text-foreground");
	});

	it("renders with icon", () => {
		render(<Badge icon={<svg data-testid="icon" />}>With Icon</Badge>);
		expect(screen.getByTestId("icon")).toBeInTheDocument();
		expect(screen.getByText("With Icon")).toBeInTheDocument();
	});

	it("merges custom className", () => {
		render(<Badge className="custom">Custom</Badge>);
		expect(screen.getByText("Custom").className).toContain("custom");
	});

	it("renders as child with asChild", () => {
		render(
			<Badge asChild variant="outline">
				<a href="/test">Link Badge</a>
			</Badge>,
		);
		const link = screen.getByRole("link", { name: "Link Badge" });
		expect(link).toHaveAttribute("href", "/test");
		expect(link).toHaveAttribute("data-slot", "badge");
	});
});
