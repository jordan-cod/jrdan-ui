import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Label } from "./label";

afterEach(cleanup);

describe("Label", () => {
	it("renders with text", () => {
		render(<Label>Email</Label>);
		expect(screen.getByText("Email")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<Label data-testid="label">Name</Label>);
		expect(screen.getByTestId("label")).toHaveAttribute("data-slot", "label");
	});

	it("associates with input via htmlFor", () => {
		render(
			<>
				<Label htmlFor="email">Email</Label>
				<input id="email" />
			</>,
		);
		expect(screen.getByText("Email")).toHaveAttribute("for", "email");
	});

	it("merges custom className", () => {
		render(
			<Label className="custom-class" data-testid="label">
				Name
			</Label>,
		);
		expect(screen.getByTestId("label").className).toContain("custom-class");
	});
});
