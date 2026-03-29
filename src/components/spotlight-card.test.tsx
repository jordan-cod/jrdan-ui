import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SpotlightCard } from "./spotlight-card";

afterEach(cleanup);

describe("SpotlightCard", () => {
	it("renders children", () => {
		render(<SpotlightCard>Content</SpotlightCard>);
		expect(screen.getByText("Content")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<SpotlightCard data-testid="sc">Content</SpotlightCard>);
		expect(screen.getByTestId("sc")).toHaveAttribute(
			"data-slot",
			"spotlight-card",
		);
	});

	it("applies custom className", () => {
		render(
			<SpotlightCard data-testid="sc" className="custom">
				Content
			</SpotlightCard>,
		);
		expect(screen.getByTestId("sc").className).toContain("custom");
	});

	it("shows spotlight on mouse enter", () => {
		render(<SpotlightCard data-testid="spotlight">Content</SpotlightCard>);
		const card = screen.getByTestId("spotlight");
		const spotlight = card.querySelector(".pointer-events-none");

		expect(spotlight).toHaveStyle({ opacity: "0" });
		fireEvent.mouseEnter(card);
		expect(spotlight).toHaveStyle({ opacity: "0.6" });
	});

	it("hides spotlight on mouse leave", () => {
		render(<SpotlightCard data-testid="spotlight">Content</SpotlightCard>);
		const card = screen.getByTestId("spotlight");
		const spotlight = card.querySelector(".pointer-events-none");

		fireEvent.mouseEnter(card);
		fireEvent.mouseLeave(card);
		expect(spotlight).toHaveStyle({ opacity: "0" });
	});
});
