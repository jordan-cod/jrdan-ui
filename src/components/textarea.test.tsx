import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Textarea } from "./textarea";

afterEach(cleanup);

describe("Textarea", () => {
	it("renders a textarea element", () => {
		render(<Textarea placeholder="Type here" />);
		expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<Textarea data-testid="textarea" />);
		expect(screen.getByTestId("textarea")).toHaveAttribute(
			"data-slot",
			"textarea",
		);
	});

	it("handles change events", async () => {
		const onChange = vi.fn();
		render(<Textarea onChange={onChange} placeholder="Type" />);
		await userEvent.type(screen.getByPlaceholderText("Type"), "hello");
		expect(onChange).toHaveBeenCalled();
	});

	it("is disabled when disabled prop is set", () => {
		render(<Textarea disabled data-testid="textarea" />);
		expect(screen.getByTestId("textarea")).toBeDisabled();
	});

	it("merges custom className", () => {
		render(<Textarea className="custom-class" data-testid="textarea" />);
		expect(screen.getByTestId("textarea").className).toContain("custom-class");
	});
});
