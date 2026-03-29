import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Input } from "./input";

afterEach(cleanup);

describe("Input", () => {
	it("renders an input element", () => {
		render(<Input placeholder="Type here" />);
		expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
	});

	it("has data-slot attribute", () => {
		render(<Input data-testid="input" />);
		expect(screen.getByTestId("input")).toHaveAttribute("data-slot", "input");
	});

	it("applies type attribute", () => {
		render(<Input type="email" data-testid="input" />);
		expect(screen.getByTestId("input")).toHaveAttribute("type", "email");
	});

	it("handles change events", async () => {
		const onChange = vi.fn();
		render(<Input onChange={onChange} placeholder="Type" />);
		await userEvent.type(screen.getByPlaceholderText("Type"), "hello");
		expect(onChange).toHaveBeenCalled();
	});

	it("is disabled when disabled prop is set", () => {
		render(<Input disabled data-testid="input" />);
		expect(screen.getByTestId("input")).toBeDisabled();
	});

	it("merges custom className", () => {
		render(<Input className="custom-class" data-testid="input" />);
		expect(screen.getByTestId("input").className).toContain("custom-class");
	});
});
